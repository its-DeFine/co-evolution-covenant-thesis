# Key management (draft)

This repo uses public/private key signatures (currently Ethereum-style ECDSA) to produce authorship proofs.

This document is **not** professional security advice. It is a draft checklist intended to reduce obvious risks.

## Principles

- Treat signing keys as **high-value secrets**.
- Prefer a **dedicated key** for authorship proofs (don’t reuse your primary wallet).
- Never commit private keys, seed phrases, or keystores to git.
- Plan for **rotation** and **revocation** from day one.

## Recommended custody

### Best: hardware wallet

Use a hardware wallet for signing authorship claims. This keeps the private key off the computer.

### Good: encrypted keystore + strong password

If using a software wallet:

- store an encrypted keystore (not a raw private key),
- use a strong password (ideally in a password manager),
- keep backups offline.

### Avoid: plaintext keys on disk

Storing raw private keys or mnemonics unencrypted on disk increases blast radius (malware, backups, cloud sync, screen sharing).

## Rotation

Reasons to rotate:

- suspected compromise,
- device loss,
- moving to a hardware wallet,
- operational separation (different projects).

### Rotation procedure (off-chain)

1) Generate a new key.
2) Publish a signed statement with the old key that names the new key:
   - “I, `<oldAddress>`, rotate to `<newAddress>` as of `<date>`.”
3) Optionally countersign the same statement with the new key.
4) Commit the rotation proof in `proofs/` (no secrets) and update references in the repo.

### Rotation procedure (on-chain, draft)

If you deploy an on-chain registry, emit an event that links old → new, or maintain a revocation list.

## Revocation

If a key is compromised:

- publish a revocation proof as soon as possible,
- stop using the key for new signatures,
- if a registry exists, mark the key revoked or superseded.

## Verification guidance

Verifiers should treat “authorship proofs” as:

- evidence that a key holder signed a statement about an artifact hash, not
- proof of real-world identity, personhood, or exclusive ownership.

Identity binding is contextual and optional; prefer privacy-preserving identifiers.

