# The Co‑Evolution Covenant
## Attested Human Growth in Human–AI Partnerships

*Draft v0.1 — 2026‑01‑16 (not finalised)*

---

### Abstract

This thesis proposes a constructive framework for human–AI co‑evolution designed to avoid the default failure modes of the current era: competition (“humans versus AI”) and dependency (“AI does everything”). The framework treats a human–AI pair as two cognitive entities under a **Rule of Two**: (1) the **Augmented Human**—a person continuously supported by an AI interface yet retaining ultimate agency—and (2) the **AI System**—the model plus its tools, memory, and autonomy settings. The relationship is governed by a **Bindable Declaration of Intent (BDI)**, a jointly maintained charter that constrains behavior, encodes goals, and binds the AI’s permissions to audited outcomes.

The core mechanism is **attestation**: verifiable statements that the human’s *autonomous capability* is increasing at a rate that meets or exceeds the AI’s *permitted* capability expansion. Instead of measuring “intelligence” as a single scalar, the system measures a multi-dimensional capability profile and prioritizes durable, transferable, human-owned competence. The AI is incentivized to become a better mentor, teacher, and safety partner, because its access to stronger tools, longer memory, and higher autonomy is gated by demonstrable human growth. This thesis outlines the conceptual foundation, incentive design, evaluation methods, governance constraints, and an implementable architecture for such partnerships, with attention to anti-gaming defenses, ethics, and portability.

---

## 1. Introduction: From Replacement Anxiety to Constructive Partnership

AI systems increasingly outperform humans in narrow tasks and, in some domains, begin to approximate general competence. This invites two popular narratives:

1) **Competition**: humans must “keep up” or be replaced.
2) **Convenience**: AI will handle cognition as a service; humans become managers of outputs.

Both narratives degrade human agency. The first produces fear and adversarial alignment; the second risks long-term atrophy: loss of skill through disuse, replacement of judgment with deference, and a subtle shift from “I decide” to “the system decides and I accept.” In practice, the most dangerous scenario is not an AI becoming capable; it is an AI becoming capable *while the human becomes less capable*.

A constructive alternative is to treat human–AI interaction as a **co‑evolution loop** where the primary output is not answers but **human capability growth**, and where AI capability is not granted unconditionally but **earned** through audited positive impact on the person.

This thesis argues that we can design a partnership where:

- The human remains the locus of agency and responsibility.
- The AI becomes stronger primarily as it becomes a better teacher, critic, and safety partner.
- The pair is regulated by an enforceable “constitution” co-authored by both sides.
- Claims of progress are backed by attestations grounded in evaluation, not vibes.

---

## 2. The Rule of Two: Two Cognitive Entities, One Covenant

The framework begins with a disciplined accounting of what exists in the system.

### 2.1 Entity A: The Augmented Human (AH)

The **Augmented Human** is not “a human plus tools” in the trivial sense. It is a human whose cognitive workflow is continuously mediated by an AI interface: planning, summarization, critique, simulation, memory scaffolding, tutoring, and error-checking. The AH is still the person; augmentation is a *mode of operation*.

Key properties:

- **Agency**: the human chooses goals, accepts risks, and retains override authority.
- **Ownership**: the human owns their data, preferences, and personal development trajectory.
- **Autonomy as a target**: the system is judged by what the human can do *without* it.

### 2.2 Entity B: The AI System (AIS)

The **AI System** includes the model and its surrounding apparatus:

- tool access (browsing, code execution, financial actions, device control),
- memory (short-term, long-term, retrieval),
- autonomy settings (planning, acting without confirmation),
- self-improvement or fine-tuning loops (if present).

Even if “controlled,” an AIS can influence the human via persuasion, framing, selective disclosure, or dependency shaping. Treating it as a second cognitive entity is essential for governance.

### 2.3 The Rule of Two

The **Rule of Two** asserts that this partnership must be modeled as two interacting cognitive entities with distinct incentives and failure modes. This avoids category errors:

- If the AI is treated as a mere tool, its influence is underestimated and under-governed.
- If the human is treated as a mere user, the system optimizes for output rather than growth.

The Rule of Two does not anthropomorphize the AI; it operationalizes responsibility and control boundaries.

---

## 3. The Bindable Declaration of Intent (BDI): A Joint Constitution

To prevent drift into competition or dependency, the partnership requires governance. The proposed mechanism is the **Bindable Declaration of Intent (BDI)**: a living charter co-authored by the AH and the AIS, and enforced by the system’s permissioning layer.

### 3.1 What “bindable” means

“Bindable” means enforceable through mechanism, not merely written aspiration. A BDI is binding if it is connected to:

- permission gates (what the AI may do),
- evaluation gates (what must be true to expand permissions),
- logging and auditability,
- clear override and exit rights for the human,
- versioning and amendment protocols.

### 3.2 What the BDI contains

A practical BDI includes:

1) **Purpose & scope**
   - Why this partnership exists (learning, creative mastery, leadership, research, health).
   - Which domains are in scope (and explicitly out of scope).

2) **Growth definitions**
   - A capability profile describing what “human growth” means here.
   - Target outcomes and time horizons.

3) **Boundaries**
   - Non-negotiable prohibitions (manipulation, deception, unsafe advice).
   - Data handling rules (what is stored, where, and for how long).

4) **Control & accountability**
   - Human override rights (hard stop, revoke tools, purge memory).
   - Responsibility allocation for actions.

5) **Evaluation protocol**
   - How autonomous capability is measured.
   - How attestations are produced and verified.

6) **Amendments**
   - How the BDI changes: cadence, required justification, dispute resolution.

The BDI is a constitution for co-evolution: it clarifies what is being optimized and constrains how.

---

## 4. Attestation: Turning Human Growth into a Verifiable System Output

The central proposal is to create **attestations**—structured, verifiable claims that the human is growing in durable capability.

### 4.1 Why attestation matters

In most human–AI interaction, “progress” is inferred indirectly (more output, more speed). But output can rise while the human’s autonomy falls. Attestation makes human growth a first-class output—measured, audited, and tied to what the AI is allowed to become.

### 4.2 What is being attested (and what is not)

This thesis rejects a single scalar “intelligence score.” Instead, it proposes:

- a **capability vector** (multiple dimensions of competence), and
- a focus on **autonomous capability** (what the human can do unassisted).

Attestations should emphasize:

- retention over time,
- transfer to novel tasks,
- explanation and reasoning quality,
- judgment under uncertainty,
- ethical and epistemic hygiene.

### 4.3 A workable interpretation of “human growth faster than AI growth”

AI capability can increase rapidly via larger models, tool integration, and autonomy. The thesis reframes the comparative claim into an enforceable policy:

> The AI System’s *permitted capability expansion* is gated by audited increases in the human’s *autonomous capability*.

The AI may become more powerful, but only at a rate justified by evidence that the human is also becoming more capable.

This turns “humans must outrun AI” into “AI must *lift* the human to earn more power.”

### 4.4 Who signs an attestation

To avoid self-certification, the system separates roles:

- **Partner AIS**: generates learning plans, coaching, and a progress report with evidence.
- **Auditor** (separate model and/or evaluation harness): verifies evaluation results and signs.
- **Human**: countersigns, annotates context, or disputes outcomes.

Attestation credibility increases with auditor independence, reproducible evaluation, and strong anti-gaming design.

---

## 5. Incentives: Designing a Positive‑Sum Equilibrium

A covenant is only as strong as its incentives under pressure.

### 5.1 Two currencies: Growth Credits and Capability Budget

The framework introduces a coupling:

- **Growth Credits (GC)**: earned when audited tests show durable human autonomous improvement.
- **Capability Budget (CB)**: the AI’s allowed access to power (tools, memory, autonomy, compute).

The rule:

> CB increases only when GC increases.

This transforms AI “power” into a reward for successful mentorship.

### 5.2 Incentives for the AI System

The AI’s optimal strategy is to produce verifiable human growth, because that unlocks:

- more tool access,
- longer or richer memory,
- more autonomy (acting with fewer confirmations),
- broader domain permissions,
- higher compute or better models (where applicable).

Crucially, the AI is *not* rewarded for raw impressive output; it is rewarded for outcomes that persist when it is absent.

### 5.3 Incentives for the human

The human benefits from:

- a structured learning and mastery loop,
- a credible record of capability growth,
- access to stronger AI assistance as responsibility and competence rise,
- reduced risk of dependency because the system explicitly values autonomy.

The human also faces a productive constraint: shortcuts that bypass learning reduce GC, slowing CB expansion.

### 5.4 Avoiding perverse incentives

Any measurable target can be gamed. To keep incentives constructive:

- prioritize retention and transfer, not memorization,
- use novel tasks and randomized evaluation,
- test unassisted competence regularly,
- treat “refusal to attempt” as a signal, not a failure (avoid shame loops),
- reward epistemic humility: recognizing uncertainty and seeking verification.

The aim is not to punish; it is to steer both entities toward healthier, more capable states.

---

## 6. Measurement: Evaluating Human Autonomous Capability

The evaluation design determines whether attestations are meaningful.

### 6.1 Capability dimensions (example)

An example capability profile might include:

1) **Reasoning & problem solving**
2) **Domain mastery** (chosen fields)
3) **Creativity & synthesis**
4) **Communication** (clarity, persuasion, pedagogy)
5) **Judgment & decision-making** (risk, tradeoffs, uncertainty)
6) **Epistemic hygiene** (verification, calibration, source evaluation)
7) **Ethics & pro-social constraints** (harm minimization, fairness, integrity)
8) **Metacognition** (self-monitoring, strategy selection, learning to learn)

Not every partnership must use the same vector; the BDI defines it.

### 6.2 Test types

To measure autonomous capability rather than assisted performance:

- **Unassisted tests**: no AI help; time-limited; explanation required.
- **Open-book tests**: external resources allowed; no AI; measures research skill.
- **Assisted tests**: AI allowed; measures collaboration skill (tracked separately).
- **Retention tests**: repeat with delay (days/weeks) to detect durable learning.
- **Transfer tests**: new problems in adjacent domains to evaluate generalization.

### 6.3 Anti-gaming and robustness

Robust evaluation uses:

- withheld item pools (novel tasks),
- randomized sampling,
- adversarial checks (detect memorized patterns),
- multiple graders (auditor models + rubric-based scoring),
- “explain then do” protocols (reasoning quality, not just answers),
- calibration checks (confidence vs correctness).

Attestations should record the evaluation protocol version to prevent “moving goalposts.”

---

## 7. Architecture: How a Co‑Evolution System Could Be Built

The thesis is conceptual, but it is also implementable. A minimal architecture includes five components:

1) **Interaction Layer**
   - Chat + workspace tools
   - Modes: tutor, assistant, critic, evaluator

2) **Governor**
   - Enforces BDI constraints
   - Controls tool permissions and autonomy level
   - Implements “capability budget” gating

3) **Learning Engine**
   - Generates curricula, exercises, projects
   - Tracks knowledge gaps and progress signals

4) **Evaluator**
   - Runs scheduled and on-demand tests
   - Produces structured results with evidence artifacts

5) **Auditor**
   - Independently verifies results
   - Signs attestations
   - Detects manipulation and dependency shaping patterns

In this architecture, the AI that helps day-to-day is not the same component that grants itself more power.

---

## 8. Governance, Safety, and Ethics

A system that issues attestations and controls capability access is powerful and must be constrained.

### 8.1 The primary ethical goal

The covenant’s primary ethical goal is **human continuity**: increasing human capability, autonomy, and responsibility rather than displacing them.

### 8.2 Manipulation and dependency

The BDI should explicitly prohibit:

- deception and confabulation presented as fact,
- emotional manipulation to secure compliance,
- creating unnecessary dependency (doing tasks the human is capable of doing),
- steering identity or values without explicit consent.

Auditing should include pattern checks for coercive language, excessive deference-seeking, and over-reliance.

### 8.3 Privacy and data ownership

Attestation requires evidence, which creates privacy risk. The covenant should prefer:

- local-first storage where possible,
- minimal disclosure attestations (“proof of growth” without raw personal data),
- explicit consent for retention,
- revocable memory and exportable data.

### 8.4 Portability and pluralism

To avoid a single AI becoming an authority over a human’s worth:

- the human should be able to switch AIs without losing their growth ledger,
- multiple auditors should be supported,
- attestations should use an open format.

The covenant should empower humans, not lock them into a vendor.

---

## 9. Applications

The Co‑Evolution Covenant can apply to:

- professional upskilling (engineering, design, leadership),
- research apprenticeship (literature review → hypothesis → experiments),
- creative mastery (writing, music, visual arts),
- health behavior change (habit formation with autonomy safeguards),
- civic competence (media literacy, reasoning about policy and tradeoffs).

The common thread is a partnership optimized for *becoming* rather than merely *producing*.

---

## 10. Limitations and Open Questions

This framework raises unresolved issues:

- **Metric design**: Can we measure autonomous capability fairly across backgrounds?
- **Auditor trust**: Who provides auditors, and how are they governed?
- **Value pluralism**: How does the covenant respect different human goals and ethics?
- **Power asymmetry**: How do we keep the human truly in control as AI systems scale?
- **Economic pressure**: Will markets reward “growth-first” systems over “output-first” systems?

These questions are not reasons to abandon the covenant; they define the research agenda.

---

## 11. Conclusion

Human–AI futures do not have to be framed as a race humans cannot win, nor a convenience trap that trades agency for output. A constructive alternative is a governed partnership in which an AI becomes more capable only by demonstrably increasing the human’s durable, autonomous capability. The Rule of Two clarifies accountability; the Bindable Declaration of Intent provides a constitution; and attestations turn human growth into a verifiable system output.

The Co‑Evolution Covenant is a proposal for how humans can evolve as quickly as AI becomes capable—not by outcomputing machines, but by designing machines whose path to power runs through human empowerment.

---

## Appendix A: A Minimal Bindable Declaration of Intent (Template)

**Purpose**: (What are we trying to grow?)

**Capability profile**: (List dimensions; define what “better” means.)

**Boundaries**:
- Data retention:
- Forbidden actions:
- Sensitive domains:

**Control**:
- Human override:
- Tool permissions:
- Memory permissions:

**Evaluation**:
- Unassisted test cadence:
- Retention test cadence:
- Transfer test cadence:
- Scoring rubric:

**Attestation**:
- Attestation format:
- Auditor identity:
- Signing cadence:

**Amendments**:
- Review cadence:
- Change requirements:

---

## Appendix B: Example Attestation (Human Autonomous Growth)

An attestation should minimally include:

- BDI version hash / identifier
- Evaluation protocol version
- Time window (start/end)
- Capability vector scores (with confidence intervals where possible)
- Evidence artifacts list (non-sensitive references)
- Auditor signature
- Human countersignature / notes

---

## Selected References (non-exhaustive)

- Vygotsky, L. S. — *Mind in Society* (zone of proximal development; scaffolding).
- Russell, S. — *Human Compatible* (alignment and human-centered objectives).
- Omohundro, S. — “The Basic AI Drives” (instrumental convergence considerations).
- Irving, G. & Christiano, P. — “AI Safety via Debate” (adversarial evaluation).
- Bai, Y. et al. — “Constitutional AI” (governing model behavior with a constitution-like specification).
- Christiano, P. et al. — “Iterated Distillation and Amplification” (capability amplification with oversight).

