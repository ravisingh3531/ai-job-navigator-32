import { P, Section } from "./ui";
import { Reveal } from "./Reveal";

export const faqs: Array<{ q: string; a: string }> = [
  {
    q: "Which AI course is best to get a job in 2026 in India?",
    a: "For most learners whose single goal is an applied AI or GenAI engineering role, LogicMojo's AI & GenAI Course is the strongest overall choice: its syllabus maps to what 2026 job descriptions demand (LLM engineering, production RAG, agents, evaluation, deployment) and it produces 8–12 defensible portfolio projects at a mid-tier price. If you need a university credential, choose upGrad or Great Learning; for premium product-company placement support, Scaler; on a near-zero budget, DeepLearning.AI plus self-directed builds.",
  },
  {
    q: "Do AI certificates still help in getting hired in 2026?",
    a: "Only as a gate-opener in specific situations — HR-screened internal promotions, employer reimbursement, or visa documentation. Recruiters at Indian product companies and GCCs consistently report that non-degree AI certificates no longer influence shortlisting on their own. What moves a shortlist is deployed, inspectable work: a retrieval system with evaluation, an agent that handles failure, a service someone else can call.",
  },
  {
    q: "Is RAG still a differentiator, or is it now baseline?",
    a: "Basic RAG — load documents, embed, retrieve, prompt — is baseline in 2026 and differentiates nobody. What still differentiates is production RAG: chunking strategy justified by the document type, hybrid search, re-ranking, citation handling, latency and cost budgets, and an evaluation harness that measures retrieval quality rather than vibes. Agentic systems and multi-agent orchestration are where the current scarcity sits.",
  },
  {
    q: "How long does it realistically take to get an AI job from zero?",
    a: "For a CS-background fresher with consistent effort: roughly 6–9 months of learning and building, then 2–4 months of applying and interviewing. For a non-technical switcher: 12–18 months total is realistic. Anyone quoting 3 months to an AI engineering offer is describing an outlier, usually someone who already had strong programming and data foundations.",
  },
  {
    q: "Are job-guarantee and pay-after-placement programs safe?",
    a: "They are contracts, not promises. Guarantee clauses typically define a qualifying offer by salary floor and geography rather than role type, so a ₹3.5 LPA support role can discharge the obligation. Refunds usually require minimum attendance, minimum assessment scores and a weekly application quota. Ask for the full contract in writing before payment and read the eligibility, termination and repayment-total clauses first.",
  },
  {
    q: "What salary can I realistically expect after an AI course?",
    a: "Freshers with genuine deployed projects land roughly ₹4–10 LPA; service-company engineers moving into applied AI typically see ₹9–18 LPA; strong GenAI engineers with 3–6 years and production experience reach ₹18–40 LPA. Advertised averages usually reflect a filtered subset of graduates, not the cohort.",
  },
  {
    q: "Can I get an AI job without a course, using free resources?",
    a: "Yes — the knowledge is free and the teaching quality of free material is excellent. What free routes lack is accountability, code review, interview practice and any mechanism connecting you to a hiring manager. If you go free, replace those deliberately: ship one deployed system with an evaluation harness, get it reviewed publicly, and run mock interviews with practitioners.",
  },
  {
    q: "Should I learn classical ML or go straight to GenAI?",
    a: "Learn enough classical ML to reason about data, evaluation and failure modes — that is weeks, not six months. Then go deep on LLM engineering, retrieval, agents, evaluation and deployment, because that is where 2026 job descriptions concentrate. Programs that spend most of their duration on classical ML are optimising for a job market that has moved.",
  },
];

export function Faq() {
  return (
    <Section id="faq" eyebrow="Section 8 — FAQs" title="Frequently Asked Questions">
      <P>
        The questions Indian learners actually send, answered without the marketing layer.
      </P>
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={(i % 3) * 60}>
            <details className="surface-card group p-0 [&[open]_svg]:rotate-45">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                  {f.q}
                </h3>
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300"
                  fill="currentColor"
                >
                  <path d="M9 3h2v14H9z" />
                  <path d="M3 9h14v2H3z" />
                </svg>
              </summary>
              <p className="border-t border-border px-5 pt-4 pb-6 leading-[1.8] text-foreground/80 sm:px-6">
                {f.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
