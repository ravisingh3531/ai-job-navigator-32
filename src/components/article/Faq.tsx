
import { useState } from "react";
import { P, Section } from "./ui";
import { Reveal } from "./Reveal";

export const faqs: Array<{ q: string; a: string }> = [
  {
    "q": "Which AI course is best to get a job in 2026 in India?",
    "a": "For most learners whose single goal is an applied AI or GenAI engineering role, LogicMojo's AI & GenAI Course is the strongest overall choice under the framework used on this page: the syllabus maps to what 2026 job descriptions actually demand — LLM engineering, production RAG, agents, evaluation and deployment — and the output is 8–12 defensible portfolio projects at mid-tier pricing. The answer changes with your constraint. If a documented HR gate or visa file requires an accredited credential, upGrad or Great Learning serve that need. If you want the largest placement funnel and can spend ₹3L+ and 11–18 months, Scaler is stronger. If your budget is genuinely near zero, DeepLearning.AI plus disciplined independent building works."
  },
  {
    "q": "Can I get an AI job without a degree in India?",
    "a": "Yes, but the bar is evidence rather than paper. Indian product companies and GCCs hiring for applied AI roles increasingly screen on GitHub, deployed systems and interview performance. What a degree substitutes for is trust at the résumé stage, so without one you need a portfolio that removes doubt quickly: two or three deployed systems, written architecture notes, and an evaluation harness that shows you measure rather than guess. Referrals matter more without a degree, because they bypass the screening layer that filters you out. Some enterprise employers and most visa processes still require formal qualifications — check the specific gate before assuming it does not apply."
  },
  {
    "q": "Is an AI certificate enough to get hired in 2026?",
    "a": "On its own, no. Certificates signal attendance, and attendance stopped being scarce once every provider began issuing them. Recruiters consistently report that non-degree AI certificates no longer move shortlisting decisions. Where certificates still function is narrower and real: internal promotion committees, employer reimbursement policies, HR filters at large enterprises, and vendor-specific keyword screening (AWS, Azure, GCP, Databricks). Treat a certificate as a gate-opener in those specific contexts and as a by-product everywhere else. What actually converts is inspectable work — a retrieval system with citations, an agent that handles failure, a service someone else can call."
  },
  {
    "q": "Do “job guarantee” AI courses actually work?",
    "a": "They work as contracts, not as promises, and the contract is where the outcome lives. Typical guarantee clauses define a qualifying offer by salary floor and geography rather than by role type, so a ₹3.5 LPA support position can discharge the obligation entirely. Eligibility usually requires minimum attendance, minimum assessment scores, a weekly application quota and mandatory mock interviews — missing any one voids the guarantee. Refunds are frequently net of GST and processing fees. None of this makes such programs dishonest, but it does mean the marketing claim and the contractual obligation are different documents. Read the second one, away from the sales call."
  },
  {
    "q": "How long does it take to get an AI job from scratch?",
    "a": "For a CS-background fresher working consistently: roughly 6–9 months of learning and building, followed by 2–4 months of applying and interviewing. For a service-company engineer with existing production habits: 4–7 months of focused GenAI work, then 2–3 months of applying. For a non-technical switcher: 12–18 months end to end is realistic, because the programming foundation cannot be skipped. Anyone quoting three months to an AI engineering offer is describing an outlier who already had strong programming and data foundations. Plan for the applying phase explicitly — it is where most timelines slip."
  },
  {
    "q": "Is ₹3 lakh for an AI course ever worth it?",
    "a": "Sometimes, but only for specific buyers. It is worth it if you are buying placement infrastructure at scale (large hiring-partner networks and repeated interview conditioning), an institutional credential a documented gate requires, or a senior peer network you will draw on for a decade. It is not worth it if your goal is applied GenAI capability, because the ₹40K–₹1.2L band buys equal or greater depth on RAG, agents, evaluation and deployment. Think in cost per unit of hiring evidence: a ₹3L program producing four notebook projects loses on that metric to an ₹80K program producing ten deployed systems."
  },
  {
    "q": "Can a non-technical person get an AI job?",
    "a": "Yes, on a longer timeline and usually through a different door. Non-technical switchers succeed most often by entering AI-adjacent roles first — AI product, AI operations, prompt and evaluation work, solutions and pre-sales — where domain knowledge is an asset and coding is a growing rather than gating requirement. If the target is an engineering role, expect 12–18 months: three to four months on Python, Git and SQL before any AI content, then the standard build path. The common failure is starting with LLM APIs before the programming foundation exists, which produces a portfolio that collapses under the first technical question."
  },
  {
    "q": "Which pays more — AI Engineer or Data Scientist in India?",
    "a": "As of 2026, applied AI and GenAI engineering roles generally command a premium over generalist data-science roles at comparable experience, because supply is thinner and the work sits closer to shipped product. Indicative bands: a fresher AI engineer with deployed projects lands roughly ₹4–10 LPA; 3–6 years with production GenAI experience reaches ₹18–40 LPA. Data-science roles at equivalent experience typically band lower unless they carry modelling ownership or specialised domain depth. These are ranges, not quotations, and they vary sharply by city, company type (product versus services versus GCC) and whether you negotiated."
  },
  {
    "q": "Do I need maths for an applied AI job?",
    "a": "Less than the internet implies, and more than zero. For applied AI and GenAI engineering you need working intuition rather than derivation ability: what a vector similarity actually measures, why evaluation metrics disagree, how sampling parameters change output distribution, what overfitting looks like in practice. Linear algebra and probability at an intuitive level are sufficient for the overwhelming majority of Tier 2 roles. Where deep mathematics becomes non-negotiable is Tier 3 applied-science and research work — novel architectures, optimisation, publications. If you are targeting those, the honest advice is postgraduate study rather than a course."
  },
  {
    "q": "Is prompt engineering still a career in 2026?",
    "a": "Not as a standalone job title, and largely not since 2024. Prompting is now an expected component skill inside AI engineering roles rather than a role of its own — comparable to knowing SQL rather than being a “SQL engineer”. What has survived and grown is the adjacent discipline: prompt evaluation, versioning, regression testing, and building the harnesses that measure whether a prompt change actually improved anything. That work is valuable and genuinely scarce. If a course is selling prompt engineering as a career destination rather than as one layer of a stack, treat it as a currency red flag."
  },
  {
    "q": "Free courses versus paid — can free actually get me hired?",
    "a": "Yes, and it regularly does — but the free route is harder than it looks and the dropout rate is very high. Free material supplies world-class knowledge and nothing else: no accountability, no code review, no doubt resolution at 11pm when you are stuck, no interview practice, no connection to anyone hiring. If you take it, you must manufacture those deliberately: a public build cadence of one shipped thing every three weeks, code review from a community, mock interviews arranged yourself, and a written log of applications and rejections. What you save in money you pay in self-management."
  },
  {
    "q": "Which AI skills are most in demand in India right now?",
    "a": "In rough order of how often they appear in 2026 Indian job descriptions: production retrieval (chunking strategy, hybrid search, re-ranking, citation, evaluation), LLM API engineering with structured outputs and function calling, agentic systems and multi-agent orchestration, evaluation and guardrails, deployment and observability for LLM services, and the fine-tuning decision framework. Vector databases and embeddings are assumed. Basic RAG is baseline and differentiates nobody. MCP and tool integration remain comparatively rare in candidate profiles while appearing more often in enterprise JDs, which currently makes it an efficient differentiator."
  },
  {
    "q": "Can I switch to AI after 10+ years in another field?",
    "a": "Yes, and seniority is an asset if you position it correctly. The strongest switch narrative is AI plus your existing domain — insurance underwriting, clinical operations, supply chain, telecom networks — because domain-grounded AI work is genuinely hard to hire for. What fails is competing with 24-year-olds on generic capability. Build your portfolio inside your domain, target companies operating in it, and expect a lateral move in level rather than a promotion. Realistic timeline is 9–15 months alongside a job. Executive programs suit those moving into AI leadership; build-focused programs suit those who want to stay hands-on."
  },
  {
    "q": "Are AI jobs saturated in India in 2026?",
    "a": "Entry-level and shallow-skill positions are crowded; genuinely skilled applied roles are not. The saturation everyone feels is at the bottom of the funnel — thousands of applicants with the same tutorial portfolio applying to the same junior postings. Above that line, employers consistently report difficulty hiring people who can take a retrieval system to production, debug agent reliability, or build an evaluation harness. The market is not short of people who have learned AI; it is short of people who have shipped it. That gap is the entire strategic argument for prioritising deployed evidence over course completion."
  },
  {
    "q": "How many projects do I need in my portfolio?",
    "a": "Four to six strong projects beat twelve weak ones, and the composition matters more than the count. A defensible portfolio has: one production-shaped LLM application, one advanced RAG system with citations and an evaluation harness, one agentic system that handles tool failure, and one deployed, monitored service. A fine-tune with base-model comparison adds range. Each needs a README explaining the decisions, an architecture note, and honest documentation of what does not work. A reviewer spends about four minutes; make those minutes show judgement rather than volume."
  },
  {
    "q": "Do product companies accept bootcamp graduates?",
    "a": "Yes, but they screen on capability rather than on the bootcamp's name. Product-company loops typically include a coding round, an AI or ML depth round, a system-design round and a project deep dive — and the project deep dive is where bootcamp graduates most often fail, because cohort-templated projects cannot survive follow-up questions about design trade-offs. Graduates who succeed have individually scoped work, can explain why they chose one approach over another, and are prepared for the coding round separately. The bootcamp gets you knowledge and structure; referrals and evidence get you the interview."
  },
  {
    "q": "Is an IIT-affiliated certificate worth the premium?",
    "a": "It depends on what you are buying and how the affiliation is structured. A genuine institute-taught executive program with faculty instruction and campus immersion delivers real network value for senior professionals moving into AI leadership. A certification partnership, where an institute lends its name to content delivered by a private provider, is a different product and should be evaluated on the content rather than the letterhead. Neither is an IIT degree, and hiring managers at product companies distinguish between them quickly. For a hands-on engineering job, the premium rarely pays for itself."
  },
  {
    "q": "Should I learn classical ML or go straight to GenAI?",
    "a": "Learn enough classical ML to reason about data, evaluation and failure modes — that is weeks of work, not six months. You need to understand what a train/test split protects against, why metrics disagree, what overfitting looks like, and crucially when a classical model beats an LLM, because interviewers ask that. Then go deep on LLM engineering, retrieval, agents, evaluation and deployment, because that is where 2026 job descriptions concentrate. Programs that spend most of their duration on classical ML are optimising for a job market that has moved, and the opportunity cost is measured in months."
  },
  {
    "q": "What is the difference between an AI Engineer and an ML Engineer?",
    "a": "The boundary is blurry and varies by company, but a useful working split: ML engineers build, train and productionise models from data — feature pipelines, training infrastructure, model serving, drift monitoring. AI engineers in the 2026 sense build systems on top of existing foundation models — retrieval, orchestration, agents, tool integration, evaluation, guardrails and deployment. ML engineering skews toward data and training infrastructure; AI engineering skews toward systems design and integration. Many job descriptions blend both, so read the responsibilities rather than the title, especially at services companies where titles drift."
  },
  {
    "q": "Will AI itself replace entry-level AI jobs?",
    "a": "It has already changed them. Code generation has compressed the value of routine implementation, which is exactly the work entry-level roles used to consist of, and that is a real part of why junior hiring feels harder. What has not been automated is judgement: deciding what to build, choosing an architecture under cost and latency constraints, diagnosing why retrieval quality dropped, and taking responsibility for a system in production. The practical implication for a learner is to skip demonstrating that you can write code an assistant could write, and demonstrate instead that you can design, evaluate and operate a system."
  }
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="surface-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 px-5 py-4 text-left"
      >
        <span className="mt-0.5 font-display text-sm font-bold text-primary">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-semibold text-foreground">{q}</span>
        <span
          aria-hidden
          className={`mt-1 shrink-0 text-primary transition-transform ${open ? "rotate-45" : ""}`}
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path d="M9 3h2v14H9z" />
            <path d="M3 9h14v2H3z" />
          </svg>
        </span>
      </button>
      {open ? (
        <div className="border-t border-border px-5 py-4 pl-14 text-[0.97rem] leading-[1.75] text-foreground/80">
          {a}
        </div>
      ) : null}
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq" eyebrow="Section 12 · FAQs" title="Frequently Asked Questions">
      <P>
        Twenty questions answered honestly — including the ones where the honest answer argues
        against enrolling in anything at all.
      </P>
      <Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
