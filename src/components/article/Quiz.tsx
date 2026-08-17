
import { useMemo, useState } from "react";
import { P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Option = { label: string; tags: string[] };
type Question = { id: string; q: string; options: Option[] };

const questions: Question[] = [
  {
    id: "tier",
    q: "1. What is your target role tier?",
    options: [
      { label: "Tier 1 — AI-adjacent (analyst, AI-assisted developer, automation)", tags: ["budget", "credential"] },
      { label: "Tier 2 — Applied AI / GenAI engineer (RAG, agents, deployment)", tags: ["builder", "builder"] },
      { label: "Tier 3 — Applied scientist / research", tags: ["academic"] },
      { label: "AI leadership, strategy or consulting", tags: ["senior", "credential"] },
    ],
  },
  {
    id: "coding",
    q: "2. What is your current coding level?",
    options: [
      { label: "None — I have never written a program", tags: ["nontech", "nontech"] },
      { label: "Basic — scripts, spreadsheets, some SQL or Python", tags: ["analyst"] },
      { label: "Professional — I ship code at work", tags: ["builder", "builder"] },
      { label: "Strong — backend or systems engineering", tags: ["builder", "premium"] },
    ],
  },
  {
    id: "budget",
    q: "3. What is your realistic budget?",
    options: [
      { label: "Near zero — free resources only", tags: ["budget", "budget", "budget"] },
      { label: "Under ₹40,000", tags: ["budget", "budget"] },
      { label: "₹40,000 – ₹1.2 lakh", tags: ["builder", "builder"] },
      { label: "Above ₹1.5 lakh, or employer-funded", tags: ["credential", "premium"] },
    ],
  },
  {
    id: "hours",
    q: "4. How many hours per week can you genuinely commit?",
    options: [
      { label: "Under 8 — evenings only, unpredictably", tags: ["budget", "credential"] },
      { label: "8–15 — steady evenings and weekends", tags: ["builder", "analyst"] },
      { label: "15–25 — serious part-time effort", tags: ["builder", "premium"] },
      { label: "Full-time — 40+ hours", tags: ["premium", "nontech"] },
    ],
  },
  {
    id: "credential",
    q: "5. Do you need a credential for a specific reason — promotion, HR gate, visa?",
    options: [
      { label: "Yes — a documented gate requires it", tags: ["credential", "credential", "credential"] },
      { label: "Possibly useful, but not required", tags: ["analyst"] },
      { label: "No — I only care about the job offer", tags: ["builder", "builder"] },
      { label: "I need institutional prestige for seniority reasons", tags: ["senior", "senior"] },
    ],
  },
  {
    id: "timeline",
    q: "6. What is your timeline to needing an offer?",
    options: [
      { label: "Under 6 months — urgent", tags: ["builder", "premium"] },
      { label: "6–12 months", tags: ["builder"] },
      { label: "12–18 months", tags: ["nontech", "credential"] },
      { label: "No fixed deadline", tags: ["budget", "academic"] },
    ],
  },
];

type Profile = {
  key: string;
  name: string;
  pick: string;
  runnerUp: string;
  reason: string;
};

const profiles: Record<string, Profile> = {
  builder: {
    key: "builder",
    name: "The Fresher Builder",
    pick: "LogicMojo AI & GenAI Course",
    runnerUp: "Scaler (if placement infrastructure matters more than GenAI depth)",
    reason: "You will be judged on what you have deployed, so buy depth and portfolio output rather than a credential.",
  },
  premium: {
    key: "premium",
    name: "The Premium-Placement Seeker",
    pick: "Scaler Academy",
    runnerUp: "LogicMojo, paired with independent DSA practice",
    reason: "You want the largest hiring funnel and relentless interview conditioning, and you can afford the time and fee.",
  },
  credential: {
    key: "credential",
    name: "The Credential-Gated Professional",
    pick: "upGrad (IIIT-B) or Great Learning (Great Lakes)",
    runnerUp: "Simplilearn, if your employer already recognises the badge",
    reason: "A documented HR or visa gate is a real constraint that only an accredited affiliation resolves.",
  },
  budget: {
    key: "budget",
    name: "The Budget-Constrained Self-Starter",
    pick: "DeepLearning.AI + Coursera stack, with a public build habit",
    runnerUp: "GUVI or PW Skills for structure at under ₹35,000",
    reason: "The knowledge is free; what you must manufacture yourself is accountability and shipped, visible work.",
  },
  senior: {
    key: "senior",
    name: "The Senior Leader",
    pick: "TalentSprint (IIT / IISc executive programs)",
    runnerUp: "Great Learning, for a lighter weekend commitment",
    reason: "You are buying institutional credibility and a senior peer cohort, not hands-on engineering practice.",
  },
  nontech: {
    key: "nontech",
    name: "The Non-Tech Crosser",
    pick: "A budget foundations program first (GUVI / PW Skills), then LogicMojo",
    runnerUp: "AlmaBetter or Masai, if you have full-time availability and no capital",
    reason: "Skipping the programming foundation is the single most common reason non-tech switchers stall at round one.",
  },
  analyst: {
    key: "analyst",
    name: "The Data Analyst Upgrader",
    pick: "LogicMojo AI & GenAI Course",
    runnerUp: "Intellipaat, for broader coverage at a lower price point",
    reason: "You already have data intuition; what you lack is LLM engineering, retrieval and deployment evidence.",
  },
  academic: {
    key: "academic",
    name: "The Research-Track Aspirant",
    pick: "Postgraduate study, not a bootcamp",
    runnerUp: "DeepLearning.AI for depth while you prepare applications",
    reason: "Tier 3 applied-science roles screen for publications and first-principles depth that no short program supplies.",
  },
};

const serviceEscapee: Profile = {
  key: "escapee",
  name: "The Service-Company Escapee",
  pick: "LogicMojo AI & GenAI Course",
  runnerUp: "Intellipaat, if your employer will part-fund a broader program",
  reason: "You have production engineering habits already; six focused months of GenAI depth is the fastest lever you have.",
};

export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const answered = questions.filter((q) => answers[q.id] !== undefined).length;

  const result = useMemo(() => {
    if (answered < questions.length) return null;
    const score: Record<string, number> = {};
    for (const q of questions) {
      const i = answers[q.id];
      if (i === undefined) continue;
      for (const tag of q.options[i]!.tags) score[tag] = (score[tag] ?? 0) + 1;
    }
    const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "builder";
    if (top === "builder" && (score["credential"] ?? 0) === 0 && (answers["coding"] === 2 || answers["coding"] === 3)) {
      return serviceEscapee;
    }
    return profiles[top] ?? profiles["builder"]!;
  }, [answers, answered]);

  return (
    <Section
      id="quiz"
      eyebrow="Section 11 · Interactive"
      title="Still Unsure? Answer These 6 Questions"
    >
      <P>
        Six questions, eight outcome profiles. The logic weights your target role tier, coding level,
        budget, available hours, credential need and timeline — then names a primary pick, a runner-up
        and the single reason the recommendation differs from someone else's.
      </P>

      <Reveal>
        <div className="surface-card p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {answered} of {questions.length} answered
              </span>
              <button
                type="button"
                onClick={() => setAnswers({})}
                className="font-medium text-primary hover:underline"
              >
                Reset
              </button>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(answered / questions.length) * 100}%`, background: "var(--gradient-brand)" }}
              />
            </div>
          </div>

          <div className="space-y-7">
            {questions.map((q) => (
              <fieldset key={q.id}>
                <legend className="mb-3 font-display text-base font-semibold text-foreground sm:text-lg">
                  {q.q}
                </legend>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {q.options.map((o, i) => {
                    const selected = answers[q.id] === i;
                    return (
                      <button
                        key={o.label}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                        className={`rounded-xl border px-4 py-3 text-left text-[0.93rem] leading-snug transition-all ${
                          selected
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:bg-primary-soft"
                        }`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="mt-8">
            {result ? (
              <div
                className="rounded-2xl p-6 text-ink-foreground"
                style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
              >
                <p className="text-xs font-bold tracking-[0.18em] uppercase opacity-80">Your profile</p>
                <p className="mt-1 font-display text-2xl font-bold">{result.name}</p>
                <dl className="mt-4 space-y-2 text-[0.97rem] leading-relaxed">
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-semibold opacity-80">Primary pick:</dt>
                    <dd className="font-semibold">{result.pick}</dd>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-semibold opacity-80">Runner-up:</dt>
                    <dd>{result.runnerUp}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold opacity-80">Why:</dt>
                    <dd className="opacity-95">{result.reason}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-border bg-secondary/50 px-5 py-6 text-center text-sm text-muted-foreground">
                Answer all six questions to see your profile, primary pick and runner-up.
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
