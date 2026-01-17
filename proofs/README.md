# Proofs

This folder contains signed proof objects (JSON) intended for third-party verification.

- `author-proof.ethereum.json` — EIP‑191 `personal_sign` style signature binding an Ethereum address to `THESIS.md` (via SHA‑256).

Verification:

- https://etherscan.io/verifySig (manual)
- `npm ci`
- `npm run verify:author-proof` (local, recommended; defaults to `HEAD`)
