# BuilderBadge Multichain

**Multichain Soulbound Badge (ERC-721, one per wallet).**  
Verified smart contracts deployed on **Celo** (mainnet) and expanding to **Base** and other EVM-compatible networks.  

This project provides a secure and friendly minting experience, allowing users to claim their badge for free.  

---

## 🎯 Project Goals
- Soulbound Badge: non-transferable, one per wallet.  
- Secure deployments with verified contracts.  
- Start on Celo, expand to Base, Optimism Superchain, and other EVM networks.  
- Friendly UI for mass adoption.  

---

## 🛠 Tech Stack
- **Solidity** — Smart contract logic.  
- **JavaScript / Ethers.js** — Frontend + scripts.  
- **Tatum RPC** — Gateway for Celo + utilities.  
- **MetaMask / Wallets** — User interaction.  

---

## 📂 Repository Structure (planned)

```markdown
├── contracts/
│   └── BuilderBadge.abi.json
├── deploy/
│   ├── celo/
│   │   └── addresses.json
├── metadata/
│   └── sample.json
├── scripts/
│   ├── common/
│   │   └── rpc.js
│   └── celo/
│       └── claim-check.js
└── frontend/
    └── mint-celo/
        ├── index.html
        └── app.js

```
---

## 📜 License
MIT License © 2025 Dany Zly
