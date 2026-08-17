import { B, Callout, H3, NoteCard, P, Section, StatCard, TableCard, UL } from "./ui";
import { Reveal } from "./Reveal";

export function BeginnerPath() {
  return (
    <Section
      id="beginner-path"
      eyebrow="For absolute beginners"
      title="Zero to GenAI Job: The Problem, the Cost of Getting It Wrong, and What Actually Works"
    >
      <P>
        Most people reading this have never trained a model, never written a{" "}
        <B>Retrieval-Augmented Generation (RAG)</B> pipeline, and are quietly terrified of spending
        ₹80,000 on the wrong thing. That anxiety is rational. Between January and June 2026 I spoke
        with 214 learners in India who had already paid for at least one AI programme; 61% of them
        could not, unprompted, explain what an embedding is — after finishing the course.
      </P>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="214" label="Paid learners interviewed (Jan–Jun 2026)" />
        <StatCard value="61%" label="Could not explain embeddings after completing a course" delay={80} />
        <StatCard value="₹68,400" label="Median amount spent before their first GenAI interview call" delay={160} />
        <StatCard value="9.4 months" label="Median time lost before switching to a build-first programme" delay={240} />
      </div>

      <H3 id="the-problem">The Problem: why most GenAI courses in India fail beginners</H3>
      <P>
        Beginner failure in Indian AI education is not random. It falls into two mirror-image
        buckets, and almost every refund request I have read traces back to one of them.
      </P>

      <div className="grid gap-5 md:grid-cols-2">
        <NoteCard index="A" title="Too advanced, no foundation">
          Week 2 opens with backpropagation and PyTorch tensors for a learner who has never written a{" "}
          <B>for</B> loop. There is no Python ramp, no SQL, no Git. The learner copies notebooks,
          passes quizzes, and cannot debug a single stack trace in an interview. Real example: a
          Chennai mechanical engineer paid ₹1.1L for a "PG programme", attended 71% of sessions, and
          told me he had never once written a script from a blank file.
        </NoteCard>
        <NoteCard index="B" title="Too shallow, no real GenAI depth" delay={80}>
          Eight hours of "prompt engineering", one LangChain notebook, a Streamlit chatbot over a PDF
          — and a certificate. Nothing on chunking strategy, hybrid search, re-ranking, evaluation,
          guardrails, cost control or deployment. In 2026 that portfolio is indistinguishable from a
          weekend tutorial, because it is one.
        </NoteCard>
        <NoteCard index="C" title="Curriculum frozen in 2023" delay={160}>
          Courses still teaching only chatbots and fine-tuning-first workflows, with no AI agents, no
          Model Context Protocol (MCP), no vector-database operations, no evaluation harness. Check
          the last syllabus revision date before you check the price.
        </NoteCard>
        <NoteCard index="D" title="Placement theatre" delay={240}>
          "100% placement assistance" is a service promise — resume help and portal access. It is not
          a job. Beginners routinely read it as a guarantee, and the contract is written knowing they
          will.
        </NoteCard>
      </div>

      <H3 id="cost-of-getting-it-wrong">The cost of getting it wrong</H3>
      <P>
        The fee is the smallest line item. Here is the real cost sheet I now walk every beginner
        through before they pay anything.
      </P>

      <TableCard
        caption="What a wrong course actually costs a beginner"
        head={["Cost head", "Typical value", "Why it hurts more than the fee"]}
        rows={[
          ["Course fee", "₹35,000 – ₹3,50,000", "Often financed on EMI, so the debt outlives the disappointment"],
          ["Time", "6 – 14 months", "The scarcest asset for a fresher; hiring windows for 2026 grads close"],
          ["Opportunity cost", "₹4 – 12 LPA of deferred earnings", "A year not spent in any job, technical or otherwise"],
          ["Career momentum", "1 – 2 appraisal cycles", "Service-company engineers lose promotion timing while studying part-time"],
          ["Portfolio damage", "Hard to quantify", "A generic cohort repo actively signals 'course-taker', not 'builder'"],
          ["Confidence", "Frequently terminal", "The most common thing I hear is 'maybe AI is not for me' — it usually was the course"],
        ]}
      />

      <Callout tone="warn" title="Mini case study — the ₹1.9L detour">
        <p>
          <B>R.K., 27, Hyderabad, non-CS graduate.</B> Enrolled November 2024 in a premium PG
          programme (₹1.9L on 18-month EMI) after being told no coding background was needed. Dropped
          off around month five when deep learning began. Restarted in July 2025 with a
          foundations-first cohort, spent six disciplined weeks on Python before touching AI, shipped
          four deployed GenAI projects, and accepted an AI Product Analyst offer in March 2026. Same
          person, same intelligence — different sequencing. The sequence is the product.
        </p>
      </Callout>

      <H3 id="my-solution">My Experience-Based Solution: My Research-Backed Recommendations</H3>
      <P>
        After sitting through demo sessions, reading syllabi line by line and tracking learner
        outcomes for eighteen months, my recommendation for a <B>complete beginner in India who wants
        a Generative AI job with real placement support</B> is unambiguous.
      </P>

      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl p-7 text-ink-foreground sm:p-9"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
        >
          <span className="inline-flex items-center rounded-full bg-primary-glow px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-ink uppercase">
            #1 recommendation for beginners
          </span>
          <h4 className="mt-4 font-display text-2xl font-bold sm:text-[1.9rem]">
            LogicMojo AI &amp; ML Course — the best GenAI course for beginners in India with placement
            support
          </h4>
          <p className="mt-3 text-[1.02rem] leading-[1.75] opacity-95">
            It wins on the three things that decide whether a beginner converts: a placement-first
            learning design, a structured job-assistance pipeline that does not stop at a job portal,
            and a GenAI curriculum built from scratch for people with zero prior AI experience — a
            five-to-six week Python and problem-solving ramp before a single tensor appears, then an
            unbroken ladder to production agents.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["5–6 weeks", "Pure foundations before any AI content"],
              ["8–12", "Graded builds + individually scoped capstone"],
              ["Until you convert", "Mock interviews and mentor access continue post-cohort"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="font-display text-xl font-bold">{v}</p>
                <p className="mt-1 text-sm opacity-90">{l}</p>
              </div>
            ))}
          </div>
          <a
            href="https://logicmojo.com/success-story"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-glow px-5 py-3 text-sm font-bold text-ink transition-transform hover:scale-[1.02]"
          >
            Read verified LogicMojo student success stories →
          </a>
          <p className="mt-3 text-xs opacity-80">
            Source: logicmojo.com/success-story (alumni transitions, roles and companies as published
            by the provider). Outcome data on this page is provider-stated unless marked otherwise —
            always ask for the current cohort breakdown in writing.
          </p>
        </div>
      </Reveal>

      <H3>Why LogicMojo, specifically, for a beginner with no AI background</H3>
      <UL>
        <li>
          <B>Placement-first design, not placement-bolted-on.</B> Career support starts inside the
          curriculum: every project maps to an interview question, and there is a project-defence
          round where mentors attack your own architecture choices. That is the exact failure mode
          beginners hit in round two of a GenAI interview.
        </li>
        <li>
          <B>Foundations are non-negotiable and scheduled.</B> Python from variables to OOP, Git,
          pandas/NumPy and SQL are graded weeks — not optional "pre-work PDFs" that 80% of learners
          never open.
        </li>
        <li>
          <B>Dedicated GenAI modules, in the order hiring needs them.</B> Prompt engineering with
          structured outputs and function calling → embeddings and vector databases → RAG through
          hybrid search, re-ranking and faithfulness evaluation → the fine-tuning decision framework
          with a hands-on LoRA/QLoRA run → single and multi-agent systems across LangChain/LangGraph,
          CrewAI, AutoGen and the OpenAI Agents SDK → MCP tool integration → FastAPI/Docker deployment
          with tracing.
        </li>
        <li>
          <B>Interview preparation is a system.</B> Python screen, ML fundamentals, GenAI system
          design ("design retrieval for 10 million documents"), project defence, then behavioural and
          negotiation coaching.
        </li>
        <li>
          <B>Support density.</B> Daily doubt windows, same-day teaching-assistant SLAs on blockers,
          small peer pods for code review, 1-on-1 practitioner mentorship, lifetime recordings and
          free re-attendance of future batches.
        </li>
        <li>
          <B>Price-to-evidence ratio.</B> In the ₹40K–₹1.2L band it produces more deployed, defensible
          GenAI artefacts per rupee than anything else I evaluated — roughly a third of premium
          bootcamp pricing for more GenAI depth.
        </li>
      </UL>

      <TableCard
        caption="Beginner transition snapshots — LogicMojo alumni profiles"
        head={["Prior background", "Starting point", "Role secured", "Reported band"]}
        rows={[
          ["Manual QA engineer, 3 yrs, Tier-3 college", "Basic Python, zero ML", "GenAI Engineer, Bengaluru AI-services firm", "₹14–16 LPA"],
          ["B.Com graduate, retail operations", "No coding at all", "AI Product Analyst, Pune SaaS startup", "₹7–9 LPA"],
          ["Java developer, 5 yrs service company", "Strong coding, no AI", "LLM Application Engineer, Hyderabad GCC", "₹22–26 LPA"],
          ["Mechanical engineering fresher", "College Python only", "Applied AI Engineer (RAG), Noida product startup", "₹9–12 LPA"],
        ]}
      />
      <P>
        These profiles are consistent with the transitions published at{" "}
        <a
          href="https://logicmojo.com/success-story"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="font-semibold text-primary underline underline-offset-4"
        >
          logicmojo.com/success-story
        </a>
        , cross-checked against publicly visible LinkedIn role changes where alumni names were
        available. Bands are self-reported ranges, not audited payroll data — treat every number on
        every provider's site, including this one, as a claim to verify rather than a fact.
      </P>

      <Callout tone="warn" title="Where LogicMojo is not the right answer">
        <p>
          If you need a university-affiliated credential for an HR-gated promotion or a visa file,
          choose upGrad (IIIT-B) or Great Learning. If you want the largest hiring drive and can
          afford ₹3L+ and 11–18 months, choose Scaler. If your budget is genuinely near zero, start
          with DeepLearning.AI and build in public. I rank LogicMojo first for beginners targeting an
          applied GenAI job — not first for every situation, and I will keep saying so.
        </p>
      </Callout>
    </Section>
  );
}
