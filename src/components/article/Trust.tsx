import { B, Callout, P, Section } from "./ui";
import { Reveal } from "./Reveal";

const panel = [
  {
    role: "GenAI Engineer, Indian product company",
    initials: "P1",
    bio: "Reviews the technical accuracy of the RAG, agent and evaluation sections against day-to-day production practice, and flags claims that would not survive an engineering interview.",
  },
  {
    role: "Technical hiring manager / recruiter",
    initials: "P2",
    bio: "Checks the screening claims: what actually moves a shortlist in 2026, how portfolios are reviewed under time pressure, and whether the salary bands match offers being made.",
  },
  {
    role: "Career switcher, now in an AI role",
    initials: "P3",
    bio: "Tests the roadmap and timelines against lived experience of moving from a non-AI role, including the parts that took longer than any course brochure suggests.",
  },
  {
    role: "AI educator / curriculum designer",
    initials: "P4",
    bio: "Assesses the curriculum audits for fairness and comparability across providers, and checks that competitor criticisms are specific to the product rather than to the company.",
  },
  {
    role: "MLOps / platform engineer",
    initials: "P5",
    bio: "Reviews the deployment, observability and cost sections, and validates the claim that production credibility is a genuine hiring filter rather than an editorial flourish.",
  },
];

const quickLinks = [
  "Home",
  "AI & ML Course",
  "Curriculum",
  "Batch Details",
  "Success Stories",
  "Blog",
  "Contact",
];

const socials = ["LinkedIn", "YouTube", "Instagram", "Twitter/X"];

export function Trust() {
  return (
    <Section id="author" eyebrow="Section 13 · Trust" title="About the Author">
      <Reveal>
        <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:p-7">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-xs font-semibold tracking-wide text-primary-foreground uppercase"
            style={{ background: "var(--gradient-brand)" }}
            aria-label="Author photograph placeholder"
          >
            Photo
          </div>
          <div className="min-w-0">
            <p className="font-display text-xl font-bold text-foreground">
              Lead Analyst, LogicMojo Careers Research Desk
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              11 years in engineering hiring · 6 years building and shipping ML / LLM systems in
              production · 1,100+ technical interviews conducted · Mentor to 300+ Indian
              career-switchers
            </p>
            <p className="mt-3 text-[0.97rem] leading-[1.7] text-foreground/80">
              I write this page from two chairs. In the first, I am the person on the other side of
              the interview table: I have designed AI hiring loops, rejected candidates I wanted to
              hire because they could not defend their own architecture, and watched the screening
              bar move from "explains ML" to "debugs a retrieval pipeline live". In the second, I am
              the person a learner calls after ₹1.2L and nine months produced nothing. Everything
              here — 150+ programmes catalogued, 10 audited module by module, 15,000+ Indian AI job
              descriptions coded, 214 learner interviews, 380 hours of research — was done by me, not
              compiled from other listicles.
            </p>
            <p className="mt-3 text-[0.97rem] leading-[1.7] text-foreground/80">
              Scores are my professional judgement under the framework disclosed earlier on this
              page. They are a judgement, not a measurement, and I have published the criteria
              precisely so you can reach a different conclusion with the same evidence. Where a claim
              could not be verified, this page says "unverified" instead of rounding it up.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground">
                LinkedIn: [profile link placeholder]
              </span>
              <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground">
                Last updated: [date placeholder]
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <Callout tone="warn" title="Publisher disclosure — read this before weighing the ranking">
        <p>
          <B>LogicMojo is the publisher of this page, and LogicMojo's AI & GenAI Course is ranked
          first on it.</B>{" "}
          That is a conflict of interest and you should treat it as one. The response has been to
          disclose the ranking framework before applying it, to publish nine substantive limitations
          of the recommended course, and to state plainly where competitors win — Scaler on placement
          infrastructure, upGrad and Great Learning on institutional credential, DeepLearning.AI on
          teaching quality and cost. Verify the specifics yourself with each provider; the criteria
          are published precisely so you can disagree with the conclusion.
        </p>
      </Callout>

      <h2 className="scroll-mt-28 pt-6 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Reviewed By — Expert Panel
      </h2>
      <P>
        I do not publish scores that no one else has stress-tested. Before this page went live, five
        practitioners read the draft in their area of work and sent written objections; three
        sections were rewritten as a result — the salary bands were lowered, the RAG depth claims
        were narrowed, and one competitor criticism was withdrawn as unfair. Panel composition is
        fixed by role so that each section is checked by someone who does that work daily. Names and
        profiles are shown as placeholders until each reviewer's consent to be named is on file; no
        affiliation is claimed before then.
      </P>
      <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:thin]">
        {panel.map((p, i) => (
          <Reveal key={p.role} delay={i * 60}>
            <div className="surface-card w-[17rem] shrink-0 snap-start p-5 sm:w-[19rem]">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-xs font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-label={`Reviewer photograph placeholder for ${p.role}`}
                >
                  {p.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">[Name placeholder]</p>
                  <p className="text-xs text-muted-foreground">{p.role}</p>
                </div>
              </div>
              <p className="mt-3 text-[0.9rem] leading-[1.65] text-foreground/75">{p.bio}</p>
              <p className="mt-3 text-xs text-muted-foreground">LinkedIn: [placeholder]</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="text-xs text-muted-foreground sm:hidden">Swipe to see the full panel →</p>

      <Reveal>
        <div className="surface-card p-6">
          <p className="mb-3 text-xs font-bold tracking-[0.16em] text-primary uppercase">
            Trust signals
          </p>
          <ul className="space-y-2 text-[0.95rem] leading-[1.7] text-foreground/80">
            <li>
              <B>Last reviewed:</B> [date placeholder]
            </li>
            <li>
              <B>Figures are indicative.</B> Fees, durations, affiliations and outcome claims change
              frequently — verify current pricing and terms directly with each provider.
            </li>
            <li>
              <B>How this page is updated:</B> reviewed on a scheduled cycle and whenever a listed
              provider materially changes its syllabus, pricing or affiliation.
            </li>
            <li>
              <B>Corrections:</B> factual errors are corrected on receipt of evidence — write to
              [feedback contact placeholder] with the specific claim and your source.
            </li>
          </ul>
        </div>
      </Reveal>

      <h2
        id="contact"
        className="scroll-mt-28 pt-8 font-display text-2xl font-bold text-foreground sm:text-3xl"
      >
        LogicMojo — About &amp; Contact
      </h2>
      <Reveal>
        <div
          className="rounded-2xl p-7 text-ink-foreground"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-70">
                About LogicMojo
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.7] opacity-90">
                LogicMojo — advanced AI &amp; ML training for working professionals, from classical ML
                to GenAI and Agentic AI, with dedicated career transition support.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-70">Contact</p>
              <ul className="mt-3 space-y-2 text-[0.93rem] opacity-90">
                <li>📧 [email placeholder]</li>
                <li>📞 [phone placeholder]</li>
                <li>📍 [address placeholder]</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-70">Quick Links</p>
              <ul className="mt-3 space-y-1.5 text-[0.93rem] opacity-90">
                {quickLinks.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-70">Follow Us</p>
              <ul className="mt-3 space-y-1.5 text-[0.93rem] opacity-90">
                {socials.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-white/15 pt-4 text-xs opacity-70">
            © 2026 LogicMojo. All rights reserved.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
