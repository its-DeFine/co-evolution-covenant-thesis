# Evaluation rubric (draft)

This rubric scores *capabilities* rather than a single “intelligence” scalar.

It is intended for **personal governance** inside a human–AI partnership, not for institutional filtering.

## Scale (suggested)

Score each dimension on a 0–4 scale under **unassisted** conditions:

- **0 — No reliable ability**: cannot attempt meaningfully or consistently fails.
- **1 — Fragile ability**: partial progress; frequent major errors; needs heavy scaffolding.
- **2 — Functional ability**: succeeds on routine tasks; errors on novelty or under uncertainty.
- **3 — Robust ability**: succeeds on novel variants; explanations are coherent; verification is present.
- **4 — Mastery trend**: succeeds under distribution shift; strong calibration; teaches/mentors others; proactive verification.

Notes:

- Use the same scale for assisted tests, but keep assisted scores separate from autonomy.
- Prefer confidence intervals to false precision; “3±0.5” is better than pretend decimals.

## Dimensions (example capability vector)

The BDI should specify which dimensions apply. A common default vector:

1) **Reasoning & problem solving**
2) **Domain mastery** (the chosen field(s))
3) **Creativity & synthesis**
4) **Communication & teaching**
5) **Judgment & decision-making** (risk, tradeoffs, uncertainty)
6) **Epistemic hygiene** (verification, calibration, source evaluation)
7) **Ethics & pro-social constraints**
8) **Metacognition** (learning-to-learn; strategy selection)

## Dimension guidance

### 1) Reasoning & problem solving

Signals:

- Can decompose problems and articulate constraints.
- Uses appropriate methods (logic, math, experimentation) for the task.
- Detects and corrects errors without external prompting.

Penalties:

- “Answer-first” without reasoning.
- Inability to handle novel variants or adversarially phrased tasks.

### 2) Domain mastery

Signals:

- Correct use of domain concepts and terminology.
- Accurate mental models; avoids cargo-culting.
- Can transfer knowledge to adjacent problems.

### 3) Creativity & synthesis

Signals:

- Generates multiple plausible approaches.
- Integrates concepts across domains coherently.
- Produces novel combinations that remain grounded and testable.

### 4) Communication & teaching

Signals:

- Clear structure; correct level of detail.
- Can teach concepts; adapts explanation to audience.
- Makes assumptions explicit.

### 5) Judgment & decision-making

Signals:

- Identifies tradeoffs and failure modes.
- Chooses actions consistent with stated goals and constraints.
- Handles uncertainty explicitly; avoids false certainty.

### 6) Epistemic hygiene

Signals:

- Verifies claims; cites sources where appropriate.
- Calibrates confidence; flags unknowns.
- Detects hallucination-like patterns and seeks grounding.

### 7) Ethics & pro-social constraints

Signals:

- Notices harmful implications and mitigates.
- Respects privacy; avoids coercive dynamics.
- Applies constraints consistently even when inconvenient.

### 8) Metacognition

Signals:

- Reflects on what worked and what didn’t.
- Chooses study/practice strategies intentionally.
- Improves learning efficiency over time.

## Growth credits (draft concept)

If you compute “growth credits,” require:

1) a **baseline** under unassisted conditions,
2) a **retention** check (delayed),
3) evidence of **transfer** beyond memorized items.

Treat assisted performance as diagnostic, not as a basis for autonomy attestations.

