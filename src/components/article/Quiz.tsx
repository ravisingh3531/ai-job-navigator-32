import { useMemo, useState } from "react";
import { B, P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Pick = { key: string; label: string; note: string };

const questions: Array<{ id: string; q: string; options: Array<{ label: string; score: Record<string, number> }> }> = [
  {
    id: "goal",
    q: "What is the offer letter you actually want?",
    options: [
      { label: "GenAI / AI Engineer at a product company or GCC", score: { logicmojo: 3, scaler: 1 } },
      { label: "ML Engineer or Data Scientist", score: { scaler: 3, upgrad: 2 } },
      { label: "AI PM, analyst or consulting-facing role", score: { upgrad: 3, greatlearning: 2 } },
      { label: "Any first job in tech — I am switching careers", score: { almabetter: 3, guvi: 2 } },
    ],
  },
  {
    id: "budget",
    q: "What can you actually spend, all-in?",
    options: [
      { label: "Under ₹40,000", score: { guvi: 3, deeplearning: 3 } },
      { label: "₹40,000 – ₹1.5L", score: { logicmojo: 3, intellipaat: 2 } },
      { label: "₹1.5L – ₹4L", score: { scaler: 2, upgrad: 2, greatlearning: 2 } },
      { label: "₹0 upfront — I need deferred payment", score: { almabetter: 4 } },
    ],
  },
  {
    id: "time",
    q: "Honest weekly capacity for the next 6–12 months?",
    options: [
      { label: "Under 8 hours — I have a demanding job", score: { greatlearning: 3, deeplearning: 1 } },
      { label: "10–15 hours — evenings and weekends", score: { logicmojo: 3, intellipaat: 2, upgrad: 1 } },
      { label: "20+ hours", score: { scaler: 3, logicmojo: 1 } },
      { label: "Full-time — I can stop working", score: { almabetter: 3, scaler: 1 } },
    ],
  },
  {
    id: "gap",
    q: "What is your real gap right now?",
    options: [
      { label: "Evidence — I know things but have shipped nothing", score: { logicmojo: 4 } },
      { label: "Knowledge — I need the fundamentals properly", score: { deeplearning: 2, intellipaat: 2, upgrad: 1 } },
      { label: "Access — nobody replies to my applications", score: { scaler: 3, almabetter: 2 } },
      { label: "Credential — an HR gate or visa file needs paper", score: { upgrad: 3, greatlearning: 2, talentsprint: 2 } },
    ],
  },
];

const results: Record<string, Pick> = {
  logicmojo: { key: "logicmojo", label: "LogicMojo — AI & GenAI Course", note: "Your constraint is job-relevant depth and defensible portfolio evidence at a sane price. Verify current fee, batch timing and refund terms in writing before paying." },
  scaler: { key: "scaler", label: "Scaler", note: "You want the placement engine and can fund the time and money. Read the placement report and confirm which track carries the GenAI content you need." },
  upgrad: { key: "upgrad", label: "upGrad (IIIT-B)", note: "You are buying a credential that opens a specific door. Budget 2–3 extra months of self-directed agent, evaluation and deployment work afterwards." },
  greatlearning: { key: "greatlearning", label: "Great Learning", note: "Weekend structure plus a recognised certificate fits your capacity. Reinforce the production layer with your own builds." },
  intellipaat: { key: "intellipaat", label: "Intellipaat advanced GenAI track", note: "Mid-market breadth with live support. Check the depth of the specific modules you care about before enrolling." },
  talentsprint: { key: "talentsprint", label: "TalentSprint (IIT/IISc)", note: "Justified only if the institute brand does concrete work for your track. Do not expect hands-on production depth." },
  deeplearning: { key: "deeplearning", label: "DeepLearning.AI + Coursera, self-directed", note: "Cheapest path with the highest ceiling — and no scaffolding. Commit to one deployed system with an evaluation harness, or this route fails." },
  almabetter: { key: "almabetter", label: "AlmaBetter / Masai (deferred payment)", note: "Access-enabling, but read the qualifying-offer definition, repayment total, duration and default clauses before signing." },
  guvi: { key: "guvi", label: "PW Skills / GUVI as a first step", note: "Use it to build foundations and test aptitude cheaply, then step up to an applied program. It is not sufficient alone for a Tier 2 role." },
};

export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;

  const winner = useMemo(() => {
    const totals: Record<string, number> = {};
    questions.forEach((q) => {
      const idx = answers[q.id];
      if (idx === undefined) return;
      Object.entries(q.options[idx]!.score).forEach(([k, v]) => {
        totals[k] = (totals[k] ?? 0) + v;
      });
    });
    const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    return ranked.length ? results[ranked[0]![0]] : undefined;
  }, [answers]);

  return (
    <Section
      id="quiz"
      eyebrow="Section 7 — Course-fit quiz"
      title="The 60-Second Course-Fit Quiz"
    >
      <P>
        Four questions, answered honestly, resolve most of this decision. This is not a lead-capture
        form — nothing is submitted anywhere and there is no email box.{" "}
        <B>Treat the output as a starting hypothesis</B>, then verify it against the reviews and the
        coverage map above.
      </P>
      <div className="grid gap-5">
        {questions.map((q, qi) => (
          <Reveal key={q.id} delay={(qi % 2) * 70}>
            <div className="surface-card p-6">
              <p className="font-display text-lg font-semibold text-foreground">
                <span className="mr-2 text-primary">{qi + 1}.</span>
                {q.q}
              </p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {q.options.map((o, oi) => {
                  const selected = answers[q.id] === oi;
                  return (
                    <button
                      key={o.label}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                        selected
                          ? "border-primary bg-primary text-primary-foreground shadow-lg"
                          : "border-border bg-secondary/50 text-foreground/80 hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                      }`}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-3xl border border-primary/25 p-6 sm:p-8"
        style={{ background: "var(--gradient-hero)" }}
      >
        <p className="text-xs font-bold tracking-[0.18em] text-primary-glow uppercase">
          Your result
        </p>
        {winner && answered === questions.length ? (
          <>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink-foreground">
              {winner.label}
            </h3>
            <p className="mt-3 max-w-2xl leading-[1.75] text-ink-foreground/85">{winner.note}</p>
          </>
        ) : (
          <p className="mt-3 text-ink-foreground/85">
            Answer all four questions to see your recommendation.{" "}
            <span className="font-semibold text-ink-foreground">
              {answered}/{questions.length} answered.
            </span>
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="rounded-full border border-primary-glow/40 px-4 py-2 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary-glow/15"
          >
            Reset answers
          </button>
          <a
            href="#matrix"
            className="rounded-full bg-primary-glow px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Cross-check the matrix
          </a>
        </div>
      </div>
    </Section>
  );
}
