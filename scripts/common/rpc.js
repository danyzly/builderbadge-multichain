// scripts/common/rpc.js
// Read-only provider for CELO via Tatum RPC Gateway (ethers v6).
// Do NOT expose your Tatum API key in the frontend.
import { JsonRpcProvider, FetchRequest } from 'ethers';

export function celoProviderFromTatum(apiKey, network = 'mainnet') {
  const base = network === 'mainnet'
    ? 'https://celo-mainnet.gateway.tatum.io'
    : 'https://celo-testnet.gateway.tatum.io';

  const fr = new FetchRequest(base);
  fr.setHeader('x-api-key', apiKey);

  return new JsonRpcProvider(fr, { name: 'celo', chainId: 42220 });
}
