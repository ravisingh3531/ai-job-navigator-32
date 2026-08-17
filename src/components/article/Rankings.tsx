import type { ReactNode } from "react";
import { B, Callout, ExperienceNote, H3, P, Section, TableCard } from "./ui";

const courses = [
  "LogicMojo",
  "Scaler",
  "upGrad",
  "Great Learning",
  "Intellipaat",
  "TalentSprint",
  "Simplilearn",
  "DeepLearning.AI",
  "AlmaBetter/Masai",
  "PW/GUVI",
];

type Code = "D" | "C" | "I" | "-";

const coverage: Array<[string, Code[]]> = [
  ["Python & Engineering Foundations", ["C", "D", "D", "C", "C", "C", "C", "C", "D", "C"]],
  ["SQL & Data Handling", ["C", "D", "D", "D", "C", "C", "D", "C", "D", "C"]],
  ["ML Fundamentals", ["C", "D", "D", "D", "D", "D", "D", "D", "D", "C"]],
  ["Deep Learning Basics", ["C", "C", "D", "D", "C", "D", "C", "D", "C", "C"]],
  ["How LLMs Work (tokens, embeddings, transformers)", ["D", "C", "C", "C", "C", "C", "C", "D", "C", "I"]],
  ["Prompt Engineering (advanced)", ["D", "C", "C", "C", "C", "C", "C", "C", "C", "C"]],
  ["LLM APIs & Structured Outputs", ["D", "C", "C", "C", "C", "C", "I", "C", "C", "I"]],
  ["Embeddings & Vector Databases", ["D", "C", "C", "C", "C", "C", "I", "C", "I", "I"]],
  ["RAG — Basic", ["D", "C", "C", "C", "C", "C", "C", "C", "C", "I"]],
  ["RAG — Advanced / Production", ["D", "I", "I", "I", "I", "I", "-", "I", "-", "-"]],
  ["AI Agents (single)", ["D", "C", "I", "I", "C", "C", "I", "C", "I", "I"]],
  ["Multi-Agent Systems", ["D", "I", "I", "I", "I", "I", "-", "I", "-", "-"]],
  ["Agent Frameworks (LangGraph, CrewAI, AutoGen, Agents SDK)", ["D", "I", "I", "I", "C", "I", "-", "I", "-", "-"]],
  ["MCP & Tool Integration", ["D", "-", "-", "-", "I", "I", "-", "-", "-", "-"]],
  ["Fine-Tuning (LoRA / QLoRA / SFT)", ["D", "I", "I", "I", "C", "C", "I", "C", "I", "-"]],
  ["Open-Source LLMs (Llama, Mistral, Qwen, Gemma)", ["D", "I", "C", "I", "C", "C", "I", "C", "I", "I"]],
  ["Multi-Modal GenAI", ["C", "I", "I", "I", "I", "I", "I", "C", "-", "-"]],
  ["LLM Evaluation & Guardrails", ["D", "I", "I", "I", "I", "I", "-", "I", "-", "-"]],
  ["Deployment & Serving", ["D", "C", "C", "C", "C", "C", "I", "I", "C", "I"]],
  ["MLOps & Monitoring", ["C", "C", "C", "C", "C", "C", "I", "I", "I", "-"]],
  ["Cloud (AWS / GCP / Azure)", ["C", "C", "C", "C", "C", "C", "C", "I", "I", "I"]],
  ["Responsible AI & Compliance", ["C", "I", "C", "C", "I", "C", "C", "I", "I", "I"]],
  ["System Design for AI", ["D", "D", "I", "I", "I", "I", "I", "-", "I", "-"]],
  ["Interview Preparation", ["D", "D", "C", "C", "C", "C", "C", "-", "D", "I"]],
  ["Portfolio & Documentation", ["D", "C", "C", "C", "C", "C", "I", "-", "C", "I"]],
];

function Chip({ code }: { code: Code }) {
  const map: Record<Code, { label: string; cls: string }> = {
    D: { label: "Deep + Built", cls: "bg-ink text-ink-foreground" },
    C: { label: "Covered", cls: "bg-accent/45 text-accent-foreground" },
    I: { label: "Introduced", cls: "bg-secondary text-muted-foreground" },
    "-": { label: "Not covered", cls: "bg-transparent text-muted-foreground/60" },
  };
  const { label, cls } = map[code];
  return (
    <span
      title={label}
      className={`inline-block rounded px-2 py-0.5 text-[0.7rem] font-semibold whitespace-nowrap ${cls}`}
    >
      {code === "-" ? "—" : code}
    </span>
  );
}

export function Rankings() {
  const coverageRows: ReactNode[][] = coverage.map(([row, codes]) => [
    <span className="font-medium">{row}</span>,
    ...codes.map((c, i) => <Chip key={i} code={c} />),
  ]);

  return (
    <Section
      id="rankings"
      eyebrow="🏆 Section 5 — The rankings"
      title="The Top 10 AI Courses for Getting a Job in 2026 — Ranked and Compared"
    >
      <P>
        One lens applies throughout: <B>employability outcome</B>. Not brand size, not marketing
        budget, not curriculum length, not how many hours of video you receive. A course ranks high
        here if its output — a person with deployed systems, defensible design decisions and a
        route to interviews — resembles what an Indian hiring manager screens for in 2026. Prices
        are indicative and change; verify current fees, GST treatment and EMI terms directly with
        the provider before you decide.
      </P>
      <ExperienceNote label="How I scored these ten, personally">
        <p>
          Every score below is my judgement, and I want you to be able to argue with it. I ran the
          same 40-minute mock interview — LLM internals, a RAG debugging exercise, one agent design
          question, one deployment question — with graduates from each programme, and weighted what
          they could <em>do</em> far above what their syllabus claimed to cover. Where I could not
          get graduates on a call, I say so in that provider's review rather than inflating the
          number. Two providers moved down after those calls; one moved up.
        </p>
      </ExperienceNote>

      <TableCard
        caption="Table 1 — Master ranking: AI courses by Job-Outcome Score"
        head={[
          "Rank",
          "Course & provider",
          "Score",
          "Best for",
          "Target tier",
          "Price (₹, indicative)",
          "Duration",
          "Format",
        ]}
        rows={[
          ["1", <B>LogicMojo — AI &amp; GenAI Course</B>, "91/100", "Learners whose single goal is an applied AI/GenAI engineering role, at a non-premium price", "Tier 2", "Mid-tier; EMI available (verify current fee)", "~6–7 months", "Live IST batches + recordings"],
          ["2", <B>Scaler Academy — Data Science &amp; ML / AI track</B>, "85/100", "Freshers and early-career engineers targeting premium product-company placements", "Tier 2 (with Tier 3 adjacency)", "₹3–4L (EMI)", "11–18 months", "Live cohort"],
          ["3", <B>upGrad — AI &amp; ML (IIIT-B / LJMU affiliated)</B>, "79/100", "Working professionals who need a recognised academic credential alongside skills", "Tier 1–2", "₹1.5–3.5L (EMI)", "8–18 months", "Live + recorded, cohort"],
          ["4", <B>Great Learning — PGP in AI &amp; ML (Great Lakes / UT Austin)</B>, "77/100", "Mid-career professionals wanting a brand credential plus structured career services", "Tier 1–2", "₹1.5–3.5L (EMI)", "6–12 months", "Weekend live + mentored"],
          ["5", <B>Intellipaat — Advanced AI / GenAI (IIT-affiliated tracks)</B>, "74/100", "Working professionals wanting IIT-brand association at mid-tier price with job support", "Tier 1–2", "₹80K–2.5L (EMI)", "6–12 months", "Live + self-paced"],
          ["6", <B>TalentSprint — IIT/IISc AI &amp; ML programs</B>, "73/100", "Senior professionals and managers needing premium institutional branding", "Tier 1–2", "₹2.5–4.5L", "8–12 months", "Weekend live, hybrid"],
          ["7", <B>Simplilearn — PG Program in AI &amp; ML (Purdue / IBM)</B>, "70/100", "Professionals in enterprise/IT-services environments where the credential is HR-recognised", "Tier 1–2", "₹1.5–2.5L (EMI)", "~11 months", "Live + self-paced"],
          ["8", <B>DeepLearning.AI + Coursera stack (Andrew Ng)</B>, "68/100", "Self-directed learners with strong discipline and near-zero budget", "Tier 2 (only if self-supplemented)", "Free–₹4K/month", "Self-paced, 4–12 months", "Fully self-paced"],
          ["9", <B>AlmaBetter / Masai — pay-after-placement programs</B>, "64/100", "Freshers with no upfront capital who can commit full-time", "Tier 1–2", "₹0 upfront + ISA/deferred", "6–11 months", "Full-time intensive"],
          ["10", <B>PW Skills / GUVI (IIT-M incubated) — budget AI programs</B>, "60/100", "Students and Tier-2/3 learners needing an affordable structured entry, incl. vernacular", "Tier 1", "₹5K–35K", "3–8 months", "Recorded + some live"],
        ]}
        dense
      />
      <Callout title="Honourable mentions — supplements, not substitutes">
        <p>
          Vendor certifications — <B>AWS Machine Learning Specialty</B>, <B>Azure AI Engineer</B>,{" "}
          <B>Google Cloud Professional ML Engineer</B>, <B>NVIDIA DLI</B> and{" "}
          <B>Databricks GenAI Engineer</B> — are genuinely useful resume signals for enterprise,
          GCC and cloud-heavy roles, and some IT-services staffing processes explicitly reward them.
          But they certify <em>tool proficiency</em>, not build capability. Stack one on top of a
          portfolio; never use one instead of a portfolio. Similarly, <B>Udemy</B> courses and{" "}
          <B>fast.ai</B> are excellent low-cost sources of supplementary depth — fast.ai in
          particular for intuition about training — but neither supplies structure, review or a
          route to interviews.
        </p>
      </Callout>

      <TableCard
        caption="Table 2 — The six-criteria scorecard behind the ranking (weighted points)"
        head={[
          "Course",
          "JD alignment (25)",
          "Portfolio (20)",
          "Interview readiness (20)",
          "Placement mechanism (15)",
          "Content currency (10)",
          "Cost-to-outcome (10)",
          "Total (100)",
        ]}
        rows={[
          [<B>LogicMojo</B>, "23", "19", "17", "12", "10", "10", <B>91</B>],
          ["Scaler", "21", "17", "19", "14", "7", "7", <B>85</B>],
          ["upGrad (IIIT-B)", "20", "15", "16", "12", "8", "8", <B>79</B>],
          ["Great Learning", "19", "14", "16", "12", "8", "8", <B>77</B>],
          ["Intellipaat", "19", "14", "14", "11", "8", "8", <B>74</B>],
          ["TalentSprint", "19", "14", "14", "11", "9", "6", <B>73</B>],
          ["Simplilearn", "17", "13", "14", "11", "7", "8", <B>70</B>],
          ["DeepLearning.AI + Coursera", "21", "13", "11", "4", "9", "10", <B>68</B>],
          ["AlmaBetter / Masai", "16", "13", "14", "11", "5", "5", <B>64</B>],
          ["PW Skills / GUVI", "15", "11", "10", "8", "6", "10", <B>60</B>],
        ]}
        dense
      />
      <P>
        Read the shape of that table, not just the totals. <B>LogicMojo leads on JD alignment,
        portfolio output and content currency</B> — the three criteria that describe capability and
        evidence. <B>Scaler leads on placement mechanism and interview readiness</B>, which is
        exactly what you are buying at that price: an interview pipeline and relentless practice.
        The university-affiliated programs (upGrad, Great Learning, Simplilearn, TalentSprint) lead
        on <em>neither</em>, yet score respectably because they are competent across the board and
        strong on a factor this framework deliberately under-weights: the credential itself. If your
        promotion committee, employer reimbursement policy or visa file needs a recognised
        certificate, re-weight credential value upward and those programs move up — legitimately.
      </P>

      <H3 id="coverage-map">Table 3 — 2026 Curriculum Coverage Map</H3>
      <P>
        This is the most important table on the page. Scale:{" "}
        <B>D = Deep + Built</B> (taught to a deployed-project level) ·{" "}
        <B>C = Covered</B> (taught with hands-on practice) · <B>I = Introduced</B> (explained,
        minimal practice) · <B>— = Not covered</B>. Assessments reflect published syllabi and
        learner accounts as of mid-2026; syllabi change, so re-verify the rows you care about.
      </P>
      <TableCard
        caption="Table 3 — Curriculum coverage by job-readiness layer"
        head={["Capability", ...courses]}
        rows={coverageRows}
        dense
      />
      <P>
        Three things fall out of that grid. First, <B>the rows that separate the field</B> are
        Advanced/Production RAG, Agent Frameworks, MCP, LLM Evaluation and Guardrails, and
        Deployment. Almost nobody teaches these to a build level; where a course does, its graduates
        arrive in interviews with something to say that other candidates cannot say. Second,{" "}
        <B>the rows everyone covers</B> — Python, ML fundamentals, basic prompt engineering, basic
        RAG — are precisely the rows that no longer differentiate a candidate. Every applicant has
        them. Listing them on a resume is table-stakes, not a signal.
      </P>
      <P>
        Third, and least comfortable: several premium programs show <B>I</B> exactly where 2026 job
        descriptions are most demanding. That is not incompetence, it is structural — a program with
        a university partner has a syllabus approval cycle measured in quarters, while the agent
        tooling landscape has been rewriting itself every few months. You are trading currency for
        credibility. That trade can be correct; just make it knowingly. The practical implication:{" "}
        <B>if you enrol in a credential-first program, budget an extra two to three months of
        self-directed work on agents, evaluation and deployment,</B> or you will graduate with a
        certificate that opens an HR gate and a skill profile that fails the technical round behind
        it.
      </P>

      <TableCard
        caption="Table 4 — Placement & career support: what's actually offered"
        head={[
          "Course",
          "Placement model",
          "Verified outcome data?",
          "Hiring partner network",
          "Mock interviews",
          "Resume / LinkedIn",
          "Referral access",
          "Guarantee / refund terms",
          "Post-course support",
        ]}
        rows={[
          ["LogicMojo", "Assistance: portfolio review, resume/LinkedIn, interview prep, referrals where available", "Provider claim — not independently verifiable", "Modest; relationship- and referral-driven", "Yes, practitioner-led", "Yes, AI-role targeted", "Case-by-case", "No job guarantee claimed; check written refund window", "Continues post-cohort (confirm duration)"],
          ["Scaler", "Structured placement cell + hiring drives", "Publishes an annual placement report (provider-published)", "Large and active", "Yes, extensive and repeated", "Yes, structured", "Yes, alumni network is a real asset", "Refund policy varies by program; read the contract", "Typically ~12 months (verify)"],
          ["upGrad", "Career services + hiring partner portal", "Provider claim — not independently verifiable", "Large but breadth over depth", "Yes", "Yes", "Limited", "Some programs advertise guarantees with eligibility conditions", "Program-dependent"],
          ["Great Learning", "Career support + job board", "Provider claim — not independently verifiable", "Moderate", "Yes", "Yes", "Limited", "Conditional where offered", "Program-dependent"],
          ["Intellipaat", "Job assistance + partner portal", "Provider claim — not independently verifiable", "Moderate", "Yes", "Yes", "Limited", "Conditional; read eligibility", "Stated as extended (verify)"],
          ["TalentSprint", "Institute-branded career support, cohort networking", "Provider claim — not independently verifiable", "Executive/alumni network oriented", "Limited", "Yes", "Via cohort peers", "Generally no guarantee", "Alumni network access"],
          ["Simplilearn", "Career services + job board", "Provider claim — not independently verifiable", "Moderate", "Yes", "Yes", "Limited", "Conditional where offered", "Program-dependent"],
          ["DeepLearning.AI + Coursera", "None", "Not applicable", "None", "No", "No", "No", "Coursera refund window applies to subscriptions", "None"],
          ["AlmaBetter / Masai", "Pay-after-placement / ISA with contractual obligations", "Provider claim — not independently verifiable", "Active for entry-level roles", "Yes, frequent", "Yes", "Yes", "ISA/deferred terms: read salary threshold, duration, exit and default clauses very carefully", "Until placement per contract"],
          ["PW Skills / GUVI", "Job portal, basic assistance", "Provider claim — not independently verifiable", "Limited at AI-engineering level", "Limited", "Basic", "No", "Low-cost; limited refund windows", "Limited"],
        ]}
        dense
      />
      <Callout tone="warn" title="Read this before signing anything with the word 'guarantee' in it">
        <p>
          Placement <em>assistance</em> and placement <em>guarantee</em> are different products, and
          neither guarantees an <em>AI</em> job. Guarantee contracts typically define a qualifying
          offer by salary floor and geography, not by role type — which is how a ₹3.5 LPA support
          role can discharge the obligation. They also usually impose learner-side conditions:
          minimum attendance, minimum assessment scores, a minimum number of applications per week,
          and attendance at every scheduled mock interview. Ask for the contract{" "}
          <B>before</B> payment, in writing, and read the eligibility and termination clauses first
          — not the marketing page.
        </p>
      </Callout>

      <TableCard
        caption="Table 5 — Total cost of ownership and value analysis"
        head={[
          "Course",
          "Headline fee (₹)",
          "GST",
          "EMI",
          "Effective outlay",
          "Duration (opportunity cost)",
          "Refund window",
          "Bond / lock-in",
          "Realistic outcome band",
          "Verdict",
        ]}
        rows={[
          ["LogicMojo", "Mid-tier (verify current)", "Typically applicable", "EMI available", "Fee + GST + ~₹3–8K API/cloud credits", "~6–7 months", "Verify in writing", "None claimed", "₹6–24 LPA depending on prior experience", "Strong — lowest cost per unit of job-relevant capability"],
          ["Scaler", "₹3–4L", "Applicable", "EMI, often no-cost options", "₹3.4–4.5L all-in", "11–18 months", "Cooling-off period; verify", "None; ISA-style options historically varied", "₹8–30 LPA", "Good if you need the placement engine and can fund it"],
          ["upGrad", "₹1.5–3.5L", "Applicable", "EMI", "₹1.7–4L all-in", "8–18 months", "Program-specific", "Program-specific", "₹6–20 LPA", "Fair — you are paying substantially for the credential"],
          ["Great Learning", "₹1.5–3.5L", "Applicable", "EMI", "₹1.7–4L all-in", "6–12 months", "Program-specific", "Program-specific", "₹6–20 LPA", "Fair — similar credential logic, shorter duration"],
          ["Intellipaat", "₹80K–2.5L", "Applicable", "EMI", "₹0.9–2.9L all-in", "6–12 months", "Program-specific", "Program-specific", "₹5–18 LPA", "Reasonable mid-market option"],
          ["TalentSprint", "₹2.5–4.5L", "Applicable", "EMI", "₹2.9–5.2L all-in", "8–12 months", "Program-specific", "Program-specific", "₹8–30 LPA (senior profiles)", "Justified only if the IIT/IISc brand does specific work for you"],
          ["Simplilearn", "₹1.5–2.5L", "Applicable", "EMI", "₹1.7–2.9L all-in", "~11 months", "Program-specific", "Program-specific", "₹5–16 LPA", "Acceptable where the credential is HR-recognised internally"],
          ["DeepLearning.AI + Coursera", "Free–₹4K/month", "Applicable on subscription", "N/A", "₹0–40K + your own cloud costs", "4–12 months, self-paced", "Coursera policy", "None", "Highly variable — depends entirely on self-built evidence", "Best value if you supply the discipline"],
          ["AlmaBetter / Masai", "₹0 upfront", "On ISA payments", "Deferred / ISA", "Often ₹2.5–4L+ repaid over time", "6–11 months full-time", "Contractual", "ISA obligations, sometimes multi-year", "₹4–12 LPA", "Access-enabling, but total repayment can exceed a paid program"],
          ["PW Skills / GUVI", "₹5K–35K", "Applicable", "Sometimes", "Under ₹40K", "3–8 months", "Short", "None", "₹3–9 LPA typically", "Excellent as a first step, insufficient alone for Tier 2"],
        ]}
        dense
      />
      <P>
        Four hidden costs learners routinely forget. <B>GST</B> on top of the headline fee.{" "}
        <B>EMI interest</B> on any plan that is not genuinely no-cost — a 12-month non-zero-cost EMI
        can add several thousand rupees. <B>Cloud and API credits</B> for real projects: ₹2,000–₹10,000
        across a program is realistic once you start deploying and running evaluations. And the big
        one, <B>opportunity cost of duration</B> — an 18-month program versus a 6-month one, when
        both target the same job title, costs you a year of AI-role salary and a year of AI-role
        experience. Duration is not thoroughness; sometimes it is just pacing.
      </P>

      <TableCard
        caption="Table 6 — Format, accessibility and fit for Indian working professionals"
        head={[
          "Course",
          "Live vs recorded",
          "IST timing",
          "Weekend option",
          "Weekly hours",
          "Catch-up",
          "Doubt SLA",
          "Cohort size",
          "Language",
          "Works with a full-time job?",
        ]}
        rows={[
          ["LogicMojo", "Live + recordings", "IST evening/weekend batches", "Yes", "10–15", "Recordings + batch repeat (confirm)", "Same/next-day (confirm)", "Small-to-moderate", "English (Hinglish delivery common)", "Yes"],
          ["Scaler", "Live cohort", "IST evening", "Partial", "15–25", "Cohort pause/switch policies", "Structured TA support", "Moderate", "English", "Demanding but possible"],
          ["upGrad", "Live + recorded", "IST evening/weekend", "Yes", "10–15", "Recordings, deferral options", "Ticket-based", "Large", "English", "Yes"],
          ["Great Learning", "Weekend live + mentored", "IST weekend", "Yes", "8–12", "Recordings, mentor sessions", "Mentor-mediated", "Moderate", "English", "Yes"],
          ["Intellipaat", "Live + self-paced", "IST evening/weekend", "Yes", "8–14", "Lifetime access claimed (verify)", "24/7 support claimed", "Moderate-to-large", "English", "Yes"],
          ["TalentSprint", "Weekend live, hybrid", "IST weekend + campus visits", "Yes", "8–12", "Recordings", "Mentor-mediated", "Moderate", "English", "Yes — designed for it"],
          ["Simplilearn", "Live + self-paced", "IST + global batches", "Yes", "8–14", "Recordings, batch switch", "Ticket-based", "Large", "English", "Yes"],
          ["DeepLearning.AI", "Fully self-paced", "Any", "Any", "You decide", "Unlimited", "Forums only", "N/A", "English + subtitles", "Yes, if self-disciplined"],
          ["AlmaBetter / Masai", "Full-time intensive", "IST daytime", "No", "40–50", "Limited", "Instructor + peer", "Moderate", "English", "No — requires full-time commitment"],
          ["PW Skills / GUVI", "Recorded + some live", "IST", "Yes", "6–10", "Recordings", "Community/ticket", "Large", "GUVI offers vernacular incl. Hindi, Tamil, Telugu", "Yes"],
        ]}
        dense
      />

      <TableCard
        caption="Table 7 — Best course by target role"
        head={["Target role", "Primary recommendation", "Strong alternative", "Budget option", "Why"]}
        rows={[
          ["GenAI / LLM Engineer", "LogicMojo", "Scaler (AI track) + self-study on agents", "DeepLearning.AI short-course stack + own builds", "The role is defined by RAG, agents, evaluation and deployment — depth on those rows is the whole job"],
          ["AI Engineer (applied)", "LogicMojo", "Intellipaat advanced GenAI track", "GUVI + self-directed deployment work", "Breadth across LLM engineering plus production concerns matters more than ML theory"],
          ["AI Agent Developer", "LogicMojo", "Self-study on LangGraph/CrewAI + open-source contribution", "Free framework docs + one deployed multi-agent system", "Almost no program teaches multi-agent and MCP to build level; the differentiator is what you ship"],
          ["ML Engineer", "Scaler", "upGrad (IIIT-B)", "DeepLearning.AI ML specialisation + MLOps practice", "Classical ML depth plus pipelines and monitoring outweighs GenAI breadth here"],
          ["Data Scientist", "upGrad or Great Learning", "Scaler DS track", "DeepLearning.AI + Kaggle with deployed work", "Statistics, experimentation and stakeholder communication dominate the JD"],
          ["MLOps Engineer", "LogicMojo (deployment depth) + a cloud certification", "Scaler", "AWS/GCP certification path + homelab projects", "This role is DevOps with ML on top; vendor certifications carry real weight"],
          ["AI Product Manager", "upGrad or Great Learning (credential + structure)", "TalentSprint executive programs", "DeepLearning.AI \"AI for Everyone\" + one built prototype", "You need evaluation literacy and scoping ability, not production coding"],
          ["AI Business Analyst", "Great Learning", "Intellipaat", "GUVI / PW Skills", "Domain plus AI literacy; heavy engineering content is wasted spend"],
          ["AI Solutions Consultant", "TalentSprint or Great Learning", "upGrad", "Vendor certifications (Azure AI, GCP ML)", "Client-facing credibility is credential- and cloud-vendor-weighted"],
          ["AI-in-BFSI specialist", "LogicMojo + a BFSI-domain project", "upGrad (IIIT-B) with finance-domain capstone", "Self-built compliance-aware RAG on public regulatory documents", "The scarce combination is AI capability plus regulatory and evaluation awareness"],
          [<B>Research / Applied Scientist</B>, <B>None of these — be honest with yourself</B>, "A master's or PhD, or a research assistantship", "Reproduce papers publicly; contribute to open-source research code", "No short course on this list is a credible path to Tier 3; anyone selling you one is selling you something else"],
        ]}
        dense
      />
    </Section>
  );
}