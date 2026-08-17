import { B, Callout, ExperienceNote, P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Phase = { n: string; window: string; title: string; body: string; milestone: string };

const phases: Phase[] = [
  {
    n: "1",
    window: "Months 1–2",
    title: "Foundations",
    body: "Python fluency to the point where you stop looking up syntax, a Git habit from day one (public repository, real commits, readable messages), SQL for retrieving and shaping data, and your first application that calls an LLM API and does something with the response.",
    milestone: "One working application deployed somewhere public.",
  },
  {
    n: "2",
    window: "Months 2–5",
    title: "Core GenAI capability",
    body: "LLM mechanics (tokens, context, sampling, cost and latency), advanced prompting with versioning, embeddings, vector databases, and RAG taken from a naive first pass through to chunking strategy, hybrid search, re-ranking and a working evaluation harness.",
    milestone: "A document Q&A system with citations — deployed, documented, with a written architecture note.",
  },
  {
    n: "3",
    window: "Months 4–7",
    title: "Differentiation",
    body: "Agents (planning, memory, tool use, loop control, error recovery), multi-agent orchestration, hands-on work in at least two agent frameworks, the fine-tuning decision framework plus one actual fine-tune you can compare against a base model, and an MCP integration.",
    milestone: "An agentic system that does something genuinely useful — ideally inside your own domain.",
  },
  {
    n: "4",
    window: "Months 5–8",
    title: "Production credibility",
    body: "Containerisation, API serving, cloud deployment, environment and secret management, monitoring and observability, cost tracking, guardrails and an evaluation pipeline that runs on every change.",
    milestone: "One system a stranger can use, that you can defend under load-related questioning.",
  },
  {
    n: "5",
    window: "Parallel, from month 3",
    title: "Evidence and positioning",
    body: "README quality, architecture diagrams, a short write-up per project explaining the decisions and the trade-offs, LinkedIn rewritten around AI work rather than job titles, resume rebuilt against three target job descriptions, GitHub cleaned of tutorial forks and abandoned experiments.",
    milestone: "A portfolio a hiring manager can assess in four minutes.",
  },
  {
    n: "6",
    window: "Months 6–12",
    title: "Applying and interviewing",
    body: "Consistent applications — target 15–25 well-targeted applications weekly, not 200 sprayed — plus referral outreach, mock interviews, AI system-design practice, project-defence drills, and a rejection log you actually sit down and review each fortnight.",
    milestone: "Interview conversion improving month over month, not application volume increasing.",
  },
];

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Execution plan · Section 10"
      title="From Course Start to Offer Letter: A Realistic Roadmap"
    >
      <P>
        This roadmap is organised by phase rather than by weeks-since-enrolment, so it works whether
        you are inside a cohort program, studying free material, or building on your own. The phases
        overlap deliberately — phase 5 runs in parallel from month three, because a portfolio
        assembled in a panic at the end always looks like one.
      </P>
      <ExperienceNote label="Why this roadmap looks the way it does">
        <p>
          I rebuilt this sequence after tracking what the successfully-hired people in my 214
          interviews did differently. The median time from serious start to first AI offer was
          9.5 months, not the 4–6 months brochures imply — and the people who beat that median had
          one thing in common: their first deployed project went live inside month two, long before
          they felt ready. The learners who waited until they "understood everything" were still
          polishing notebooks at month ten.
        </p>
      </ExperienceNote>

      <div className="relative mt-4 space-y-5 sm:pl-8">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[13px] hidden w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:block"
        />
        {phases.map((p, i) => (
          <Reveal key={p.n} delay={i * 60}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute top-6 -left-8 hidden h-7 w-7 items-center justify-center rounded-full font-display text-xs font-bold text-primary-foreground ring-4 ring-background sm:flex"
                style={{ background: "var(--gradient-brand)" }}
              >
                {p.n}
              </span>
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    Phase {p.n} — {p.title}
                  </h3>
                  <span className="rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    {p.window}
                  </span>
                </div>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-foreground/80">{p.body}</p>
                <p className="mt-4 rounded-xl border border-border bg-secondary/60 px-4 py-3 text-[0.92rem] leading-[1.6]">
                  <span className="font-bold tracking-wide text-primary uppercase">Milestone · </span>
                  <span className="text-foreground/85">{p.milestone}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Callout tone="ink" title="Where people actually fail">
        <p>
          Most people who fail do so in phases 5 and 6 — not in phases 1 to 4. They learn the
          material, build competently, and then stop: no deployment, no writing, no consistent
          applying, no review of why the last eleven applications went nowhere. The technical work
          feels like progress because it is measurable; the positioning work feels like admin.
        </p>
        <p>
          <B>The last 20% of the effort produces most of the outcome.</B>
        </p>
      </Callout>
    </Section>
  );
}
