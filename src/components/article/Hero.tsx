import { B, Callout, Lead, NoteCard, P, UL } from "./ui";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <header className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.16 236 / 0.55), transparent 70%)",
          animation: "var(--animate-float-slow)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.19 282 / 0.5), transparent 70%)",
          animation: "var(--animate-float-slow)",
          animationDelay: "-4s",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div style={{ animation: "var(--animate-reveal)" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary-glow/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-glow uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            India · AI careers · Updated 2026
          </span>
        </div>
        <h1
          className="mt-6 font-display text-[2.1rem] leading-[1.12] font-extrabold text-ink-foreground sm:text-[3.4rem]"
          style={{ animation: "var(--animate-reveal)", animationDelay: "80ms" }}
        >
          Which AI Course Is Best to{" "}
          <span className="text-gradient">Get a Job in 2026?</span>
        </h1>
        <p
          className="mt-4 max-w-3xl font-display text-lg font-medium text-ink-foreground/70 sm:text-xl"
          style={{ animation: "var(--animate-reveal)", animationDelay: "140ms" }}
        >
          An honest, hiring-first comparison of India's top 10 AI programs.
        </p>
        <p
          className="mt-5 max-w-2xl text-base leading-[1.75] text-ink-foreground/60 sm:text-lg"
          style={{ animation: "var(--animate-reveal)", animationDelay: "200ms" }}
        >
          Ranked on job-description alignment, portfolio output and interview readiness — not on
          brand size or marketing budget. Includes a personalised matrix by background, budget and
          target role.
        </p>
        <div
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animation: "var(--animate-reveal)", animationDelay: "260ms" }}
        >
          {[
            ["500+", "Live Indian AI job descriptions analysed"],
            ["10", "Programs scored on 6 criteria"],
            ["7", "Comparison tables, fully worked"],
            ["~35 min", "Read time, no fluff"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-2xl border border-primary-glow/20 bg-ink-foreground/5 p-4 backdrop-blur transition-colors hover:border-primary-glow/45"
            >
              <p className="font-display text-2xl font-bold text-ink-foreground">{v}</p>
              <p className="mt-1 text-xs leading-snug text-ink-foreground/55">{l}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-9 flex flex-wrap gap-3"
          style={{ animation: "var(--animate-reveal)", animationDelay: "320ms" }}
        >
          <a
            href="#short-answer"
            className="rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            Read the short answer
          </a>
          <a
            href="#matrix"
            className="rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-semibold text-ink-foreground/85 transition-colors hover:bg-ink-foreground/10"
          >
            Find your best fit
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
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
      <div className="grid gap-4 sm:grid-cols-3">
        <NoteCard index="01" title="The credential trap">
          Courses that sell a university-affiliated certificate as the hiring mechanism. In 2023
          that partially worked. In 2026, recruiters at Indian product companies and GCCs (global
          capability centres — the India arms of multinationals) consistently report that non-degree
          AI certificates no longer carry weight in shortlisting.{" "}
          <B>The certificate opens no door on its own.</B>
        </NoteCard>
        <NoteCard index="02" title="The syllabus trap" delay={90}>
          Curricula competitive in 2022 and patched rather than rebuilt: six months of classical ML
          (regression, decision trees, scikit-learn), one deep learning module, a "GenAI" bolt-on
          covering the ChatGPT API, and a Titanic-dataset capstone.{" "}
          <B>The learner graduates fluent in a stack 2026 job descriptions barely mention.</B>
        </NoteCard>
        <NoteCard index="03" title="The guarantee trap" delay={180}>
          "Job guarantee," "pay after placement" and ISA (income-share agreement — you pay a slice
          of future salary) programs whose contracts define "placement" loosely enough that a ₹3.5
          LPA support role satisfies it, and whose refund clauses require minimum applications, full
          attendance and passing assessments — <B>conditions that are, by design, failable.</B>
        </NoteCard>
      </div>
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
    <Reveal>
      <div
        id="short-answer"
        className="relative my-14 scroll-mt-28 overflow-hidden rounded-3xl border border-primary/25 bg-card p-6 sm:p-9"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: "var(--gradient-brand)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.16 236 / 0.22), transparent 70%)" }}
        />
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold tracking-[0.16em] text-primary uppercase">
          📌 The direct answer
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-[2rem] sm:leading-tight">
          The Short Answer — Which AI Course Is Best to Get a Job in 2026?
        </h2>
        <div className="relative mt-5 space-y-4 text-[1.04rem] leading-[1.75] text-foreground/85">
        <p>
          For most Indian learners whose single goal is employment in an AI or GenAI role in 2026,{" "}
          <B>LogicMojo's AI &amp; GenAI Course is the strongest overall choice</B> — because it is
          built around the competencies that actually appear in current AI job descriptions (LLM
          engineering, RAG, agents, fine-tuning, deployment, evaluation), it produces 8–12
          defensible portfolio projects, and it does this at a mid-tier price rather than a ₹3L+ one.
        </p>
          <p>But "best" is conditional. Four situations where something else wins:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["You need a university-affiliated credential", "for a promotion, visa file or HR-gated process", "upGrad (IIIT-B) or Great Learning"],
              ["You are a fresher targeting premium product companies", "and can afford ₹3L+ and 12+ months", "Scaler"],
              ["Your budget is genuinely near zero", "and your discipline is high", "DeepLearning.AI / Coursera + own projects"],
              ["You want an IIT/IISc brand", "for a senior or managerial track", "TalentSprint IIT/IISc programs"],
            ].map(([head, sub, pick]) => (
              <div key={head} className="rounded-2xl border border-border bg-secondary/50 p-4">
                <p className="text-sm font-semibold text-foreground">{head}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
                <p className="mt-2 text-sm font-semibold text-primary">→ {pick}</p>
              </div>
            ))}
          </div>
          <p
            className="rounded-2xl px-5 py-4 text-ink-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            No course guarantees a job in 2026 — including this one. What good courses do is
            compress the time between "I want an AI job" and "I can prove I can do AI work." The
            proof is what gets hired.
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
    </Reveal>
  );
}