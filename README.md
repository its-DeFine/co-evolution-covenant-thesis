# The Co‑Evolution Covenant (Thesis Draft)

This repository contains an in-progress thesis draft on a constructive human–AI partnership model: an AI that is *with* you (and controlled by you) while both human capability and AI capability evolve together in a governed, positive‑sum loop.

**Status**: Under active development — not yet finalised.

## Read

- `THESIS.md` — main draft
- `evaluation/` — draft evaluation protocol + rubric

## Proofs

- `proofs/author-proof.ethereum.json` — signed authorship claim for `THESIS.md` (EIP-191 `personal_sign` style)

Verification options:

- Etherscan “Verify Signature” tool (paste message + signature + address): https://etherscan.io/verifySig
- Local verification script:
  - `npm ci`
  - `npm run verify:author-proof -- --git-ref <commit>`

## Specs

- `spec/` — draft JSON schemas and contract notes (implementation-oriented; expected to change)
- Hashing canonicalization: `spec/hashing.md`

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
