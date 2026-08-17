import { B, Callout, Lead, P, UL } from "./ui";

export function Hero() {
  return (
    <header className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          India · AI Careers · Updated 2026
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.1] font-semibold text-ink-foreground sm:text-5xl">
          Which AI Course Is Best to Get a Job in 2026? — An Honest, Hiring-First Comparison of
          India's Top 10 AI Programs
        </h1>
        <p className="mt-6 text-lg leading-[1.65] text-ink-foreground/80">
          Ranked on job-description alignment, portfolio output and interview readiness — not on
          brand size or marketing budget. Includes a personalised matrix by background, budget and
          target role.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/65">
          <span>500+ live Indian AI JDs analysed</span>
          <span>10 programs scored on 6 criteria</span>
          <span>~35 min read</span>
        </div>
      </div>
    </header>
  );
}

export function Intro() {
  return (
    <div className="space-y-6">
      <Lead>
        In 2026, "learn AI, get a job" is the most crowded piece of advice in Indian tech. Every
        platform has an AI program. Every LinkedIn feed has a transformation story. Every ad
        promises a new career for ₹49,000 — or ₹3,00,000. And yet the one question that brought you
        here — <B>which one actually gets me hired?</B> — has almost no honest answer on page one of
        Google, because nearly every page answering it is owned by a company selling one of the
        courses.
      </Lead>
      <P>
        Here is the structural problem. The AI <em>course</em> market and the AI <em>job</em> market
        are two different markets, only loosely connected. Course marketing optimises for
        enrolment: syllabus length, brand logos, average-CTC arithmetic. Hiring optimises for
        capability: can this person build, ship and defend a working system? A course can be
        excellent at the first and irrelevant to the second. So your real task is not "find the best
        course." It is <B>find the course whose output most closely resembles what a hiring manager
        will screen for.</B>
      </P>
      <P>Three failure patterns dominate this market. Learn to recognise them before you pay.</P>
      <UL>
        <li>
          <B>The credential trap.</B> Courses that sell a university-affiliated certificate as the
          hiring mechanism. In 2023 that partially worked. In 2026, recruiters at Indian product
          companies and GCCs (global capability centres — the India arms of multinationals)
          consistently report that non-degree AI certificates no longer carry weight in
          shortlisting. The certificate opens no door on its own.
        </li>
        <li>
          <B>The syllabus trap.</B> Curricula that were competitive in 2022 and have been patched
          rather than rebuilt: six months of classical ML (regression, decision trees, scikit-learn),
          one deep learning module, a "GenAI" bolt-on covering the ChatGPT API, and a Titanic-dataset
          capstone. The learner graduates fluent in a stack that 2026 job descriptions barely
          mention.
        </li>
        <li>
          <B>The guarantee trap.</B> "Job guarantee," "pay after placement" and ISA (income-share
          agreement — you pay a slice of future salary) programs whose contracts define "placement"
          loosely enough that a ₹3.5 LPA support-engineering role satisfies it, and whose refund
          clauses require a minimum number of applications, full attendance and passing internal
          assessments — conditions that are, by design, failable.
        </li>
      </UL>
      <P>
        Now make the cost of a wrong choice concrete, because it is not abstract. These are the
        patterns I see repeatedly among Indian learners who did everything they were told to do.
      </P>
      <UL>
        <li>
          You spend ₹1.2L and nine months on a "PG Program in AI &amp; ML." You finish with a
          certificate, four notebook projects and a resume the platform's team rewrote. You apply to
          180 AI roles and get six calls. Three are data-entry-adjacent. Two are hiring-partner roles
          at below-market CTC. One is a real AI role, where you are asked how you would chunk
          documents for a retrieval system — and you have never done it.
        </li>
        <li>
          You pick the cheapest structured option at ₹15,000 because the syllabus list looks
          identical. It <em>is</em> identical — as a list. The difference is depth. You learned what
          RAG stands for; the other course's learner deployed a retrieval system with hybrid search,
          re-ranking and an evaluation harness, and can defend every design decision. In an
          interview, that gap is visible in ninety seconds.
        </li>
        <li>
          You choose a ₹3.5L premium bootcamp for the placement network. It works — you get
          interviews. But the program spent roughly 40% of its duration on DSA and system design,
          30% on classical ML, and gave you one GenAI module. The interviews you get assume GenAI
          depth you do not have.
        </li>
        <li>
          You go free — YouTube, documentation, Andrew Ng's specialisations. You genuinely learn a
          lot. But after seven months you have no deployed system, no code review from anyone
          senior, no interview practice, no accountability and a GitHub of forked tutorials. Your
          knowledge is real; your <em>evidence</em> is not.
        </li>
        <li>
          You enrol in a job-guarantee program. Eleven months later you invoke the guarantee and are
          told you missed eligibility: you skipped four mandatory mock interviews and your
          assessment score fell below the threshold in module 9. Both facts are true. Both were
          designed into the contract.
        </li>
        <li>
          Meanwhile, the people who got hired did something unglamorous. They picked a course whose
          projects were real, built four or five systems end-to-end, deployed them, wrote about them,
          could explain the trade-offs in each, and applied consistently for three to five months.
        </li>
      </UL>
      <Callout tone="ink">
        <p>
          The question is not "which course is best." It is{" "}
          <B>which course produces the thing a hiring manager is actually screening for.</B>
        </p>
      </Callout>
      <P>
        That reframing dictated the method behind this page. I read 500+ live Indian AI job
        descriptions posted between mid-2025 and mid-2026 and extracted the skills, tools and
        evidence they actually demand. From that I built a <B>Job-Description Alignment Score</B>:
        the share of demanded competencies each course teaches to a build-and-defend level, not a
        mention-in-a-slide level. Every course was then scored on six job-outcome dimensions
        (defined in the framework section): JD alignment, portfolio output, interview readiness,
        placement mechanism, content currency and cost-to-outcome. Placement claims were
        cross-checked against published reports, LinkedIn alumni destinations and independent
        learner accounts — and marked clearly where a claim is unverifiable.
      </P>
      <P>A program made the shortlist only if it meets all five of these bars:</P>
      <UL>
        <li>
          Teaches a stack that appears in 2026 Indian AI JDs — GenAI/LLM engineering, RAG, agents,
          deployment, evaluation — alongside ML fundamentals.
        </li>
        <li>Produces portfolio artefacts a hiring manager can actually inspect.</li>
        <li>Has a real, describable mechanism connecting learning to interviews.</li>
        <li>Is accessible to Indian learners: ₹ pricing, IST timings, EMI where relevant.</li>
        <li>Has traceable learner outcomes, not just testimonials.</li>
      </UL>
    </div>
  );
}

export function AnswerBox() {
  return (
    <div
      id="short-answer"
      className="scroll-mt-24 my-12 rounded-xl border border-accent/50 bg-highlight p-6 sm:p-8"
      style={{ boxShadow: "var(--shadow-paper)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        📌 The direct answer
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
        The Short Answer — Which AI Course Is Best to Get a Job in 2026?
      </h2>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.7] text-foreground/90">
        <p>
          For most Indian learners whose single goal is employment in an AI or GenAI role in 2026,{" "}
          <B>LogicMojo's AI &amp; GenAI Course is the strongest overall choice</B> — because it is
          built around the competencies that actually appear in current AI job descriptions (LLM
          engineering, RAG, agents, fine-tuning, deployment, evaluation), it produces 8–12
          defensible portfolio projects, and it does this at a mid-tier price rather than a ₹3L+ one.
        </p>
        <p>But "best" is conditional. Four situations where something else wins:</p>
        <ul className="space-y-2">
          <li>
            <B>You need a university-affiliated credential</B> for an internal promotion, a visa
            file or an HR-gated process → upGrad (IIIT-B) or Great Learning (Great Lakes / UT
            Austin).
          </li>
          <li>
            <B>You are a fresher targeting premium product-company placements</B> and can afford
            ₹3L+ and 12+ months → Scaler.
          </li>
          <li>
            <B>Your budget is genuinely near zero</B> → the DeepLearning.AI / Coursera route plus
            self-directed project building.
          </li>
          <li>
            <B>You want an IIT/IISc brand</B> on your profile for a senior or managerial track →
            TalentSprint's IIT/IISc-affiliated programs.
          </li>
        </ul>
        <p>
          <B>
            No course guarantees a job in 2026 — including this one. What good courses do is
            compress the time between "I want an AI job" and "I can prove I can do AI work." The
            proof is what gets hired.
          </B>
        </p>
        <p className="text-sm text-muted-foreground">
          Want the answer for your specific background? Skip to the{" "}
          <a href="#matrix" className="font-semibold text-primary underline underline-offset-4">
            personalised recommendation matrix
          </a>
          .
        </p>
      </div>
    </div>
  );
}