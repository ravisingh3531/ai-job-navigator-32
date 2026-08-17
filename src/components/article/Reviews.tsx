import { B, P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Review = {
  id: string;
  rank: string;
  name: string;
  score: string;
  bestFor: string;
  verdict: string;
  body: string;
  strengths: string[];
  gaps: string[];
};

const reviews: Review[] = [
  {
    id: "review-logicmojo",
    rank: "01",
    name: "LogicMojo — AI & GenAI Course",
    score: "91/100",
    bestFor: "Tier 2 applied AI/GenAI engineering roles at a non-premium price",
    verdict: "Primary recommendation",
    body: "The curriculum is organised around what current job descriptions ask for rather than around an academic ML syllabus: LLM engineering, production RAG (chunking strategy, hybrid search, re-ranking, evaluation harnesses), agent frameworks, fine-tuning where it is actually justified, and deployment. Sessions are live in IST batches with recordings, and the output is 8–12 projects you can open in an interview and defend line by line.",
    strengths: [
      "Deepest coverage of the rows that separate candidates: advanced RAG, agents, evaluation, deployment",
      "Portfolio-first — artefacts a hiring manager can inspect, not notebook exercises",
      "Mid-tier fee with EMI; strongest cost per unit of job-relevant capability on this list",
    ],
    gaps: [
      "No university-affiliated certificate, so it does nothing for HR-gated internal promotions",
      "Hiring-partner network is modest and referral-driven, not an industrial placement engine",
      "Placement claims are provider-stated and not independently verifiable — ask for specifics in writing",
    ],
  },
  {
    id: "review-scaler",
    rank: "02",
    name: "Scaler (AI/ML tracks)",
    score: "84/100",
    bestFor: "Freshers and 1–4 yr engineers targeting premium product companies",
    verdict: "Best placement engine",
    body: "Scaler's real product is the structured placement machine: hiring drives, a large active alumni network, repeated mock interviews and a published annual placement report. Academically it is strong on DSA, system design and classical ML. The trade is duration and money — 11–18 months and ₹3–4L before GST.",
    strengths: [
      "Largest and most active hiring network of any program here",
      "Interview preparation is relentless and genuinely raises the ceiling",
      "Publishes outcome data, which almost nobody else does",
    ],
    gaps: [
      "GenAI depth lags: agents, MCP and LLM evaluation are covered rather than built",
      "Roughly 40% of the time goes to DSA/system design — great for SDE screens, not for GenAI rounds",
      "Highest realistic opportunity cost on the list once you count duration",
    ],
  },
  {
    id: "review-upgrad",
    rank: "03",
    name: "upGrad (IIIT-B AI & ML)",
    score: "72/100",
    bestFor: "Learners who need a recognised credential for HR gates or visa files",
    verdict: "Credential-first",
    body: "You are buying the IIIT-B affiliation and structured career services. The syllabus is broad and competently delivered, but it moves on a university approval cycle, which is the wrong clock speed for agent tooling. Expect classical ML and deep learning depth, plus GenAI as a module rather than a spine.",
    strengths: [
      "Credential carries real weight inside large enterprises and for employer reimbursement",
      "Structured mentorship, career services and a large partner portal",
      "Multiple entry tracks, so you can match prior background",
    ],
    gaps: [
      "GenAI, agents and evaluation are introduced, not built to production level",
      "8–18 month durations at ₹1.5–3.5L; a lot of the fee is brand",
      "Budget 2–3 extra months of self-directed agent/deployment work after finishing",
    ],
  },
  {
    id: "review-great-learning",
    rank: "04",
    name: "Great Learning (Great Lakes / UT Austin)",
    score: "70/100",
    bestFor: "Working professionals wanting weekend structure plus a brand certificate",
    verdict: "Credential-first, shorter",
    body: "Similar credential logic to upGrad with a shorter runway and a mentor-led weekend format that genuinely suits people with a full-time job. Content is solid on analytics, ML and deep learning; the GenAI layer is current at a conceptual level and thin at a production level.",
    strengths: [
      "Weekend cadence with mentored sessions — realistic for 8–12 hrs/week",
      "Recognised certificate for analytics, DS and AI-adjacent business roles",
      "Good for data science and AI business analyst targets",
    ],
    gaps: [
      "Weak on deployment, evaluation and agentic systems",
      "Career support is a job board plus assistance, not a placement engine",
      "Fee band overlaps premium programs without matching their networks",
    ],
  },
  {
    id: "review-intellipaat",
    rank: "05",
    name: "Intellipaat (Advanced GenAI tracks)",
    score: "68/100",
    bestFor: "Mid-market buyers who want breadth and live support at ₹80K–2.5L",
    verdict: "Reasonable mid-market",
    body: "Broad catalogue, live plus self-paced delivery, aggressive support SLAs and frequent syllabus refreshes. The newer GenAI tracks do cover RAG and agents, but the depth per topic is uneven and the capstones are lighter than the marketing implies.",
    strengths: [
      "Faster syllabus refresh cycle than the university-affiliated programs",
      "Lifetime access claims and responsive doubt support (verify current terms)",
      "Fee sits meaningfully below the premium band",
    ],
    gaps: [
      "Uneven depth — strong modules sit next to shallow ones",
      "Portfolio artefacts need reinforcement with your own builds",
      "Placement support is assistance-level only",
    ],
  },
  {
    id: "review-talentsprint",
    rank: "06",
    name: "TalentSprint (IIT / IISc programs)",
    score: "66/100",
    bestFor: "Senior engineers and managers who need an IIT/IISc brand",
    verdict: "Brand and network play",
    body: "Executive-format programs with institute branding, campus immersion and a cohort of experienced peers. The peer network and the letterhead are the product; the hands-on GenAI engineering depth is not where a Tier 2 IC role would need it.",
    strengths: [
      "Strongest brand signal for senior/managerial and consulting tracks",
      "Cohort peers are experienced — the network compounds",
      "Weekend/hybrid design built for people with demanding jobs",
    ],
    gaps: [
      "₹2.5–4.5L for limited production engineering practice",
      "Little placement machinery; you are expected to already have a career",
      "Wrong purchase for a fresher or a hands-on switcher",
    ],
  },
  {
    id: "review-simplilearn",
    rank: "07",
    name: "Simplilearn (AI/ML programs)",
    score: "60/100",
    bestFor: "Learners whose employer recognises or reimburses the certificate",
    verdict: "Acceptable, unremarkable",
    body: "Competent, heavily productised training with global batches and a large catalogue. Nothing here is bad; nothing is differentiating either. The GenAI content tracks the market at a surface level and the projects are guided rather than open-ended.",
    strengths: [
      "Flexible scheduling, many batches, recordings and batch switching",
      "Certificates recognised inside many enterprise L&D systems",
      "Reliable delivery quality",
    ],
    gaps: [
      "Guided projects produce weak portfolio evidence",
      "Almost no agentic AI or evaluation depth",
      "₹1.5–2.5L is expensive for what is effectively structured courseware",
    ],
  },
  {
    id: "review-deeplearning-ai",
    rank: "08",
    name: "DeepLearning.AI + Coursera",
    score: "58/100 (as a course) — highest ceiling per rupee",
    bestFor: "Disciplined self-learners with near-zero budget",
    verdict: "Best value, zero scaffolding",
    body: "The teaching quality is the best on this list and the short-course library tracks new tooling faster than any degree-affiliated program. What you do not get is accountability, code review, interview practice or a mechanism that connects you to a hiring manager. Everything that turns knowledge into evidence is on you.",
    strengths: [
      "Free to ₹4K/month; unbeatable cost structure",
      "Andrew Ng-quality explanations plus a steady stream of current short courses",
      "You can assemble a genuinely modern stack from the catalogue",
    ],
    gaps: [
      "No portfolio pressure — most learners finish with forked tutorials",
      "Zero placement mechanism, zero mock interviews, zero feedback loop",
      "Realistic outcomes vary wildly and depend entirely on self-built evidence",
    ],
  },
  {
    id: "review-almabetter",
    rank: "09",
    name: "AlmaBetter / Masai (ISA & pay-after-placement)",
    score: "54/100",
    bestFor: "Career switchers with no upfront capital who can go full-time",
    verdict: "Access-enabling, read the contract",
    body: "These programs solve an access problem: ₹0 upfront and full-time intensity for 6–11 months. The catch is contractual. Qualifying-offer definitions are salary-and-geography based, so a support-adjacent role can discharge the obligation, and total repayment frequently exceeds the sticker price of a paid program.",
    strengths: [
      "No upfront fee; genuine option if capital is the binding constraint",
      "High-intensity full-time structure with frequent mock interviews",
      "Active entry-level placement activity",
    ],
    gaps: [
      "ISA repayment can total ₹2.5–4L+ with multi-year obligations",
      "Outcome band skews ₹4–12 LPA and includes non-AI roles",
      "Requires quitting your job — the highest-risk option here",
    ],
  },
  {
    id: "review-pw-guvi",
    rank: "10",
    name: "PW Skills / GUVI",
    score: "48/100",
    bestFor: "First step, vernacular learners, or testing whether you like this work",
    verdict: "Great first step, insufficient alone",
    body: "Under ₹40K, largely recorded, with vernacular delivery at GUVI that genuinely widens access. Treat it as a foundations purchase: Python, ML basics, some GenAI introduction. It will not by itself get you to a Tier 2 AI engineering interview, and the marketing should not persuade you otherwise.",
    strengths: [
      "Lowest cost of entry by an order of magnitude",
      "Hindi, Tamil and Telugu delivery options at GUVI",
      "Low-risk way to test aptitude before committing real money",
    ],
    gaps: [
      "No production RAG, agents, evaluation or deployment depth",
      "Job portal only; effectively no career support at AI-engineering level",
      "Typical outcomes ₹3–9 LPA, often in adjacent rather than AI roles",
    ],
  },
];

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Section 6 — Course reviews"
      title="Individual Course Reviews — What Each One Actually Buys You"
    >
      <P>
        The tables above compare rows. This section does the opposite: it reads each provider as a{" "}
        <B>single purchase decision</B> — what you are actually paying for, what you will be able to
        show at the end, and where the program will leave you exposed in an interview. Scores use
        the six-dimension framework disclosed earlier.
      </P>
      <div className="grid gap-6">
        {reviews.map((r, i) => (
          <Reveal key={r.id} delay={(i % 2) * 80}>
            <article
              id={r.id}
              className="surface-card relative scroll-mt-28 overflow-hidden p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-1"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {r.rank}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">{r.name}</h3>
                <span className="rounded-full border border-primary/25 bg-primary-soft px-3 py-0.5 text-xs font-bold text-primary">
                  {r.score}
                </span>
                <span className="rounded-full border border-border bg-secondary px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                  {r.verdict}
                </span>
              </div>
              <p className="mt-4 text-sm font-medium text-primary">Best for: {r.bestFor}</p>
              <p className="mt-3 text-[1rem] leading-[1.75] text-foreground/80">{r.body}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-success/30 bg-success/8 p-4">
                  <p className="text-xs font-bold tracking-[0.14em] text-success uppercase">
                    What works
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/80">
                    {r.strengths.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span aria-hidden className="text-success">
                          ✓
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-warning/40 bg-warning/10 p-4">
                  <p className="text-xs font-bold tracking-[0.14em] text-foreground/70 uppercase">
                    Where it exposes you
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/80">
                    {r.gaps.map((g) => (
                      <li key={g} className="flex gap-2">
                        <span aria-hidden className="text-foreground/50">
                          !
                        </span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
