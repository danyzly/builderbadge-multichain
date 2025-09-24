# Contributing

Thanks for your interest! Please follow these guidelines.

## Workflow
- Fork and create feature branches from `main`.
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, etc.
- Open a PR with a clear description and checklist (see PR template).

## Project layout
- Contracts ABI per chain in `contracts/`
- Deployed addresses per chain in `deploy/<chain>/addresses.json`
- Frontends in `frontend/mint-<chain>/`
- Metadata in `metadata/`

## Development
For a quick local server:
```bash
# from repo root
cd frontend/mint-celo && npx serve .
# or
cd ../mint-base && npx serve .

Then open the local URL in your browser (default: http://localhost:3000
).

🔐 Security

Never commit private keys or API keys. Please report vulnerabilities via SECURITY.md.

✅ PR Checklist

 Follows Conventional Commits

 Tested locally (describe how)

 No secrets/keys included

 Updated docs/README if applicable
