# Hashing + canonicalization (draft)

This repo uses signed “authorship proofs” that bind a public key to an artifact hash. For proofs to be verifiable across machines, the bytes that get hashed must be clearly defined.

## Canonical bytes for Git-hosted artifacts

For artifacts tracked in this repository, the canonical bytes are:

1) the file contents as stored in **git** at a specific commit, and
2) read as raw bytes (no normalization, no transcoding).

This avoids ambiguity from:

- OS-specific line endings (LF vs CRLF),
- editor auto-formatting,
- different filesystem encodings.

### Recommended verification source

Prefer hashing bytes sourced from git, e.g.:

- `git show <commit>:THESIS.md`

…rather than hashing the working tree, which may include uncommitted edits.

## Hash algorithms

### Off-chain proofs (current)

`proofs/author-proof.ethereum.json` currently uses:

- `sha256(canonical_bytes)` encoded as lowercase hex.

Rationale: SHA-256 is widely available and stable; the 32-byte digest fits directly into an Ethereum `bytes32` if you want to anchor it on-chain.

### On-chain anchors (draft)

The `AuthorshipRegistry` contract spec accepts a `bytes32 artifactHash`. In this repo, that hash **may** be the SHA-256 digest bytes (not the hex string).

If/when multiple hash algorithms are supported, the on-chain interface should be extended to include an explicit hash algorithm identifier, or the hash should be namespaced (e.g. `keccak256("sha256:" || digestBytes)`).

## Practical commands

### SHA-256 of `THESIS.md` at a commit

macOS:

```bash
git show <commit>:THESIS.md | shasum -a 256
```

Linux (coreutils):

```bash
git show <commit>:THESIS.md | sha256sum
```

### Programmatic verification

See `scripts/verify-author-proof.mjs`.

