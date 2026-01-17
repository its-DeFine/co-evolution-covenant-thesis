# Evaluation protocol (draft)

This protocol is designed to produce **auditable evidence** for attestations, while resisting Goodharting and dependency shaping.

## Roles (separation of concerns)

- **Partner AI**: supports the human day-to-day; may suggest practice and preparation.
- **Evaluator**: administers tests and produces an evaluation report.
- **Auditor**: verifies evaluation integrity and signs (or refuses) an attestation.

The partner AI should not be the sole grader of the human’s autonomy.

## What is measured

Primary metric: **human autonomous capability** — what the human can do *without* AI assistance.

Secondary metric: **collaboration capability** — what the human can do effectively *with* AI assistance (tracked separately to avoid incentivizing dependency).

Optional metric (especially in Dockable Symbiosis variants): **governance competence** — the human’s ability to supervise automation, maintain policy boundaries, and respond to fast-moving failures without ceding control (Bainbridge, 1983; Endsley, 1995; Endsley & Kiris, 1995).

## Test types

### 1) Unassisted (no AI)

- No partner AI or external model usage.
- Human must provide an answer **and** an explanation.
- Time-limited to discourage hidden delegation.

Measures: autonomous reasoning, recall, synthesis, decision-making, verification behavior.

### 2) Open-book (no AI)

- External sources allowed (papers, docs, web).
- No model usage.
- Requires citations/links and reasoning.

Measures: research skill and epistemic hygiene without delegation.

### 3) Assisted (AI allowed; tracked separately)

- AI may be used, but the interaction must be logged.
- Human must explain *why* the solution is correct and what they learned.

Measures: collaboration skill; used to diagnose learning trajectories, not to “prove autonomy.”

### 4) Retention tests (delayed)

- Repeat a subset of tasks after a delay (days/weeks).
- Use isomorphic variants, not identical items.

Measures: durable learning rather than short-term priming.

### 5) Transfer tests (novel)

- New tasks drawn from adjacent domains or new contexts.
- Focus on generalization, not memorization.

Measures: robustness and flexibility.

### 6) Governance drills (dock-enabled; optional)

Designed for high-automation settings where the “skill” to preserve is not raw throughput, but supervisory control and safe governance.

- Use the dock UI/governor as the interface; restrict or disable external modules for the drill.
- Present simulated events: permission escalation attempts, prompt-injection-like content, anomalous tool bursts, or ambiguous “safe-looking” requests.
- Require the human to decide: deny/allow, scope a capability token, enter safe-mode, revoke/rotate keys, or demand additional evidence.

Measures: policy comprehension, intervention skill, and ability to stay “in the loop” under pressure.

## Cadence (suggested)

This is a starting point; the BDI should define the actual cadence.

- Baseline: once at partnership start (unassisted + open-book).
- Weekly: small unassisted set (5–15 min) + reflection.
- Monthly: retention + transfer set (30–90 min).
- Quarterly: deeper review, rubric calibration, and BDI amendment review.

## Sampling and anti-gaming measures

### Withheld item pools

- Maintain a pool of test items not shown during training/practice.
- Draw randomly at evaluation time.

### Adversarial generation

- Include “trap” items that detect shallow pattern matching.
- Include counterfactual variations to test causal reasoning.

### Explain-then-do

- Require a brief plan/explanation before an answer is produced.
- Penalize post-hoc rationalization if inconsistent with the solution.

### Calibration checks

- Require confidence estimates.
- Score miscalibration (overconfidence on wrong answers) explicitly.

### Dependency checks

- Track the gap between unassisted and assisted performance.
- Require an unassisted baseline for any “growth credit” claims.

## Outputs

An evaluation report should include:

- BDI version identifier
- evaluation protocol/rubric version
- test set metadata (types, counts, timing)
- per-dimension scores (with confidence where feasible)
- notes on major error modes
- minimal disclosure evidence references (hashes/IDs), not raw private data

## Research anchors (for cited design choices)

This protocol’s design draws on well‑studied effects in learning, metacognition, and human‑automation interaction. See `REFERENCES.md` for full citations:

- Retrieval practice / testing effect (retention): Roediger & Karpicke (2006)
- Spacing effects (retention across time): Cepeda et al. (2006)
- Transfer taxonomy (novel tasks): Barnett & Ceci (2002)
- Self‑explanation (explain‑then‑do): Chi et al. (1989)
- Calibration and overconfidence: Moore & Healy (2008)
- Appropriate reliance on automation: Parasuraman & Riley (1997); Lee & See (2004); Parasuraman & Manzey (2010); Skitka et al. (1999)
- Out-of-the-loop performance and situation awareness: Bainbridge (1983); Endsley (1995); Endsley & Kiris (1995)
- Cognitive offloading (externalizing memory/judgment): Sparrow et al. (2011); Risko & Gilbert (2016)
- Gaming responses to incentives / performance measures: Holmström & Milgrom (1991); Courty & Marschke (2004); Bevan & Hood (2006)

## Misuse constraints (hard rules)

This protocol should not be used as:

- a hiring/admissions filter,
- an employment monitoring system,
- a generalized ranking of humans.

See `DISCLAIMER.md`.
