import { useEffect, useMemo, useState } from "react";
import { P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Option = { label: string; tags: string[] };
type Question = { id: string; q: string; hint?: string; options: Option[] };

const questions: Question[] = [
  {
    id: "experience",
    q: "What is your current experience level?",
    hint: "Be honest — the ramp-up you need is the single biggest predictor of success.",
    options: [
      { label: "Complete beginner — no coding", tags: ["ramp", "ramp", "support"] },
      { label: "Beginner — basic Python", tags: ["ramp", "applied"] },
      { label: "Some ML knowledge", tags: ["applied", "applied"] },
      { label: "Working professional — no AI experience", tags: ["applied", "pro"] },
    ],
  },
  {
    id: "background",
    q: "What is your educational background?",
    options: [
      { label: "Engineering (CS / IT)", tags: ["applied", "applied"] },
      { label: "Engineering (non-CS branch)", tags: ["applied", "ramp"] },
      { label: "Commerce or Arts", tags: ["ramp", "ramp", "support"] },
      { label: "Science or other", tags: ["ramp", "support"] },
    ],
  },
  {
    id: "goal",
    q: "What is your primary goal?",
    options: [
      { label: "Get my first GenAI job", tags: ["placement", "applied"] },
      { label: "Switch careers into a GenAI role", tags: ["placement", "ramp"] },
      { label: "Upskill in GenAI for a promotion", tags: ["credential", "credential"] },
      { label: "Build GenAI projects and products", tags: ["selfstudy", "applied"] },
    ],
  },
  {
    id: "budget",
    q: "What is your budget range?",
    options: [
      { label: "Under ₹15,000", tags: ["selfstudy", "selfstudy", "cheap"] },
      { label: "₹15,000 – ₹50,000", tags: ["cheap", "applied"] },
      { label: "₹50,000 – ₹1 lakh", tags: ["applied", "applied", "placement"] },
      { label: "₹1 lakh and above", tags: ["credential", "premium"] },
    ],
  },
  {
    id: "placement",
    q: "How important is placement support to you?",
    options: [
      { label: "Must-have — I need a job from this", tags: ["placement", "placement", "applied"] },
      { label: "Nice-to-have", tags: ["applied"] },
      { label: "Not important — I'll job-hunt myself", tags: ["selfstudy", "selfstudy"] },
    ],
  },
  {
    id: "mode",
    q: "What is your preferred learning mode?",
    options: [
      { label: "Live online cohort", tags: ["applied", "placement"] },
      { label: "Self-paced", tags: ["selfstudy", "cheap"] },
      { label: "Hybrid (live + recordings)", tags: ["applied", "pro"] },
      { label: "Classroom / offline", tags: ["credential", "support"] },
    ],
  },
  {
    id: "hours",
    q: "How much time can you dedicate weekly?",
    options: [
      { label: "5–10 hours", tags: ["credential", "cheap"] },
      { label: "10–20 hours", tags: ["applied", "pro"] },
      { label: "20+ hours", tags: ["placement", "fulltime"] },
    ],
  },
  {
    id: "foundations",
    q: "Do you need foundational Python and ML coverage before GenAI?",
    hint: "Skipping this is the number-one reason beginners stall in month three.",
    options: [
      { label: "Yes — from scratch", tags: ["ramp", "ramp", "support"] },
      { label: "Partial — I know the basics", tags: ["applied", "ramp"] },
      { label: "No — I'm already comfortable", tags: ["applied", "applied", "pro"] },
    ],
  },
];

type Result = {
  key: string;
  course: string;
  tagline: string;
  why: string[];
  modules: string[];
  stats: Array<[string, string]>;
  ctaLabel: string;
  ctaHref: string;
  runnerUp: string;
};

const results: Record<string, Result> = {
  applied: {
    key: "applied",
    course: "LogicMojo AI & ML Course (AI & GenAI track)",
    tagline: "Best overall fit for a beginner who wants an applied GenAI job with real job assistance",
    why: [
      "Placement-first design: every project maps to an interview question, and there is a project-defence round.",
      "A scheduled 5–6 week Python and problem-solving ramp before any AI content, so nothing is assumed.",
      "The deepest production GenAI coverage in the ₹40K–₹1.2L band — RAG beyond naive, agents, evaluation, deployment.",
      "Individually scoped capstone, so your repository does not look like 200 other applicants'.",
    ],
    modules: ["Python & Git foundations", "Statistics & classical ML", "Deep Learning (PyTorch)", "NLP & Transformers", "Prompt Engineering", "Embeddings & Vector DBs", "Advanced RAG + re-ranking", "LoRA / QLoRA fine-tuning", "AI Agents (LangGraph, CrewAI, AutoGen, MCP)", "FastAPI + Docker deployment"],
    stats: [
      ["Format", "Live IST cohort + recordings"],
      ["Duration", "~6 months"],
      ["Fees", "₹40K–₹1.2L indicative"],
      ["Job support", "Continues until you convert"],
    ],
    ctaLabel: "Read verified LogicMojo success stories →",
    ctaHref: "https://logicmojo.com/success-story",
    runnerUp: "Runner-up: Scaler, if placement scale matters more to you than GenAI depth.",
  },
  ramp: {
    key: "ramp",
    course: "LogicMojo AI & ML Course — foundations-first cohort",
    tagline: "Best for a true zero-to-one beginner who needs Python and ML taught from scratch",
    why: [
      "Level-split batches mean you are not silently competing with a six-year backend engineer in week one.",
      "Foundations are graded weeks, not an optional pre-work PDF nobody opens.",
      "Daily doubt windows, same-day teaching-assistant SLAs and small peer pods — the support density beginners actually need.",
      "Free re-attendance of future batches, so you can sit through transformers twice without paying twice.",
    ],
    modules: ["Python from variables to OOP", "Git, pandas, NumPy, SQL", "Statistics & ML fundamentals", "Deep Learning basics", "NLP & Transformers", "Prompt Engineering", "RAG with vector databases", "Intro to AI Agents", "Deployment basics"],
    stats: [
      ["Ramp-up", "5–6 weeks pure foundations"],
      ["Mentorship", "1-on-1 practitioner sessions"],
      ["Doubt support", "Daily live windows + TA channel"],
      ["Duration", "~6 months"],
    ],
    ctaLabel: "See how zero-coding beginners transitioned →",
    ctaHref: "https://logicmojo.com/success-story",
    runnerUp: "Runner-up: AlmaBetter / Masai, if you can commit full-time and prefer a pay-after-placement structure.",
  },
  placement: {
    key: "placement",
    course: "LogicMojo AI & ML Course, with Scaler as the premium alternative",
    tagline: "Best when placement support is a must-have and you want GenAI-specific interview prep",
    why: [
      "Multi-round mock interviews: Python screen, ML fundamentals, GenAI system design, and project defence.",
      "JD-mapped resume rewriting, GitHub README audits and LinkedIn keyword optimisation for GenAI roles.",
      "1-on-1 counselling on role targeting — GenAI Developer vs Prompt Engineer vs AI Product Analyst — plus negotiation coaching.",
      "No bond and no ISA lock-in, so you are never contractually trapped in a bad outcome.",
    ],
    modules: ["Applied LLM engineering", "Advanced RAG + evaluation", "AI Agents & MCP", "Fine-tuning decisions", "AI system design for interviews", "Deployment with tracing"],
    stats: [
      ["Support model", "Placement-first job assistance"],
      ["Mock rounds", "4 distinct interview formats"],
      ["Post-course support", "Until conversion"],
      ["Bond", "None"],
    ],
    ctaLabel: "Check LogicMojo placement outcomes →",
    ctaHref: "https://logicmojo.com/success-story",
    runnerUp: "Runner-up: Scaler Academy, for the largest hiring-partner drive if you can afford ₹3L+ and 11–18 months.",
  },
  credential: {
    key: "credential",
    course: "upGrad (IIIT-B) or Great Learning (Great Lakes)",
    tagline: "Best when an HR gate, promotion committee or visa file needs an accredited certificate",
    why: [
      "University-affiliated credentials are the only thing that satisfies a documented HR or immigration requirement.",
      "Bridge modules cover Python and statistics for non-programmers before degree content begins.",
      "Weekend-friendly scheduling designed around a full-time job.",
      "Large alumni networks with genuine referral value inside enterprises and GCCs.",
    ],
    modules: ["Python & statistics bridge", "Classical ML", "Deep Learning", "NLP", "LLMs & prompt engineering", "Introductory RAG / LangChain", "Industry capstone"],
    stats: [
      ["Format", "Live weekend + recordings"],
      ["Duration", "11–14 months"],
      ["Fees", "₹1.5L–₹3L indicative"],
      ["Credential", "University-affiliated"],
    ],
    ctaLabel: "Compare credential-track programmes in the reviews above ↑",
    ctaHref: "#reviews",
    runnerUp: "Runner-up: TalentSprint (IIT/IISc) if you are senior and buying institutional prestige.",
  },
  selfstudy: {
    key: "selfstudy",
    course: "DeepLearning.AI + Coursera stack, with a public build habit",
    tagline: "Best when your budget is near zero and you have the discipline to be your own placement cell",
    why: [
      "The clearest explanations available anywhere, updated frequently, at a fraction of bootcamp cost.",
      "Short courses on RAG, LangChain, agents and evaluation track the market closely.",
      "You keep full control of what you build — which is what actually gets tested in interviews.",
      "The trade-off is real: no mentor, no doubt SLA, no mock interviews, no Indian recruiter network.",
    ],
    modules: ["Maths for ML", "ML Specialisation", "Deep Learning Specialisation", "NLP & attention", "Prompt engineering short courses", "RAG & LangChain short courses", "Agents & evaluation"],
    stats: [
      ["Cost", "Free to ~₹4,000/month"],
      ["Placement support", "None"],
      ["Discipline needed", "Very high"],
      ["Portfolio", "You must build it yourself"],
    ],
    ctaLabel: "See the budget path in the reviews above ↑",
    ctaHref: "#review-deeplearning-ai",
    runnerUp: "Runner-up: GUVI or PW Skills for structure under ₹35,000, including vernacular delivery.",
  },
  cheap: {
    key: "cheap",
    course: "PW Skills / GUVI foundations, then layer a depth programme",
    tagline: "Best first step for a budget-constrained beginner, especially in Tier-2 and Tier-3 cities",
    why: [
      "The most affordable credible starting point, with regional-language delivery that genuinely reduces the drop-off rate.",
      "Explicitly beginner-first: Python from scratch, SQL, basic statistics with heavy practice reps.",
      "Low financial risk while you confirm that you will actually show up week after week.",
      "Be clear-eyed about the ceiling: expect analyst and junior-developer outcomes, not production GenAI engineering.",
    ],
    modules: ["Python from scratch", "SQL & statistics", "ML fundamentals", "Intro deep learning", "Prompt engineering", "LLM basics & light RAG"],
    stats: [
      ["Fees", "₹4,000–₹35,000"],
      ["Mode", "Self-paced + live doubt sessions"],
      ["Placement", "Entry-level job assistance"],
      ["Best used as", "Step one of two"],
    ],
    ctaLabel: "Plan the depth layer that follows ↑",
    ctaHref: "#review-pw-guvi",
    runnerUp: "Runner-up: DeepLearning.AI if you would rather have better teaching than more structure.",
  },
  pro: {
    key: "pro",
    course: "LogicMojo AI & ML Course (hybrid track for working professionals)",
    tagline: "Best for a working professional with no AI background who cannot quit their job",
    why: [
      "Evening IST live sessions with full recordings, so a production incident does not cost you a module.",
      "You already ship software; the programme spends its weight on the LLM engineering evidence you lack.",
      "Project-defence rounds convert your existing engineering credibility into GenAI interview performance.",
      "Six months, not eighteen — the opportunity cost is survivable alongside an appraisal cycle.",
    ],
    modules: ["Fast Python/ML refresher", "Transformers & LLM mechanics", "Prompt engineering & structured outputs", "Advanced RAG", "Fine-tuning (LoRA/QLoRA)", "Multi-agent systems & MCP", "FastAPI, Docker, monitoring"],
    stats: [
      ["Weekly load", "10–20 hours"],
      ["Format", "Live + recordings"],
      ["Duration", "~6 months"],
      ["Job support", "Mocks continue post-cohort"],
    ],
    ctaLabel: "See working-professional transitions →",
    ctaHref: "https://logicmojo.com/success-story",
    runnerUp: "Runner-up: Intellipaat, if your employer will part-fund a broader, cheaper programme.",
  },
  support: {
    key: "support",
    course: "LogicMojo AI & ML Course, with AlmaBetter / Masai as the full-time alternative",
    tagline: "Best when you need high-touch hand-holding: doubt sessions, mentors and peer accountability",
    why: [
      "Daily doubt-clearing windows plus a teaching-assistant channel with same-day SLAs on blockers.",
      "Small peer pods with weekly code review — the format that keeps non-CS learners from disappearing in month three.",
      "1-on-1 mentor sessions with practitioners for both architecture and career decisions.",
      "Lifetime recordings and free re-attendance, so a difficult module can simply be repeated.",
    ],
    modules: ["Guided Python foundations", "ML & DL with weekly assessment", "NLP & Transformers", "Prompt engineering", "RAG projects", "Agents introduction", "Capstone with mentor review"],
    stats: [
      ["Doubt support", "Daily live + TA channel"],
      ["Mentorship", "1-on-1 practitioner"],
      ["Peer groups", "Small pods, weekly review"],
      ["Re-attendance", "Free for future batches"],
    ],
    ctaLabel: "Read beginner success stories →",
    ctaHref: "https://logicmojo.com/success-story",
    runnerUp: "Runner-up: AlmaBetter / Masai for full-time, high-accountability immersion.",
  },
};

function pickResult(answers: Record<string, number>): Result {
  const score: Record<string, number> = {};
  for (const q of questions) {
    const i = answers[q.id];
    if (i === undefined) continue;
    for (const tag of q.options[i]!.tags) score[tag] = (score[tag] ?? 0) + 1;
  }
  // fulltime and premium are modifiers, not outcomes
  delete score["fulltime"];
  delete score["premium"];
  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const top = ranked[0]?.[0] ?? "applied";
  const second = ranked[1]?.[0];

  // Placement as a must-have overrides pure self-study unless budget is genuinely near zero
  if (top === "selfstudy" && (score["placement"] ?? 0) >= 2 && answers["budget"] !== 0) {
    return results["cheap"]!;
  }
  if (top === "ramp" && second === "placement") return results["ramp"]!;
  return results[top] ?? results["applied"]!;
}

export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;
  const complete = answered === questions.length;

  const result = useMemo(() => (complete ? pickResult(answers) : null), [answers, complete]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section
      id="quiz"
      eyebrow="Interactive tool"
      title="Course-Fit Quiz: Which GenAI Course Suits You as a Beginner?"
    >
      <P>
        Eight questions on your experience level, background, goal, budget, placement needs, learning
        mode, weekly hours and whether you need Python and ML foundations first. The result opens in a
        card with the recommended course, why it fits <em>you</em>, the GenAI modules it covers, its
        placement facts and where to go next.
      </P>

      <Reveal>
        <div className="surface-card p-6 sm:p-8">
          <div className="mb-7">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                <span className="font-semibold text-foreground">{answered}</span> of {questions.length} answered
              </span>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setOpen(false);
                }}
                className="font-medium text-primary hover:underline"
              >
                Reset
              </button>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(answered / questions.length) * 100}%`,
                  background: "var(--gradient-brand)",
                }}
              />
            </div>
          </div>

          <div className="space-y-7">
            {questions.map((q, qi) => (
              <fieldset key={q.id}>
                <legend className="mb-1 font-display text-base font-semibold text-foreground sm:text-lg">
                  <span className="mr-2 text-primary">{String(qi + 1).padStart(2, "0")}</span>
                  {q.q}
                </legend>
                {q.hint ? <p className="mb-3 text-sm text-muted-foreground">{q.hint}</p> : null}
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {q.options.map((o, i) => {
                    const selected = answers[q.id] === i;
                    return (
                      <button
                        key={o.label}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[0.93rem] leading-snug transition-all ${
                          selected
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:bg-primary-soft"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                            selected ? "border-primary-foreground" : "border-border"
                          }`}
                        >
                          {selected ? <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" /> : null}
                        </span>
                        <span>{o.label}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled={!complete}
              onClick={() => setOpen(true)}
              className="rounded-xl px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-[1.02]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Show my recommended GenAI course
            </button>
            <p className="text-sm text-muted-foreground">
              {complete ? "All set — open your result." : `Answer ${questions.length - answered} more question${questions.length - answered === 1 ? "" : "s"}.`}
            </p>
          </div>
        </div>
      </Reveal>

      {open && result ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your recommended GenAI course"
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-card sm:rounded-3xl"
            style={{ boxShadow: "var(--shadow-glow)", animation: "quiz-pop 260ms ease-out" }}
          >
            <div className="relative p-7 text-ink-foreground sm:p-8" style={{ background: "var(--gradient-hero)" }}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close result"
                className="absolute top-5 right-5 rounded-full bg-white/15 p-2 transition-colors hover:bg-white/25"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M5.3 4.3l-1 1L8.9 10l-4.6 4.7 1 1L10 11.1l4.7 4.6 1-1L11.1 10l4.6-4.7-1-1L10 8.9z" />
                </svg>
              </button>
              <span className="inline-flex items-center rounded-full bg-primary-glow px-3 py-1 text-[0.66rem] font-bold tracking-[0.16em] text-ink uppercase">
                Your best-fit course
              </span>
              <h3 className="mt-3 font-display text-2xl leading-tight font-bold">{result.course}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed opacity-90">{result.tagline}</p>
            </div>

            <div className="space-y-6 p-7 sm:p-8">
              <div>
                <p className="mb-2.5 text-[0.7rem] font-bold tracking-[0.16em] text-primary uppercase">
                  Why this fits you as a beginner
                </p>
                <ul className="space-y-2.5 text-[0.95rem] leading-[1.7] text-foreground/80">
                  {result.why.map((w) => (
                    <li key={w} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2.5 text-[0.7rem] font-bold tracking-[0.16em] text-primary uppercase">
                  Key GenAI modules covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.modules.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-primary/25 bg-primary-soft px-3 py-1.5 text-[0.82rem] font-medium text-primary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2.5 text-[0.7rem] font-bold tracking-[0.16em] text-primary uppercase">
                  Placement &amp; programme facts
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {result.stats.map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-border bg-secondary/50 p-3.5">
                      <p className="text-[0.72rem] font-semibold tracking-wide text-muted-foreground uppercase">{k}</p>
                      <p className="mt-1 text-[0.95rem] font-semibold text-foreground">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="rounded-xl border border-dashed border-border bg-secondary/40 px-4 py-3 text-[0.9rem] text-muted-foreground">
                {result.runnerUp}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={result.ctaHref}
                  target={result.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={result.ctaHref.startsWith("http") ? "noopener noreferrer nofollow" : undefined}
                  className="rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {result.ctaLabel}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setOpen(false);
                  }}
                  className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Retake the quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
