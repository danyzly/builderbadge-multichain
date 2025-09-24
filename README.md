# BuilderBadge Multichain

**Multichain Soulbound Badge (ERC-721, one per wallet).**  
Verified smart contracts deployed on **Celo** (mainnet) and expanding to **Base** and other EVM-compatible networks.  

This project provides a secure and friendly minting experience, allowing users to claim their badge for free.  

---

## 🧭 Networks

- **Celo (mainnet)** — Address: `0x41e00f57D18a8e4e0E090E4032E3FcEb4C2379B2`  
  TokenURI (IPFS): `ipfs://bafkreiaq4tg3zzetq4lgdjzc3gloyelq4hrzq7gghu2xdtyb6jfujp6bg4`

- **Base (mainnet)** — Address: `0xBceF870dC2ED8Cd7EAB9aA44870A4766e793fe4C`  
  TokenURI (IPFS): `ipfs://bafkreiem47nvbvx63n5cbteepr44mdr6trfn7ojojje6mpmpctjgmxz6i4`

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
builderbadge-multichain/
├── contracts/
│ ├── BuilderBadge.abi.json
│ ├── BuilderBadge.celo.abi.json
│ └── BuilderBadge.base.abi.json
│
├── deploy/
│ ├── celo/
│ │ └── addresses.json
│ └── base/
│ └── addresses.json
│
├── frontend/
│ ├── mint-celo/
│ │ ├── index.html
│ │ └── app.js
│ └── mint-base/
│ ├── index.html
│ └── app.js
│
├── metadata/
│ ├── builder-badge-celo.json
│ ├── builder-badge-base.json
│ └── sample.json
│
├── scripts/
│ ├── common/
│ │ └── rpc.js
│ └── celo/
│ └── claim-check.js
│
├── security/
│ └── SECURITY.md
│
├── .github/
│ ├── ISSUE_TEMPLATE/
│ │ ├── bug_report.md
│ │ ├── feature_request.md
│ │ └── config.yml
│ ├── pull_request_template.md
│ └── FUNDING.yml
│
├── .gitignore
├── LICENSE
├── README.md
└── CONTRIBUTING.md

```
---

## 📜 License
MIT License © 2025 Dany Zly
