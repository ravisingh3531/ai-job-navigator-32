import { B, Callout, H3, H4, P, Section, TableCard, UL } from "./ui";

const layers: Array<{ title: string; body: string; interview: string }> = [
  {
    title: "Layer 0 — Programming and data foundations",
    body: "Python fluency — not syntax familiarity, but the ability to debug, structure a codebase, consume and design APIs, and handle async work. Plus Git and GitHub as a daily habit, SQL, comfort with JSON and unstructured text, and enough Linux and command line to operate a server. This layer is invisible in course marketing and decisive in interviews: every applied AI role is a software engineering role first.",
    interview: "You will be asked to write or read code live, usually messy real-world code, not LeetCode.",
  },
  {
    title: "Layer 1 — ML fundamentals (enough, not exhaustive)",
    body: "Supervised vs unsupervised learning, train/validation/test discipline, overfitting and regularisation, evaluation metrics (precision, recall, F1, ROC-AUC), basic feature engineering, and — most usefully — knowing when classical ML is the right answer instead of an LLM. A gradient-boosted tree still beats a language model on tabular churn prediction, and saying so in an interview signals judgement.",
    interview: "Expect conceptual questions and metric reasoning for applied roles, not derivations.",
  },
  {
    title: "Layer 2 — How LLMs actually work",
    body: "Tokenisation, embeddings (numerical representations of meaning), the transformer and attention at an intuitive-to-practical level, context windows and what happens when you exceed them, temperature and sampling, inference cost drivers, and why hallucination is a structural property rather than a bug. You do not need to derive attention; you need to reason about behaviour.",
    interview: "\"Explain what an embedding is to a product manager\" is a real and common question.",
  },
  {
    title: "Layer 3 — Applied LLM engineering",
    body: "Working with OpenAI, Anthropic and Google APIs and with open-source models; structured outputs and schema validation; function calling; prompt engineering beyond the basics (few-shot, chain-of-thought, prompt system design, versioning); caching; and active management of cost and latency. This is the daily work of most GenAI engineering roles in India.",
    interview: "You'll be asked how you would cut cost or p95 latency in a live system without losing quality.",
  },
  {
    title: "Layer 4 — RAG (Retrieval-Augmented Generation)",
    body: "Grounding a model in your own documents. Chunking strategies, embedding model selection, vector databases (ChromaDB, Pinecone, Weaviate, pgvector), semantic vs hybrid search, re-ranking, query rewriting, citation and grounding, and RAG-specific evaluation. This is the single most-requested competency in 2026 Indian GenAI job descriptions — and the one most courses teach only to demo depth.",
    interview: "Expect a system-design question: build document Q&A over 10 million documents.",
  },
  {
    title: "Layer 5 — Agents and Agentic AI",
    body: "Tool use, ReAct and planning patterns, short- and long-term memory, multi-agent orchestration and supervisor architectures, frameworks (LangGraph, CrewAI, AutoGen, OpenAI Agents SDK), MCP (Model Context Protocol — an emerging standard for connecting models to tools and data), and the unglamorous parts: loop detection, retries, cost ceilings and failure handling.",
    interview: "Fastest-growing question area in Indian JDs, and the easiest place to differentiate today.",
  },
  {
    title: "Layer 6 — Fine-tuning and model adaptation",
    body: "When to fine-tune vs use RAG vs simply improve the prompt — the decision framework matters far more than the technique. Then dataset preparation, supervised fine-tuning (SFT), LoRA and QLoRA (parameter-efficient methods that train a small adapter instead of the whole model), preference-tuning concepts, the Hugging Face ecosystem, and evaluating a fine-tuned model honestly against its base.",
    interview: "The decision framework is asked far more often than the implementation details.",
  },
  {
    title: "Layer 7 — Deployment, MLOps and production",
    body: "Containerisation with Docker, API serving with FastAPI, cloud deployment basics on AWS/GCP/Azure, CI/CD, monitoring and observability, prompt and model versioning, cost tracking, scaling and concurrency, and security including PII handling — which matters acutely for Indian BFSI and healthcare workloads.",
    interview: "The fastest way to be filtered out is having only ever run things in a notebook.",
  },
  {
    title: "Layer 8 — Evaluation, guardrails and responsible AI",
    body: "Automated evaluation pipelines, LLM-as-judge with its known biases, golden datasets, regression testing prompts, hallucination detection, prompt injection and jailbreak defence, bias and fairness testing, and compliance awareness (DPDP-era data handling, sector rules in BFSI and healthcare). Evaluation is what separates a demo from a product.",
    interview: "Increasingly a mandatory round at enterprises and GCCs — \"how do you know it works?\"",
  },
  {
    title: "Layer 9 — Portfolio, communication and interview craft",
    body: "Documented projects with a real README, architecture diagrams, a written account of what you tried and rejected, the ability to whiteboard an AI system under questioning, and a clean behavioural framing of your career switch. This layer is not soft skills padding — it is the conversion layer between capability and offer.",
    interview: "This is where technically capable candidates most often lose offers.",
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="🧭 Section 3 — The specification"
      title="What an AI Course Must Teach You in 2026 (Mapped Directly to Job Descriptions)"
    >
      <P>
        Hold every course you consider against this specification. It is derived from what 2026
        Indian AI job descriptions demand, and it is what makes the rest of this page evaluable
        rather than merely opinionated. If a brochure cannot be mapped onto these layers, that is
        itself the finding.
      </P>

      <H3 id="stack">The 2026 AI Job-Readiness Stack</H3>
      <div className="space-y-6">
        {layers.map((l) => (
          <div key={l.title} className="rounded-lg border border-border bg-card p-5">
            <H4>{l.title}</H4>
            <p className="mt-2 text-[1rem] leading-[1.7] text-foreground/85">{l.body}</p>
            <p className="mt-3 text-sm font-medium text-primary">
              Interview reality: {l.interview}
            </p>
          </div>
        ))}
      </div>

      <H3 id="coverage-test">The Coverage Test — Use This on Any Course, Including Ones Not on This List</H3>
      <P>
        Take this to any counsellor call, for any provider, including LogicMojo. The answers are
        more informative than any brochure. A good program answers all twelve in specifics; a weak
        one deflects on at least half.
      </P>
      <TableCard
        caption="Table — The 12-question counsellor script"
        head={["Question to ask the counsellor", "Good answer sounds like", "Warning sign"]}
        rows={[
          ["Which layers of the 2026 stack does the syllabus cover to a build level?", "Specifics, with project names per layer", "Vague \"we cover everything\""],
          ["When was the curriculum last updated, and what changed?", "A dated answer with named additions", "\"It's continuously updated\" with no specifics"],
          ["Can I see a past learner's capstone repository?", "Yes — here are three public repos", "\"Projects are proprietary\""],
          ["How many projects are deployed vs notebook-only?", "A number, with links", "Deflection or reframing"],
          ["What exactly does \"placement assistance\" include?", "A described, step-by-step process", "A brochure line repeated back"],
          ["Is placement support conditional? On what?", "Written criteria shared before payment", "\"We'll discuss that after enrolment\""],
          ["What is the refund policy and lock-in?", "Written, specific, with a window in days", "Verbal assurance only"],
          ["Who teaches — and are they practitioners?", "Named instructors with verifiable profiles", "\"Industry experts from top companies\""],
          ["What is the class size and doubt-resolution SLA?", "Concrete numbers and turnaround time", "Question goes unanswered"],
          ["What roles did last quarter's cohort actually get?", "Designations and company types", "CTC averages only"],
          ["Do you cover agents and MCP?", "Yes, with framework names and a project", "\"GenAI is covered\""],
          ["What happens if I fall behind?", "A described catch-up cohort or repeat policy", "\"Recordings are available\""],
        ]}
        dense
      />

      <H3 id="oversold">Skills That Courses Oversell (and what they're actually worth in 2026)</H3>
      <UL>
        <li>
          <B>Prompt engineering as a career.</B> Largely absorbed into engineering, product and
          content roles. Standalone "prompt engineer" postings in India have thinned considerably.
          Learn it as a skill; do not plan a career on it.
        </li>
        <li>
          <B>Classical ML depth for applied GenAI roles.</B> Genuinely useful — but six months of
          scikit-learn is a poor allocation of your one available year if the target on your offer
          letter says GenAI Engineer.
        </li>
        <li>
          <B>Deep learning theory from first principles.</B> Valuable for Tier 3, largely
          unnecessary for Tier 2. Backpropagation by hand has never once appeared in an applied
          GenAI interview I have seen reported.
        </li>
        <li>
          <B>Building a transformer from scratch.</B> Excellent for understanding and worth a
          weekend. Rarely asked in applied interviews, and a poor use of a graded capstone slot.
        </li>
        <li>
          <B>Tableau / Power BI inside an "AI" course.</B> A reliable signal that you are looking at
          a repackaged data-analytics program with a GenAI cover.
        </li>
        <li>
          <B>Blockchain, IoT or "emerging tech" modules.</B> Filler. It tells you the curriculum is
          assembled for perceived breadth rather than for a job description.
        </li>
      </UL>
      <Callout>
        <p>
          A useful heuristic: for every module in a syllabus, ask "which line of which job
          description does this satisfy?" If you cannot answer for more than a third of the
          modules, you are paying for duration, not for employability.
        </p>
      </Callout>
    </Section>
  );
}