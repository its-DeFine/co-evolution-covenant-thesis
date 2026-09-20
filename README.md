# The Co‑Evolution Covenant (Thesis Draft)

This repository contains an in-progress thesis draft on a constructive human–AI partnership model: an AI that is *with* you (and controlled by you) while both human capability and AI capability evolve together in a governed, positive‑sum loop.

**Status**: Under active development — not yet finalised. A September 2026
research review qualifies several draft claims; see the update below first.

## Read

- [RESEARCH-UPDATE-2026-09.md](RESEARCH-UPDATE-2026-09.md) — research update, 21 September 2026 (start here)
- [WHITEPAPER.md](WHITEPAPER.md) — public whitepaper draft (earlier draft; read with the addendum)
- [THESIS.md](THESIS.md) — longer working draft (earlier draft; read with the addendum)
- `evaluation/` — draft evaluation protocol + rubric
- `REFERENCES.md` — working bibliography

## Proofs

- `proofs/author-proof.ethereum.json` — signed authorship proof covering
  `WHITEPAPER.md` and `REFERENCES.md` only (EIP‑191 `personal_sign` style).
  `RESEARCH-UPDATE-2026-09.md` is not covered by that proof and makes no new
  signed claim.

Verification options:

- Etherscan “Verify Signature” tool (paste message + signature + address): https://etherscan.io/verifySig
- Local verification script:
  - `npm ci`
  - `npm run verify:author-proof` (defaults to `HEAD`)
  - optional: `npm run verify:author-proof -- --git-ref <commit>`
- Regenerate proof (authors only; requires signing key): `npm run generate:author-proof`

## Specs

- `spec/` — draft JSON schemas and contract notes (implementation-oriented; expected to change)
- Hashing canonicalization: `spec/hashing.md`
- On-chain anchor reference: `contracts/` (compile with `forge build`)

## Feedback

- Open an issue for critique, missing references, or conceptual gaps.
- Open a PR for edits (see `CONTRIBUTING.md`).

## Disclaimer (summary)

This is conceptual work-in-progress, not professional advice. Do not use this draft as a credentialing system, HR filter, or psychological assessment.

Full disclaimer: `DISCLAIMER.md`.

Safety notes:

- Threat model: `THREAT_MODEL.md`
- Key custody/rotation: `KEY_MANAGEMENT.md`

## License

Text is licensed under **CC BY 4.0**. See `LICENSE`.

## Notes

- This is a working document. Sections, definitions, and proposed mechanisms may change substantially.
