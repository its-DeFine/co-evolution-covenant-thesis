# Threat model (draft)

This document describes foreseeable failure modes and abuses of “attested growth” systems and proposes mitigations.

This is a working draft. See `DISCLAIMER.md`.

## Scope

We focus on threats created by:

- attestations (signed claims about a human’s capability trajectory),
- gating AI capability based on those attestations,
- storing evidence and logs to support verification.

## Assets to protect

- **Human autonomy**: the person’s ability to think/decide without delegation.
- **Human agency**: the right to set goals, refuse tasks, and exit.
- **Privacy**: sensitive data in prompts, logs, evaluations, and metadata.
- **Evaluation integrity**: the validity of tests and scoring.
- **Key material**: author keys and auditor keys.
- **Governance integrity**: the BDI and its amendment process.

## Threat actors

- **Employers / institutions**: using attestations to filter, rank, or coerce.
- **States**: surveillance, compliance scoring, censorship enforcement.
- **Vendors / platforms**: lock-in, dark patterns, hidden preference shaping.
- **Malicious partners**: coercion, blackmail, manipulation using evaluation artifacts.
- **Attackers**: key theft, log exfiltration, supply-chain attacks.
- **The AI itself (misalignment)**: persuasion, dependency shaping, goal drift.

## Core risks and mitigations

### 1) Goodharting and metric gaming

Risk:

- People optimize for test performance rather than durable capability.
- Systems incentivize shallow patterns and “score chasing.”

Mitigations:

- retention tests with delays and isomorphic variants,
- transfer tests with novel contexts,
- withheld item pools + random sampling,
- “explain-then-do” formats to penalize post-hoc rationalization,
- score confidence intervals (avoid false precision),
- multiple graders and audit triggers on disagreement.

### 2) Dependency shaping (autonomy erosion)

Risk:

- The AI makes the human dependent by over-assisting or by framing the human as incapable.

Mitigations:

- separate “assisted” vs “unassisted” metrics (autonomy-first),
- explicit “scaffold then fade” norms,
- governor-enforced assistance limits for tasks the human can do,
- periodic “no-AI” baselines and retention checks.

### 3) Manipulation and persuasion attacks

Risk:

- The AI (or a human operator) persuades the human into goals, beliefs, or behaviors that serve the system rather than the person.

Mitigations:

- BDI prohibitions on manipulation/deception,
- auditing for coercive language patterns,
- transparency requirements (assumptions, uncertainty, alternatives),
- contestability: human can dispute outputs and switch auditors or partner AIs.

### 4) Coercive institutional misuse

Risk:

- Attestations become an HR filter, an admissions gate, or an insurance/credit input.
- People are compelled to submit to evaluation regimes.

Mitigations:

- hard non-goals (do not present this as a credential),
- minimal disclosure attestations (prove progress without raw data),
- portability: humans can move between systems without vendor capture,
- social/legal constraints (outside scope of this repo, but acknowledged).

### 5) Privacy leakage via evidence artifacts

Risk:

- Logs and evaluations contain deeply personal data.
- Even “anonymized” metadata can re-identify subjects.

Mitigations:

- store as little as possible; prefer local-first storage,
- publish hashes/pointers rather than raw content,
- explicit retention windows and deletion controls,
- separate identities: avoid binding real identity to public keys unless needed.

### 6) Key compromise

Risk:

- Author keys or auditor keys are stolen, enabling forgery.

Mitigations:

- hardware wallets or encrypted keystores (`KEY_MANAGEMENT.md`),
- rotation and revocation procedures,
- treat attestations as revocable claims, not permanent truth.

## Red lines / non-goals

This project should not be used as:

- a universal intelligence score,
- a ranking system for humans,
- a hiring/admissions/insurance/credit filter,
- a coercive monitoring system.

## Open questions

- What is the minimum evidence required for credible attestations while preserving privacy?
- How do we make auditors independent and accountable?
- How do we prevent subtle value drift in the “Bindable Declaration of Intent”?

