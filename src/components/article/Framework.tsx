import { B, Callout, P, Section } from "./ui";
import { Reveal } from "./Reveal";

const criteria = [
  {
    n: "1",
    title: "Job-Description Alignment",
    weight: "25%",
    body: "The share of competencies drawn from 500+ live Indian AI job descriptions that a course teaches to a build-and-defend level. The scoring rule is deliberately harsh: a syllabus mention scores zero, a lecture with a walkthrough scores partial, and a graded, deployed project scores full. This is the criterion nearly every course comparison omits entirely — most compare syllabus breadth, which rewards padding — and it is the single best predictor of how you will perform in a technical round.",
  },
  {
    n: "2",
    title: "Portfolio Output",
    weight: "20%",
    body: "Not project count — project quality and defensibility. Scored on whether projects are deployed or notebook-only; whether they are templated (every learner submits the same recommendation engine) or individualised; whether they carry documentation and architecture reasoning; and whether a hiring manager would treat them as evidence rather than coursework. Ten identical Titanic-style notebooks score lower here than three individualised, deployed systems with public URLs.",
  },
  {
    n: "3",
    title: "Interview Readiness",
    weight: "20%",
    body: "Does the program actively prepare you for AI interviews specifically? Mock interviews conducted by practising engineers, system-design practice for AI systems (not generic web system design), project-defence drills where someone attacks your design choices, resume and LinkedIn work targeted at AI roles, and behavioural framing for career switchers. Passive \"career services\" — a portal, a template, a webinar — scores low. Structured, repeated, feedback-driven practice scores high.",
  },
  {
    n: "4",
    title: "Placement Mechanism",
    weight: "15%",
    body: "Not the placement claim — the mechanism. Are there real hiring-partner relationships with a describable process? Referrals into companies? A cohort-based hiring drive with dates? Or is \"placement assistance\" a resume template and a link to a job board? Also assessed here: whether outcome data is published at all, how transparent it is, and how fair the terms of any guarantee or ISA contract are once you read the eligibility clauses.",
  },
  {
    n: "5",
    title: "Content Currency",
    weight: "10%",
    body: "Was the curriculum built for 2026 or patched from 2022? Assessed through coverage of agents and agent frameworks, MCP, current model families, current framework versions, evaluation tooling, and observed update cadence. The weight looks small but its effect is disproportionate: in AI, an 18-month-old GenAI curriculum teaches deprecated patterns, and a learner who cites them in an interview signals staleness rather than knowledge.",
  },
  {
    n: "6",
    title: "Cost-to-Outcome Ratio",
    weight: "10%",
    body: "Total cost — fees plus GST plus EMI interest plus the opportunity cost of duration — set against the realistic outcome band. Expensive is not the same as poor value. A ₹3.5L program that reliably produces ₹20 LPA product-company offers is excellent value; a ₹1.5L program producing ₹5 LPA support roles is poor value at any price. Duration counts as cost: an 18-month program has to justify a full extra year against a 6-month one targeting the same role.",
  },
];

export function Framework() {
  return (
    <Section
      id="framework"
      eyebrow="⚖️ Section 4 — Methodology"
      title="How I Ranked These Courses: The Six Job-Outcome Criteria"
    >
      <P>
        This is the credibility spine of the page. It is written to be specific enough that a
        skeptical reader could re-run the ranking themselves and argue with my scores rather than my
        conclusions.
      </P>
      <div className="space-y-5">
        {criteria.map((c, i) => (
          <Reveal key={c.n} delay={(i % 3) * 70}>
            <div className="surface-card p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {c.n}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <span className="rounded-full border border-primary/25 bg-primary-soft px-3 py-0.5 text-xs font-bold tracking-wide text-primary">
                  weight {c.weight}
                </span>
              </div>
              <p className="mt-3 text-[1rem] leading-[1.75] text-foreground/80">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Callout tone="warn" title="How the scoring works — and its limits">
        <p>
          Each criterion is scored 1–10, weighted as above, and expressed as a composite{" "}
          <B>Job-Outcome Score out of 100</B>. To be explicit: these scores are my assessment based
          on the methodology described here, not an objective measurement. If your priorities differ
          — say a recognised credential is worth far more to you than portfolio depth because your
          employer's promotion policy requires one — you should re-weight the criteria and the order
          will change.
        </p>
        <p>
          I would rather you disagree with a number than accept a ranking you cannot interrogate. If
          you think a course is mis-scored, the framework gives you the vocabulary to say exactly
          where and why.
        </p>
      </Callout>
    </Section>
  );
}