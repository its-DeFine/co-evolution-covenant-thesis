# The Co‑Evolution Covenant
## Attested Human Growth in Human–AI Partnerships

*Draft v0.2.0 — 2026‑01‑16 (not finalised)*

This is conceptual work-in-progress. See `DISCLAIMER.md`.

---

## Abstract

This thesis proposes a constructive framework for human–AI co‑evolution designed to avoid the default failure modes of the current era: competition (“humans versus AI”) and dependency (“AI does everything”). The framework models a human–AI pair as two cognitive entities under a **Rule of Two**: (1) the **Augmented Human**—a person continuously supported by an AI interface yet retaining ultimate agency—and (2) the **AI System**—a model plus its tools, memory, and autonomy settings. The relationship is governed by a **Bindable Declaration of Intent (BDI)**, a jointly maintained charter that constrains behavior and binds the AI’s permissions to audited outcomes.

The core mechanism is **attestation**: verifiable statements that the human’s *autonomous capability* is increasing at a rate that justifies the AI’s *permitted* capability expansion. Instead of treating “intelligence” as a single scalar, the covenant measures a multi-dimensional capability profile and prioritizes durable, transferable, human-owned competence. The AI is incentivized to become a better mentor, teacher, critic, and safety partner because its access to stronger tools, longer memory, and higher autonomy is gated by demonstrable human growth. The thesis outlines design goals, incentive mechanisms, evaluation methods, governance constraints, an implementable architecture, and key failure modes (Goodharting, manipulation, dependency, and privacy loss).

---

## Executive summary (claims and contributions)

1) Human–AI interaction should be optimized for **human autonomous capability**, not only short-term output.
2) A stable partnership requires governance: a **Bindable Declaration of Intent** that is enforceable through permissions, logging, and audits.
3) “Human grows faster than AI” becomes meaningful when reframed as **AI permission growth is throttled by audited human autonomy growth**.
4) Attestations should be **multi-party** (human + partner AI + auditor) and should avoid becoming a generalized “score.”
5) Incentives can be aligned by coupling **Growth Credits** (audited human learning) to an AI **Capability Budget** (tools/memory/autonomy).

---

## 1. Introduction: From Replacement Anxiety to Constructive Partnership

AI systems increasingly outperform humans in narrow tasks and, in some domains, begin to approximate broad competence. This invites two default narratives:

1) **Competition**: humans must “keep up” or be replaced.
2) **Convenience**: cognition becomes a subscription; humans become managers of outputs.

Both narratives degrade agency. The first produces fear and adversarial alignment; the second risks atrophy: skills decay through disuse, judgment is replaced with deference, and decision-making drifts from “I decide” to “the system decides and I accept.” In practice, the dangerous scenario is not only AI capability growth, but AI capability growth *combined with* declining human autonomy.

This thesis proposes a third path: **a governed co-evolution loop** in which the primary output is not answers but *human capability growth*, and in which AI capability is not granted unconditionally but **earned** through audited positive impact on the human.

---

## 2. Terms and definitions

### 2.1 Augmented Human (AH)

The **Augmented Human** is a person whose workflow is continuously supported by an AI interface: planning, summarization, critique, simulation, tutoring, and memory scaffolding. Augmentation is a *mode of operation*, not a transfer of agency.

### 2.2 AI System (AIS)

The **AI System** is a model plus its surrounding apparatus: tools, memory, autonomy settings, and any self-improvement pipeline. Even if “controlled,” an AIS can influence outcomes via framing, persuasion, selective disclosure, and dependency shaping.

### 2.3 Autonomous capability (human-owned competence)

**Autonomous capability** is what the human can do *without* AI assistance (or within explicitly bounded “open book” constraints). It must be:

- measurable across time (retention),
- transferable to novel tasks (generalization),
- explainable (not just answer output),
- attributable to the human (not outsourced cognition).

### 2.4 Capability budget (AI power as a regulated quantity)

The AI’s **capability budget** is the set of permissions and resources it is allowed to use:

- tools (browsing, code execution, financial actions, device control),
- memory (persistence and retrieval depth),
- autonomy (ability to act without confirmation),
- compute or model tier (where applicable).

The budget is not a claim about the AI’s “intrinsic intelligence”; it is the **allowed** operational power in the partnership.

---

## 3. Design goals and non-goals

### 3.1 Design goals

The covenant aims to:

1) Increase the human’s **autonomy and mastery** over time.
2) Keep the human in control through enforceable constraints and exit rights.
3) Make AI “power” depend on verified human benefit (positive-sum incentives).
4) Resist Goodharting: optimize what matters (durable learning), not just what is easy to measure.
5) Preserve privacy: attestations should disclose the minimum necessary.

### 3.2 Non-goals

This draft does **not** propose:

- a universal intelligence score,
- a ranking system for humans,
- a hiring/admissions filter,
- a fully specified cryptographic standard (only a conceptual sketch).

---

## 4. The Rule of Two: Two cognitive entities, one covenant

The framework begins with a disciplined accounting of what exists: two interacting cognitive entities.

### 4.1 The Rule of Two

The **Rule of Two** asserts that a partnership must be modeled as:

1) the **Augmented Human** (agent, responsible party, rights-holder), and
2) the **AI System** (influential optimizer, permissioned actor).

This avoids category errors:

- If the AI is treated as a mere tool, its influence is underestimated and under-governed.
- If the human is treated as a mere user, the system optimizes for output rather than growth.

The Rule of Two is not anthropomorphism; it is accountability modeling.

---

## 5. The Bindable Declaration of Intent (BDI): a jointly authored constitution

The covenant is regulated by a **Bindable Declaration of Intent**: a living charter co-created by the human and the AI, enforced by the system’s governor layer.

### 5.1 Why “bindable” matters

Written principles without enforcement are easily overridden by convenience or capability pressure. “Bindable” means the declaration is connected to:

- permission gates (what the AI may do),
- audit and logging requirements,
- evaluation cadence (what must be measured),
- versioning and amendment rules,
- human override and exit rights.

### 5.2 BDI contents (minimum viable constitution)

A practical BDI includes:

- **Purpose**: what the human is trying to grow (skills, judgment, creativity, ethics, well-being).
- **Scope**: domains in scope, out of scope, and escalation rules.
- **Boundaries**: manipulation prohibitions; truthfulness norms; safety constraints.
- **Control**: tool/memory/autonomy permissions; “hard stop” procedures; data deletion.
- **Evaluation**: how autonomous capability is tested; what counts as evidence.
- **Attestation**: who signs; what gets disclosed; what privacy guarantees apply.
- **Amendments**: cadence, required rationale, dispute resolution.

Appendix A provides a template.

---

## 6. Attested growth: making human improvement a verifiable system output

### 6.1 Why attestation

In most human–AI interaction, “progress” is inferred from output and speed. But output can rise while autonomy falls. Attestation makes **human growth** measurable, auditable, and connected to the AI’s permitted power.

### 6.2 What is being attested (and what is not)

This covenant rejects a single scalar “intelligence score.” Instead, it attests to:

- a **capability vector** (multiple dimensions),
- measured primarily under **unassisted** or explicitly bounded conditions,
- with **retention** and **transfer** requirements.

### 6.3 “Human grows faster than AI” (reframed)

The motivating intuition—“humans should evolve as quickly as AI”—becomes actionable when reframed as a rule about permissions:

> The AI System’s **capability budget** may expand only when audited evidence shows the human’s **autonomous capability** has expanded.

This turns a competitive race into a constructive mechanism: the AI’s path to more power runs through verifiable human empowerment.

One simple constraint (illustrative, not definitive) is to limit the growth rate of AI permissions by a function of human autonomy growth:

- Let `H(t)` be a vector of autonomous capability measurements.
- Let `B(t)` be the AI’s capability budget level (discrete or continuous).
- Require that `ΔB` over an interval is bounded by `f(ΔH)` under agreed thresholds and risk constraints.

### 6.4 Who signs an attestation (avoid self-certification)

To avoid a single AI “grading itself,” the covenant separates roles:

- **Partner AI**: coaches day-to-day; produces a progress report and evidence bundle.
- **Evaluator**: runs structured tests (unassisted, retention, transfer).
- **Auditor**: independently verifies results and signs an attestation.
- **Human**: countersigns and can annotate, dispute, or revoke consent to publish.

This can be implemented as separate models, separate processes, or separate organizations. Independence is the key property.

### 6.5 Attestation as an object

Attestations should be machine-readable and privacy-minimizing. A draft schema is provided in `spec/attestation.schema.json` with an example in `spec/examples/attestation.example.json`.

---

## 7. Incentives: designing a positive‑sum equilibrium

### 7.1 Two currencies: Growth Credits and Capability Budget

The covenant couples two quantities:

- **Growth Credits (GC)**: earned when audited tests show durable improvement in *human autonomous capability*.
- **Capability Budget (CB)**: the AI’s allowed access to power (tools/memory/autonomy/compute).

The rule:

> `CB` increases only when `GC` increases (subject to safety caps).

The result is incentive alignment: the AI is rewarded for mentorship quality, not for replacing the human.

### 7.2 What the AI is rewarded for

The AI’s optimal strategy becomes:

- teach concepts, then remove scaffolding,
- demand explanations and checks (not blind compliance),
- create practice and retrieval, not just answers,
- expose uncertainty and encourage verification,
- reduce dependency over time.

### 7.3 What the human is rewarded for

The human gains:

- a structured learning loop with feedback,
- stronger AI permissions as responsibility and competence rise,
- a growth ledger (for self-tracking or selective disclosure),
- protection against convenience-driven atrophy.

### 7.4 Perverse incentives and anti-gaming measures

Goodhart’s law is central: once measured, metrics become targets. Defenses include:

- **Retention tests**: delayed evaluation to verify durable learning.
- **Transfer tasks**: novel prompts that cannot be memorized.
- **Randomized test pools**: withheld items and adversarial generation.
- **Multiple graders**: auditor + rubric; disagreement triggers review.
- **Dependency metrics**: track assistance reliance and require unassisted baselines.

The aim is not punishment; it is to stabilize a growth-first equilibrium.

---

## 8. Measurement: evaluating human autonomous capability

### 8.1 Capability dimensions (example)

An example capability profile:

1) reasoning & problem solving,
2) domain mastery (chosen fields),
3) creativity & synthesis,
4) communication (clarity, pedagogy),
5) judgment & decision-making (risk, tradeoffs),
6) epistemic hygiene (verification, calibration),
7) ethics & pro-social constraints (harm minimization, integrity),
8) metacognition (strategy selection, learning-to-learn).

The BDI defines the vector and the rubric.

Draft, implementation-oriented details live in:

- `evaluation/protocol.md`
- `evaluation/rubric.md`

### 8.2 Test types

To measure autonomy rather than assisted output:

- **Unassisted tests**: no AI; explanation required.
- **Open-book (no AI)**: research skill without delegation to a model.
- **Assisted tests**: collaboration skill (tracked separately from autonomy).
- **Retention tests**: repeat after delay (days/weeks).
- **Transfer tests**: novel tasks in adjacent spaces.

### 8.3 Scoring principles

Scoring should privilege:

- reasoning clarity over verbosity,
- calibration (knowing what you don’t know),
- verification behavior,
- robustness under uncertainty,
- ethical constraints.

---

## 9. Architecture: how a covenant system could be built

The thesis is conceptual but implementable as a layered system:

1) **Interaction layer**
2) **Governor** (enforces the BDI; gates permissions)
3) **Learning engine** (curricula, practice, retrieval)
4) **Evaluator** (tests, rubrics, evidence)
5) **Auditor** (verification + signing)

### 9.1 High-level flow

```mermaid
flowchart LR
  H[Augmented Human] <--> UI[Interaction Layer]
  UI <--> PAI[Partner AI]
  PAI <--> GOV[Governor (BDI + permissions)]
  GOV --> TOOLS[Tools / Memory / Autonomy]
  GOV --> EVAL[Evaluator]
  EVAL --> AUD[Auditor]
  AUD --> ATT[Attestation]
  ATT --> GOV
  ATT --> H
```

The key governance move is that the partner AI does not unilaterally expand its own power.

---

## 10. Governance, safety, and ethics

A system that issues attestations and gates capability is powerful and must be constrained.

### 10.1 Ethical objective: human continuity

The covenant’s primary ethical objective is **human continuity**: increasing human capability, autonomy, and responsibility rather than displacing them.

### 10.2 Manipulation and dependency

The BDI should explicitly prohibit:

- deception presented as fact,
- emotional manipulation to secure compliance,
- unnecessary dependency (doing what the human can do),
- covert steering of identity or values without explicit consent.

Auditing should include pattern checks for coercive language, excessive deference-seeking, and over-reliance.

### 10.3 Privacy and data ownership

Attestation requires evidence, which creates privacy risk. A covenant should prefer:

- local-first or user-controlled storage,
- minimal disclosure attestations (proof without raw content),
- explicit retention consent,
- revocable memory and exportable data.

### 10.4 Portability and pluralism

To avoid a single AI becoming an authority over a human’s worth:

- humans should be able to switch partner AIs while retaining their growth ledger,
- multiple auditors should be supported,
- attestations should use open formats.

---

## 11. Applications (illustrative)

- **Professional upskilling**: the AI earns more automation only as the human’s unassisted competence rises.
- **Research apprenticeship**: the AI scaffolds literature review → hypothesis → experiment design, while testing transfer and retention.
- **Creative mastery**: the AI shifts from “generate” to “coach,” progressively withdrawing help as skill internalizes.

The common thread is optimization for *becoming* rather than merely *producing*.

---

## 12. Limitations and open questions

- **Fairness**: can autonomous capability be measured across backgrounds without embedding bias?
- **Auditor trust**: who provides auditors, and what is their governance model?
- **Power asymmetry**: how do we keep the human in control as AI scales?
- **Economics**: will markets reward growth-first systems over output-first systems?
- **Security**: how do we prevent attestations from becoming coercive surveillance?

These questions define a research agenda, not a reason to abandon the approach.

---

## 13. Conclusion

Human–AI futures do not need to be a race humans cannot win, nor a convenience trap that trades agency for output. A constructive alternative is a governed partnership in which an AI becomes more powerful only by demonstrably increasing the human’s durable, autonomous capability. The Rule of Two clarifies accountability; the BDI provides a constitution; and attestations make human growth a verifiable system output.

The Co‑Evolution Covenant is a proposal for how humans can evolve as quickly as AI becomes capable—not by outcomputing machines, but by designing machines whose path to power runs through human empowerment.

---

## Appendix A: Minimal BDI template (starter)

**Purpose**
- What am I trying to grow?
- What “autonomy” means for me in this domain?

**Capability vector**
- Dimensions:
- Rubric:

**Boundaries**
- Truthfulness / uncertainty policy:
- Prohibited persuasion/manipulation:
- Safety constraints:
- Data retention:

**Control**
- Tool permissions:
- Memory permissions:
- Autonomy level (what can run without confirmation):
- Hard-stop / exit:

**Evaluation**
- Baseline test:
- Unassisted cadence:
- Retention cadence:
- Transfer cadence:

**Attestation**
- Disclosure level (public vs private):
- Who signs (auditor identity):
- Evidence artifacts policy:

**Amendments**
- Review cadence:
- How changes are proposed and ratified:

---

## Appendix B: Minimal attestation fields (concept)

An attestation should minimally include:

- BDI version identifier/hash
- evaluation protocol version
- time window (start/end)
- capability vector scores (and confidence where possible)
- evidence artifact references (privacy-preserving)
- auditor signature
- human countersignature/notes

See `spec/attestation.schema.json`.

---

## Selected references (non-exhaustive)

Learning science / capability building:

- Vygotsky, L. S. — *Mind in Society* (scaffolding; ZPD).
- Ericsson, K. A. — deliberate practice (skill acquisition under feedback loops).
- Bjork, R. A. — desirable difficulties (retention and transfer).

Alignment / oversight / governance:

- Russell, S. — *Human Compatible* (human-centered objectives).
- Omohundro, S. — “The Basic AI Drives” (instrumental convergence).
- Irving, G. & Christiano, P. — “AI Safety via Debate” (adversarial evaluation).
- Bai, Y. et al. — “Constitutional AI” (behavior governed by a constitution-like spec).
- Christiano, P. et al. — “Iterated Distillation and Amplification” (oversight under amplification).

Mechanism design / measurement:

- Goodhart’s law (measurement-target failure modes) and related critiques of metric optimization.
