// frontend/mint-base/app.js
// Dapp de minteo en Base mainnet (chainId 8453)

import ABI from '../../contracts/BuilderBadge.base.abi.json' assert { type: 'json' };

const BASE_CHAIN_ID = 8453; // Base mainnet
const CONTRACT = '0xBceF870dC2ED8Cd7EAB9aA44870A4766e793fe4C';

const $ = (s) => document.querySelector(s);
const btnConnect = $('#btn-connect');
const btnClaim   = $('#btn-claim');
const $acct      = $('#account');
const $minted    = $('#minted');
const $status    = $('#status');
const $info      = $('#info');

let provider, signer, contract, account;

function ui(msg, cls = '') {
  $status.innerHTML = `<p class="${cls}">${msg}</p>`;
}

async function ensureBase() {
  const chainIdHex = await provider.send('eth_chainId', []);
  const current = parseInt(chainIdHex, 16);
  if (current !== BASE_CHAIN_ID) {
    // 8453 decimal = 0x2105 hex
    await provider.send('wallet_switchEthereumChain', [{ chainId: '0x2105' }]);
  }
}

async function connect() {
  if (!window.ethereum) {
    ui('Please install an EVM wallet (e.g., MetaMask).', 'err');
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  await ensureBase();

  signer = await provider.getSigner();
  account = await signer.getAddress();
  $acct.textContent = account;

  contract = new ethers.Contract(CONTRACT, ABI, signer);

  await refreshState();
  btnClaim.disabled = false;
}

async function refreshState() {
  $info.textContent = 'Loading...';
  try {
    const [balance, total] = await Promise.all([
      contract.balanceOf(account),
      contract.totalMinted()
    ]);
    const has = balance > 0n;
    $minted.textContent = `Global minted: ${total.toString()} | You: ${has ? 'ALREADY minted' : 'Not yet'}`;
    $info.textContent = '';
    if (has) btnClaim.disabled = true;
  } catch (e) {
    console.error(e);
    $info.textContent = 'Could not read contract state.';
  }
}

async function claim() {
  try {
    ui('Sending claim transaction...');
    const tx = await contract.claim();
    ui(`Tx sent: ${tx.hash}. Waiting for confirmation...`);
    await tx.wait();
    ui('Done! Badge minted ✅', 'ok');
    await refreshState();
  } catch (e) {
    console.error(e);
    ui(`Error: ${e.shortMessage || e.message}`, 'err');
  }
}

btnConnect.addEventListener('click', connect);
btnClaim.addEventListener('click', claim);
