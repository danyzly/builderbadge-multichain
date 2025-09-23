// scripts/celo/claim-check.js
// Usage: TATUM_API_KEY=xxxxx node scripts/celo/claim-check.js 0xWallet
import fs from 'node:fs';
import path from 'node:path';
import { getAddress, Contract } from 'ethers';
import { celoProviderFromTatum } from '../common/rpc.js';

const ADDR_PATH = path.resolve('deploy/celo/addresses.json');
const ABI_PATH  = path.resolve('contracts/BuilderBadge.abi.json');

const { BuilderBadge } = JSON.parse(fs.readFileSync(ADDR_PATH, 'utf8'));
const ABI = JSON.parse(fs.readFileSync(ABI_PATH, 'utf8'));

const API_KEY = process.env.TATUM_API_KEY;
if (!API_KEY) {
  console.error('Missing TATUM_API_KEY environment variable.');
  process.exit(1);
}

const provider = celoProviderFromTatum(API_KEY, 'mainnet');
const contract = new Contract(BuilderBadge, ABI, provider);

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.log('Usage: node scripts/celo/claim-check.js <0xWallet>');
    process.exit(0);
  }
  const wallet = getAddress(arg);

  const bal = await contract.balanceOf(wallet);
  const minted = bal > 0n;
  const total = await contract.totalMinted();

  console.log(`Wallet ${wallet} minted? ${minted ? 'YES' : 'NO'}`);
  console.log(`totalMinted = ${total.toString()}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
