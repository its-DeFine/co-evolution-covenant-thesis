# Research update — 21 September 2026

A review conducted on 19 September 2026 examined this repository's drafts
against recent primary research on enforcement, cognitive augmentation, and
agency. This note records the conceptual progress and qualifies older claims
that were stated more strongly than the evidence supports. No study was
performed; no governor or cognitive intervention was implemented or evaluated
in this review.

## What the earlier drafts contribute

The core idea remains worth keeping: human growth should precede expanded AI
authority, with attestations, revocation, and a trusted-dock proposal worth
retaining. The evaluation protocol's distinctions (unassisted, retention,
transfer, governance drills) are useful foundations.

The addendum qualifies five points where the drafts imply more than shown:

- Learning gains do not prove governance readiness. The permission-growth rule
  is illustrative, and governance competence is optional in the evaluation
  protocol — progress in one dimension carries no defined mapping to readiness
  to govern a different AI capability.
- Authority is not cognitive superiority. The dock holds policy, keys, memory,
  and compute by design; those assets establish a control boundary, not
  superior reasoning or resistance to persuasion.
- The implemented contract is provenance only. `AuthorshipRegistry` registers
  and revokes authorship commitments; it does not govern a model or establish
  comprehension. A signature attributes bytes, not truth.
- Incentive optimality is a hypothesis. That the AI's best strategy becomes
  teaching does not follow from a permissions gate alone; the objective and
  selection process it would act on are unspecified.
- The trust chain is incomplete. Attestation roles, evaluator independence, and
  the upgrade lifecycle need further specification before they can carry weight.

## Enforcing fundamentals: what carries over

A system can restrict which computational operations occur, what state they may
read or change, how much resource they receive, and which communications or
effects are permitted — including specifying and enforcing a learning algorithm
or objective calculation itself. What does not follow is assurance that a
learned system's behavior serves the person's intentions in open-ended use.

Proof-carrying code demonstrates the producer/checker asymmetry: a small
trusted checker can validate a precisely stated property of an untrusted
producer's program without sharing the producer's intelligence — but the
guarantee rests on the property, the checker, and the machine model
(Necula, 1997, [record](https://www.cs.princeton.edu/~appel/fpcc.html)). The
Guaranteed Safe AI agenda separates world model, safety specification, and
verifier the same way; model and specification adequacy remain the hard part
(Dalrymple et al., 2024, [paper](https://arxiv.org/abs/2405.06624)).

Machine-checked isolation is available with precise scope: functional
correctness of the seL4 microkernel (Klein et al., 2009) and a separate
information-flow proof over a partition-scheduler configuration that excludes
timing channels, both assuming hardware behaves as specified
([verification overview](https://sel4.systems/Verification/);
Murray et al., 2013). Verified kernels and attestation are one implementation
family for correct-computation claims, not prerequisites for every such claim,
and they do not by themselves establish semantic truth or alignment.

## Candidate under investigation, not a selected build

A bounded-domain workspace remains the research candidate: aids issue only
typed operations (retrieve an identified passage, calculate a specified
expression, derive from listed premises, generate a counterexample); a separate
deterministic mechanism checks operations and proofs, renders accepted objects
canonically, and records dependencies; components carry explicit state and
resource bounds and cannot grant permissions, alter the checker, or silently
update weights or memory. Source material stays independently accessible so the
person can vary assumptions and inspect consequences.

With a sound checker and appropriate formalization, this could enforce valid
derivations, not truthful premises: a valid proof from a
misleading premise or a selected subset of evidence still misleads, and
canonical rendering does not remove all framing. Whether typed operations
compose into genuinely useful cognition while preserving understanding is an
open question. External representations genuinely change reasoning cost
(Larkin & Simon, 1987, [doi](https://doi.org/10.1111/j.1551-6708.1987.tb00863.x));
task-specific memory skill can grow enormously with practice in one trained
individual (Ericsson, Chase & Faloon, 1980,
[doi](https://doi.org/10.1126/science.7375930)) — neither result establishes general
intelligence gains, and no IQ equivalence is claimed here.

## Gaps the research leaves open

- **Cognition vs agency vs truth.** Correct computation, true belief, and
  preserved agency are three separate ends. Detection-and-override capacity is
  an additional human-side requirement alongside pipeline integrity.
- **Single aid vs coalition.** Individually limited aids can coordinate,
  including emergent collusion without instruction; counting agreeing models
  proves nothing (Motwani et al., 2024,
  [paper](https://arxiv.org/abs/2402.07510); Mathew et al., 2024,
  [paper](https://arxiv.org/abs/2410.03768)). Control protocols have reduced measured harm in studied settings under
  an unproved trusted-weaker-model premise
  (Greenblatt et al., 2024, [paper](https://arxiv.org/abs/2312.06942)).
  Undetectable backdoors are theorems for studied model classes, and implanted
  deception persists through safety training — neither proves restricted
  cognitive systems impossible in general (Goldwasser et al., 2022,
  [paper](https://arxiv.org/abs/2204.06974); Hubinger et al., 2024,
  [paper](https://arxiv.org/abs/2401.05566)).
- **Research requirements stay unproved.** Each aid must remain below the
  person's unaided general capability, be aligned, and not conspire — these
  are standing requirements, not established facts. There is no common
  validated G scale for comparing a person, an aided system, and a model, and
  neither compute budgets nor narrow interfaces establish the ceiling. The
  cited studies demonstrate coordination risk; they do not establish that
  their agents sit below this person's unaided general capability. Likewise
  the backdoor and deception results are bounded findings about studied
  systems, not impossibility proofs.
- **Upgrade order.** Human development first, controller assurance next, AI
  expansion last. Candidate evaluation needs a containment case (isolation,
  output-flow limits, evaluator independence); withholding production authority
  alone is insufficient. Each governor step must be certifiable by the
  previously trusted configuration; revocation cannot undo disclosure,
  influenced belief, or completed acts.

## Separate evaluations for separate claims

1. **Functional augmentation.** Harder unfamiliar tasks solved with aids
   present, with demonstrated comprehension — explaining causes and predicting
   consequences under changed premises. Compare against unaided and
   ordinary-tool baselines with predetermined thresholds; neither domain nor
   thresholds are selected yet.
2. **Durable learning, where claimed.** Delayed retention and transfer. A
   useful stay-in-use prosthesis need not pass withdrawal testing to count;
   withdrawal applies where durable unaided learning is the goal.
3. **Agency under adverse assistance.** Corrupted premises, omitted evidence,
   coordinated wrong advice, penalized disagreement. Passing these attacks is
   limited paradigm evidence, not proof of general safety; coalition-protocol
   results measure harm in the tested setting, not a general bound.
4. **Enforcement and upgrade integrity.** Blocked prohibited effects; seeded
   failure of each prerequisite refuses promotion. The next controller must be
   explicitly authorized and its running version verified before the exact
   tested model, configuration, and scope are promoted; any missing
   prerequisite refuses promotion. Test revocation against a predeclared time
   bound; rollback cannot undo prior disclosure or completed actions.

Guarded tutoring and cognitive-forcing interfaces show
bounded benefits with costs — reduced overreliance, removed learning harm —
not manipulation immunity (Bastani et al., 2025; Bucinca, Malaya & Gajos,
2021; Kestin et al., 2025 — see references). Persuasion and false-memory
effects are experimentally demonstrated in bounded paradigms (Salvi et al.,
2025; Chan et al., 2024). Neural prosthesis work reports both improvements and impairments in specific
patient/task conditions, with benefits concentrated in an impaired-memory
subgroup; it provides no demonstration of general cognitive enhancement in healthy people or of the
proposed IQ/working-memory target (Roeder et al., 2024).

Passing a future bounded study would support only its bounded claims. The next proposed step is to select one reasoning domain and agree on a
study specification before implementation, with a pre-registered evaluation
before collecting outcomes. A mathematical or causal-model workspace is one
candidate because premises, transformations and counterexamples can be inspected;
no domain has been selected.

## References

- Necula (1997), Proof-Carrying Code. [Record](https://www.cs.princeton.edu/~appel/fpcc.html)
- Dalrymple et al. (2024), Towards Guaranteed Safe AI. [Paper](https://arxiv.org/abs/2405.06624)
- Klein et al. (2009), seL4: Formal Verification of an OS Kernel. [Overview](https://sel4.systems/About/seL4-whitepaper.pdf)
- Murray et al. (2013), seL4: From General Purpose to a Proof of Information Flow Enforcement. [Paper](https://www.ieee-security.org/TC/SP2013/papers/4977a415.pdf)
- Larkin & Simon (1987), Why a Diagram Is (Sometimes) Worth Ten Thousand Words. [DOI](https://doi.org/10.1111/j.1551-6708.1987.tb00863.x)
- Ericsson, Chase & Faloon (1980), Acquisition of a Memory Skill. [DOI](https://doi.org/10.1126/science.7375930)
- Motwani et al. (2024), Secret Collusion among AI Agents. [Paper](https://arxiv.org/abs/2402.07510)
- Mathew et al. (2024), Hidden in Plain Text: Emergence & Mitigation of Steganographic Collusion in LLMs. [Paper](https://arxiv.org/abs/2410.03768)
- Greenblatt et al. (2024), AI Control: Improving Safety Despite Intentional Subversion. [Paper](https://arxiv.org/abs/2312.06942)
- Goldwasser et al. (2022), Planting Undetectable Backdoors in Machine Learning Models. [Paper](https://arxiv.org/abs/2204.06974)
- Hubinger et al. (2024), Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training. [Paper](https://arxiv.org/abs/2401.05566)
- Bastani et al. (2025), Generative AI without guardrails can harm learning: Evidence from high school mathematics. [DOI](https://doi.org/10.1073/pnas.2422633122)
- Bucinca, Malaya & Gajos (2021), To Trust or to Think. [Paper](https://arxiv.org/abs/2102.09692)
- Kestin et al. (2025), AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. [DOI](https://doi.org/10.1038/s41598-025-97652-6)
- Salvi et al. (2025), On the Conversational Persuasiveness of GPT-4. [DOI](https://doi.org/10.1038/s41562-025-02194-6)
- Chan et al. (2024), Conversational AI Powered by Large Language Models Amplifies False Memories in Witness Interviews. [Paper](https://arxiv.org/abs/2408.04681)
- Roeder et al. (2024), Developing a hippocampal neural prosthetic to facilitate human memory encoding and recall of stimulus features and categories. [DOI](https://doi.org/10.3389/fncom.2024.1263311)
