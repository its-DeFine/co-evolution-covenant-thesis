# Smart Contract Spec (Draft)
## Authorship Registry (Co‑Evolution Covenant)

This document specifies a minimal smart contract for anchoring authorship proofs on-chain, so third parties can verify authorship claims without trusting GitHub alone.

This is a draft spec (not audited; not deployed).

---

## Goals

- Provide an **on-chain anchor** for “author X claims artifact hash H”.
- Support both:
  - direct registration (author submits the transaction), and
  - meta-transactions (a relayer submits with an author signature).
- Minimize on-chain data:
  - store hashes + optional pointers (URIs),
  - avoid storing plaintext documents or PII.

## Non-goals

- Global identity / personhood validation.
- “Intelligence scoring” or human ranking.
- Replacing off-chain discourse; this is a verification primitive, not a credential.

---

## Definitions

- **Artifact**: any authored object (e.g. a thesis file), identified by a `bytes32 artifactHash`.
- **artifactHash**: a cryptographic hash of canonical bytes (recommended: `keccak256(canonicalBytes)`).
  - For Git-hosted artifacts, canonical bytes can be the raw file contents at a specific commit.
- **URI**: an optional pointer (e.g., GitHub URL, IPFS CID) describing where to fetch the artifact or proof bundle.
- **Author**: an EOA address (or contract wallet) that claims authorship.

---

## Data model

### Storage

`mapping(bytes32 => Record) public records;`

Where:

```
struct Record {
  address author;
  uint64  registeredAt;
  string  uri;          // optional
  bool    revoked;      // optional
}
```

### Events

```
event Registered(bytes32 indexed artifactHash, address indexed author, string uri);
event URIUpdated(bytes32 indexed artifactHash, address indexed author, string uri);
event Revoked(bytes32 indexed artifactHash, address indexed author);
```

---

## Interface (v0)

### register

```
function register(bytes32 artifactHash, string calldata uri) external;
```

Rules:

- `artifactHash` must be non-zero.
- If `records[artifactHash].author != address(0)`, either:
  - revert (strict), or
  - allow overwrite only by the same author (lenient).
- Set `author = msg.sender`, `registeredAt = block.timestamp`, `uri = uri`.
- Emit `Registered`.

### registerFor (meta-tx)

```
function registerFor(
  bytes32 artifactHash,
  address author,
  string calldata uri,
  uint256 deadline,
  bytes calldata signature
) external;
```

Rules:

- Verify `signature` is from `author` over typed data (EIP‑712 recommended).
- Include replay protection:
  - chain id, contract address, and a nonce for `author`.
- On success, store as if `register` was called by `author`.
- Emit `Registered`.

Recommended typed data:

```
Register(bytes32 artifactHash,string uri,uint256 nonce,uint256 deadline)
```

### updateURI

```
function updateURI(bytes32 artifactHash, string calldata uri) external;
```

Rules:

- Only `records[artifactHash].author` can update.
- Emit `URIUpdated`.

### revoke (optional)

```
function revoke(bytes32 artifactHash) external;
```

Rules:

- Only author can revoke.
- Mark `revoked=true`.
- Emit `Revoked`.

---

## Verification workflow

### Off-chain (GitHub-only)

- Author publishes a signed message (EIP‑191) in `proofs/author-proof.ethereum.json`.
- Verifier checks signature recovers the claimed address and matches the artifact hash.

### On-chain (registry)

- Author (or relayer) registers `artifactHash` with a URI pointing to the proof bundle.
- Verifier:
  1) queries `records[artifactHash]`,
  2) checks `author` and `registeredAt`,
  3) optionally fetches the URI and validates the off-chain signature for additional context.

---

## Security and privacy notes

- **Do not store PII** on-chain. Store only hashes and pointers.
- **Avoid mutable truth**: if overwrites are allowed, prefer append-only via events or versioned `artifactHash`es.
- **Nonce & deadline** required for meta-tx to prevent replay.
- Consider contract wallets (ERC‑1271) if authors use smart accounts.

---

## Extensions (future)

- **Attestation registry**: store hashes of BDI versions and evaluation protocol versions, and emit events for auditor-signed attestations.
- **Revocation registry**: allow auditors or authors to revoke compromised keys and rotate to new addresses with an explicit chain of custody.

---

## Reference implementation

- Solidity: `contracts/AuthorshipRegistry.sol` (draft; not audited)
- Tooling: `foundry.toml` enables `forge build`
