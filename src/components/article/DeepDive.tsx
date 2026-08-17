import { B, Callout, H3, NoteCard, P, Section, StatCard, TableCard, UL } from "./ui";
import { Reveal } from "./Reveal";

const phases: Array<{ n: string; title: string; body: string; why?: string }> = [
  {
    n: "01",
    title: "Engineering Foundations for AI",
    body: "Python for AI engineering (APIs, async, error handling, environment management), Git/GitHub workflow, SQL and data handling, JSON and unstructured data, Linux basics, working with cloud consoles.",
    why: "Every AI interview includes code. Learners with gaps here fail at round one regardless of how much AI theory they know.",
  },
  {
    n: "02",
    title: "ML Fundamentals, Scoped Deliberately",
    body: "Supervised and unsupervised learning, evaluation metrics, overfitting and regularisation, feature engineering, model selection — and, critically, when classical ML beats an LLM.",
    why: "Spending six months on scikit-learn is the most common way a \u201cjob-focused\u201d AI course wastes a learner's time.",
  },
  {
    n: "03",
    title: "How LLMs Actually Work",
    body: "Tokenisation, embeddings, transformer architecture and attention (intuition \u2192 visual \u2192 code), context windows, sampling parameters, inference mechanics, cost and latency drivers, why hallucination happens.",
    why: "\u201cExplain how an LLM works\u201d is asked in nearly every GenAI interview, and a surface answer is immediately visible to the panel.",
  },
  {
    n: "04",
    title: "Applied LLM Engineering",
    body: "OpenAI, Anthropic and Google Gemini APIs; open-source inference via Hugging Face and Ollama; structured outputs and schema enforcement; function calling; advanced prompting (few-shot, chain-of-thought, system prompt design, prompt evaluation and versioning); caching, batching, cost control and rate-limit handling.",
  },
  {
    n: "05",
    title: "Embeddings, Vector Databases and Semantic Search",
    body: "Embedding models and their trade-offs, ChromaDB / Pinecone / Weaviate / pgvector, indexing strategies, similarity metrics, metadata filtering, hybrid search. Hands-on: a working semantic search system.",
  },
  {
    n: "06",
    title: "RAG: Basic \u2192 Advanced \u2192 Production",
    body: "Chunking strategies and why they matter, retrieval quality, hybrid search, re-ranking, query rewriting and decomposition, multi-source retrieval, citation and grounding, RAG evaluation harnesses, latency and cost optimisation, failure analysis.",
    why: "This is the most-requested competency in 2026 Indian GenAI job descriptions, and the area where course graduates most often have shallow knowledge.",
  },
  {
    n: "07",
    title: "Fine-Tuning and Model Adaptation",
    body: "The decision framework (prompt vs RAG vs fine-tune vs train), dataset construction and curation, SFT, LoRA and QLoRA, preference-tuning concepts, evaluation against a base model, deployment of a fine-tuned model.",
    why: "Interviewers ask \u201cwhen would you fine-tune?\u201d far more often than \u201cimplement LoRA.\u201d The framework matters more than the technique.",
  },
  {
    n: "08",
    title: "AI Agents and Agentic Systems",
    body: "Agent fundamentals (planning, memory, tool use), ReAct and related patterns, function-calling agents, reliability and loop control, error recovery; then multi-agent orchestration, supervisor and delegation architectures, and collaborative workflows.",
  },
  {
    n: "09",
    title: "Agent Frameworks, Multi-Framework",
    body: "LangChain and LangGraph, CrewAI, AutoGen, OpenAI Agents SDK \u2014 with an explicit comparison of when to use which.",
    why: "JDs name different frameworks. Single-framework learners get filtered out by keyword screening and struggle to reason about alternatives in interviews.",
  },
  {
    n: "10",
    title: "MCP and Tool/Data Integration",
    body: "What MCP is and the problem it solves, building and consuming MCP servers, connecting models to internal tools and data sources, integration patterns and security considerations.",
    why: "Rare in Indian course curricula as of 2026 and increasingly visible in enterprise JDs \u2014 a genuine differentiation opportunity for a candidate.",
  },
  {
    n: "11",
    title: "Evaluation, Guardrails and Responsible AI",
    body: "Building evaluation pipelines, golden datasets, LLM-as-judge and its limitations, regression testing for prompts, hallucination detection, prompt-injection and jailbreak defence, PII handling, bias and fairness, and compliance context relevant to Indian BFSI and healthcare deployments.",
  },
  {
    n: "12",
    title: "Deployment, Serving and MLOps",
    body: "FastAPI serving, containerisation with Docker, cloud deployment, environment and secret management, CI/CD basics, monitoring and observability, cost tracking, versioning, scaling patterns, incident handling.",
    why: "\u201cHave you deployed anything?\u201d removes a large share of applicants before the technical round even begins.",
  },
  {
    n: "13",
    title: "Multi-Modal and Open-Source Models",
    body: "Vision-language models, audio, code generation; the open-source landscape (Llama, Mistral, Qwen, Gemma, DeepSeek), local inference, and the cost/privacy/performance decision between open-source and proprietary.",
  },
  {
    n: "14",
    title: "Capstone, Portfolio and Interview Preparation",
    body: "Learner-designed capstone combining retrieval, agents and deployment; documentation and architecture write-up; GitHub and README standards; AI system-design practice; mock interviews; project-defence drills; resume and LinkedIn positioning; career-switch narrative construction.",
  },
];

const projects: Array<[string, string, string]> = [
  ["1", "First production-shaped LLM application (API \u2192 structured output \u2192 interface)", "\u201cWalk me through an LLM app you've built.\u201d"],
  ["2", "Prompt engineering and evaluation lab across multiple models", "\u201cHow do you know a prompt change made things better?\u201d"],
  ["3", "Semantic search engine (embeddings + vector DB + retrieval interface)", "\u201cExplain embeddings and when semantic search beats keyword search.\u201d"],
  ["4", "Document Q&A RAG system with citations", "\u201cDesign a RAG system for our internal knowledge base.\u201d"],
  ["5", "Advanced RAG with hybrid retrieval, re-ranking and an evaluation harness", "\u201cYour retrieval quality is poor. How do you debug it?\u201d"],
  ["6", "Fine-tuned domain model with base-model comparison", "\u201cWhen would you fine-tune instead of using RAG?\u201d"],
  ["7", "Tool-using AI agent", "\u201cHow do you stop an agent from looping or hallucinating tool calls?\u201d"],
  ["8", "Multi-agent workflow with supervisor orchestration", "\u201cHow would you decompose this task across agents?\u201d"],
  ["9", "Multi-modal application", "\u201cHave you worked with vision or audio models?\u201d"],
  ["10", "Evaluation and guardrails pipeline", "\u201cHow do you evaluate an LLM system in production?\u201d"],
  ["11", "Deployed, monitored, containerised GenAI service", "\u201cWhat happens to your system under load, and how do you know?\u201d"],
  ["12", "Capstone \u2014 learner-designed, combining retrieval + agents + deployment", "\u201cTell me about the most complex thing you've built.\u201d"],
];

const pricing: Array<[string, string, string, string]> = [
  ["\u20b90", "YouTube, free Coursera audits, vendor free tiers", "Real knowledge, zero structure, zero evidence, very high dropout", "\u2014"],
  ["\u20b9500\u2013\u20b910K", "Udemy, individual Coursera courses, short workshops", "Structured content, follow-along projects, no mentorship or career support", "\u2014"],
  ["\u20b910K\u2013\u20b940K", "PW Skills, GUVI, budget bootcamps", "Structured curriculum, some live teaching, entry-level projects, limited depth", "\u2014"],
  ["\u20b940K\u2013\u20b91.2L", "Focused, practitioner-led programs", "Full-stack depth, live mentorship, portfolio-grade projects, interview prep", "LogicMojo sits here"],
  ["\u20b91.2L\u2013\u20b93L", "upGrad, Great Learning, Simplilearn, Intellipaat premium", "Credential + structure + career services; GenAI depth typically moderate", "\u2014"],
  ["\u20b93L+", "Scaler, IIT/IISc executive programs", "Premium network, strong placement infrastructure, long duration, broad scope", "\u2014"],
];

const limitations: Array<{ t: string; d: string }> = [
  {
    t: "Not the cheapest, and not free",
    d: "GUVI, PW Skills and Udemy cost far less. DeepLearning.AI and Google's learning paths cost nothing. If your binding constraint is budget rather than outcome speed, those are legitimate choices and this page will not pretend otherwise.",
  },
  {
    t: "No university credential",
    d: "upGrad (IIIT-B), Great Learning (Great Lakes / UT Austin), Simplilearn (Purdue) and TalentSprint (IIT/IISc) attach institutional names. If your employer's promotion process, an HR gate or a visa application requires an accredited credential, those programs serve a need LogicMojo does not.",
  },
  {
    t: "Smaller brand and smaller alumni network",
    d: "Scaler, upGrad and Great Learning have larger name recognition and much larger alumni bases. Network effects are real. If you are optimising for peer network and referral surface area, that advantage genuinely sits elsewhere.",
  },
  {
    t: "Smaller placement network than the premium bootcamps",
    d: "The model emphasises capability and interview readiness over a large hiring-partner funnel. For a fresher who wants a structured placement drive with hundreds of partner companies, Scaler's infrastructure is stronger. Said plainly, without hedging.",
  },
  {
    t: "No job guarantee \u2014 by design",
    d: "Guarantee contracts either constrain the learner with failable conditions (attendance floors, application quotas, assessment gates) or push the provider toward filling seats with any role that satisfies the contract. Declining to offer one is defensible, but it is still a real trade-off if you want contractual downside protection.",
  },
  {
    t: "Cohort-based, not fully self-paced",
    d: "Learners who need to disappear for three weeks and return will find the structure demanding. Recordings and catch-up support exist, but the format assumes participation.",
  },
  {
    t: "GenAI/AI-focused, not a full CS bootcamp",
    d: "There is no extended DSA or system-design interview track of the kind Scaler provides. A fresher targeting a product-company SDE-style interview loop needs that preparation separately.",
  },
  {
    t: "Not a research pathway",
    d: "For Tier 3 applied-science or research roles \u2014 the ones asking for publications and first-principles modelling \u2014 this course is not the route. Postgraduate study is.",
  },
  {
    t: "Outcomes depend on the learner",
    d: "The most honest limitation of all: completion does not equal employment. Learners who build, deploy, document, apply consistently and iterate on rejection get hired. Learners who watch sessions and submit templated projects generally do not \u2014 at any price point, at any institution.",
  },
];

export function DeepDive() {
  return (
    <Section
      id="deep-dive"
      eyebrow="Editor's deep dive \u00b7 Section 6"
      title="Why LogicMojo Is My #1 Pick for Getting an AI Job in 2026 \u2014 And Where It Isn't the Right Choice"
    >
      <Callout tone="ink" title="The lens, stated before the argument">
        <p>
          Ranking a course #1 for <B>employment</B> rather than for learning means asking a narrower
          question: does what this course produces resemble what a hiring manager screens for? On
          that specific question \u2014 job-description alignment, portfolio defensibility, currency of
          the stack, and cost relative to outcome \u2014 LogicMojo scored highest of the ten programs
          assessed here.
        </p>
        <p>
          It did not score highest on brand recognition, credential prestige, or placement network
          size. Scaler beats it on placement infrastructure. upGrad and Great Learning beat it on
          institutional credential. DeepLearning.AI beats it on cost and pure teaching quality. Those
          are not concessions buried at the end \u2014 they are the reason the ranking is worth reading
          at all, and section 6 closes with nine limitations written to be used against the
          recommendation.
        </p>
      </Callout>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard value="91/100" label="Job-outcome score under the six-criteria framework disclosed above" />
        <StatCard value="14" label="Curriculum phases, reverse-engineered from 2026 job descriptions" delay={80} />
        <StatCard value="8\u201312" label="Portfolio projects, ending in a learner-designed deployed capstone" delay={160} />
      </div>

      <H3 id="dd-curriculum">1) The curriculum was built backwards from job descriptions</H3>
      <P>
        Most AI programs start from an academic syllabus \u2014 statistics, classical ML, deep learning \u2014
        and bolt a GenAI module onto the end. This one inverts the order: start from what 2026 AI job
        descriptions demand, work backwards to the foundations required to build those things, and
        cut everything that does not survive that test. The result is a fourteen-phase progression
        where each block has a stated reason for existing.
      </P>

      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 70}>
            <div className="surface-card h-full p-6">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {p.n}
                </span>
                <h4 className="font-display text-lg leading-tight font-semibold text-foreground">
                  Phase {Number(p.n)} \u2014 {p.title}
                </h4>
              </div>
              <p className="mt-3 text-[0.97rem] leading-[1.7] text-foreground/80">{p.body}</p>
              {p.why ? (
                <p className="mt-3 rounded-xl border border-primary/20 bg-primary-soft px-4 py-3 text-[0.9rem] leading-[1.6] text-foreground/85">
                  <span className="font-semibold text-primary">Job relevance: </span>
                  {p.why}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <H3 id="dd-portfolio">2) The portfolio is the product</H3>
      <P>
        The actual deliverable of this program is not knowledge and not a certificate \u2014 it is a body
        of evidence. Knowledge is unverifiable in a 45-minute call; a certificate is a claim about
        attendance. A deployed system with a README, an architecture note and an evaluation harness
        is neither. It is something a hiring manager can open, poke and interrogate, which is exactly
        what screening in 2026 has collapsed into. So the projects are sequenced not by topic
        difficulty but by the interview question each one lets you answer confidently.
      </P>

      <TableCard
        caption="Projects mapped to the interview question each one answers"
        head={["#", "Project", "Interview question it answers"]}
        dense
        rows={projects.map(([n, p, q]) => [n, p, <em key={q}>{q}</em>])}
      />

      <Callout title="On individualisation">
        <p>
          Capstones are learner-designed rather than templated. This matters more than it sounds:
          hiring managers who screen bootcamp applicants see the same three cohort projects dozens of
          times a quarter and discount them on sight. A project rooted in your own domain \u2014
          insurance claims, logistics documents, clinical notes, campus admin \u2014 is harder to
          dismiss and far easier for you to defend under questioning.
        </p>
      </Callout>

      <H3 id="dd-interview">3) The interview-readiness layer</H3>
      <P>
        The gap between \u201cfinished the course\u201d and \u201ccleared the interview\u201d is where most capable
        learners lose. This layer is deliberately mechanical rather than motivational.
      </P>
      <UL>
        <li>
          <B>AI system-design practice.</B> Whiteboard-style problems \u2014 design a RAG pipeline over
          40,000 policy PDFs, choose chunking and re-ranking, justify cost and latency budgets.
        </li>
        <li>
          <B>Project-defence sessions.</B> Learners are challenged on their own design decisions:
          why that chunk size, why that vector store, what breaks at 10\u00d7 traffic. This is the drill
          that most closely resembles a real technical round.
        </li>
        <li>
          <B>Mock interviews with practitioners</B>, followed by written feedback on specific
          answers rather than a score.
        </li>
        <li>
          <B>Resume rewriting against AI job descriptions</B> \u2014 targeting the competencies an ATS
          and a human both look for, without keyword-stuffing that collapses under questioning.
        </li>
        <li>
          <B>LinkedIn positioning and a GitHub audit</B> \u2014 tutorial forks removed, READMEs written,
          pinned repositories chosen to tell one coherent story.
        </li>
        <li>
          <B>Career-switch narrative work</B> for people moving from testing, support, teaching or
          non-tech backgrounds, where the first 90 seconds of the call decides the rest of it.
        </li>
      </UL>
      <P>
        This layer is the difference between a capable candidate and a hired one. Capability is
        necessary; the ability to demonstrate it under time pressure, to a stranger, about your own
        code, is what actually converts.
      </P>

      <H3 id="dd-currency">4) Currency \u2014 why an AI curriculum ages faster than any other</H3>
      <P>
        An AI curriculum written in 2023 teaches deprecated framework patterns, models that have
        since been superseded twice, and an agent landscape that essentially did not exist. That is
        not negligence; it is the field's clock speed. It does mean the single most important
        question to ask any provider is not \u201cwhat do you teach?\u201d but \u201cwhen did you last rewrite
        it, and what did you cut?\u201d LogicMojo's position is that content is maintained against the
        current stack, with agent frameworks and MCP covered while a majority of competing Indian
        programs have not yet added them.
      </P>
      <Callout tone="warn" title="The honest caveat">
        <p>
          No course is fully current in a field moving this fast \u2014 including this one. Any syllabus
          is a snapshot with a shelf life measured in months. The durable skill is tracking the field
          yourself: model provider changelogs and release notes, framework repositories and their
          migration guides, a small number of practitioner newsletters you actually read, and the
          documentation of whatever you are building on. Build that habit during the course, not
          after it.
        </p>
      </Callout>

      <H3 id="dd-pricing">5) Pricing and value positioning</H3>
      <P>
        Indian AI education splits into six reasonably clean price bands. Each buys a different
        thing, and the mistake most learners make is paying for a band whose product they do not
        actually need.
      </P>
      <TableCard
        caption="Market price tiers \u2014 what each band actually buys (indicative; verify current fees)"
        head={["Price tier", "What's typically offered", "What the learner actually gets", "Where LogicMojo sits"]}
        rows={pricing.map(([a, b, c, d]) => [
          a,
          b,
          c,
          d === "\u2014" ? <span key={a} className="text-muted-foreground">\u2014</span> : <B key={a}>{d}</B>,
        ])}
      />
      <P>
        For a learner whose goal is a Tier 2 applied AI role, the \u20b940K\u2013\u20b91.2L band is the efficient
        frontier. It is the cheapest point at which you still get live teaching, real mentorship and
        portfolio-grade projects \u2014 and the most expensive point before you start paying a premium
        for a credential that 2026 hiring managers do not weight heavily. Think in terms of{" "}
        <B>cost per unit of hiring evidence</B>: a \u20b93L program that produces four notebook projects
        is worse value on that metric than a \u20b980K program that produces ten deployed systems, even
        though it looks more prestigious on paper.
      </P>
      <P>
        This argument does not hold universally, and it is worth being precise about when it fails.
        If your goal is a credential your HR system recognises, a peer network you will draw on for a
        decade, or a structured placement pipeline into premium product companies, the higher bands
        are buying something real that the \u20b940K\u2013\u20b91.2L band cannot supply. Pay for the thing you
        actually need.
      </P>

      <H3 id="dd-limits">6) Honest limitations \u2014 read this before enrolling</H3>
      <P>
        Nine reasons this recommendation might be wrong for you. None of them are disguised
        advantages.
      </P>
      <div className="grid gap-4 md:grid-cols-2">
        {limitations.map((l, i) => (
          <NoteCard key={l.t} index={String(i + 1)} title={l.t} delay={(i % 2) * 70}>
            {l.d}
          </NoteCard>
        ))}
      </div>

      <Reveal>
        <div
          className="mt-4 flex flex-col items-start gap-4 rounded-2xl p-7 text-ink-foreground sm:flex-row sm:items-center sm:justify-between"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
        >
          <div>
            <p className="font-display text-xl font-semibold">Want to check the claims yourself?</p>
            <p className="mt-1 text-sm opacity-85">
              Read the module-level syllabus, project list and current batch schedule before you talk
              to anyone.
            </p>
          </div>
          <a
            href="#rankings"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary-glow px-5 py-3 font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Explore the full AI &amp; GenAI curriculum, projects and batch schedule \u2192
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
