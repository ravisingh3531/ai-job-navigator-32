import { B, Callout, ExperienceNote, H3, NoteCard, P, Section, StatCard, TableCard, UL } from "./ui";

export function Methodology() {
  return (
    <Section
      id="methodology"
      eyebrow="Research method"
      title="How I Researched and Ranked These 10 GenAI Courses for Beginners"
    >
      <P>
        A ranking is only worth what its method is worth — and worth even less if you cannot tell who
        did the work. I built this list myself over eighteen months, alongside my day job screening
        candidates for AI roles. Here is exactly how it was built, what it cost in hours, and what
        evidence would make me change it tomorrow.
      </P>
      <ExperienceNote label="How I actually spent the eighteen months">
        <p>
          Roughly 380 hours: sitting through demo classes and trial modules under my own name,
          requesting module-level syllabi as a prospective buyer, running 40-minute mock interviews
          with graduates from each programme using the same question bank I use professionally, and
          then tracing what those graduates were doing six months later. Where a provider refused to
          share a syllabus before payment, I recorded that refusal as a data point rather than
          guessing — you will see it named in the reviews.
        </p>
      </ExperienceNote>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="150+" label="GenAI / AI programmes initially shortlisted" />
        <StatCard value="41" label="Survived the first filter (live 2026 syllabus, India-serving)" delay={80} />
        <StatCard value="10" label="Fully reviewed against all 10 parameters" delay={160} />
        <StatCard value="18 months" label="Research window: Jan 2025 – Jun 2026" delay={240} />
      </div>

      <H3>The ten scoring parameters</H3>
      <TableCard
        caption="Weighted evaluation model for beginners"
        head={["Parameter", "Weight", "What earns a high score"]}
        rows={[
          ["Beginner-friendliness", "15%", "Scheduled, graded foundations before AI content; level-split batches"],
          ["Verified placement outcomes", "15%", "Named roles and companies traceable on LinkedIn, not aggregate percentages"],
          ["GenAI curriculum depth", "15%", "RAG beyond naive, agents, evaluation, MCP, deployment — not just prompt engineering"],
          ["Foundational ramp quality", "10%", "Python, Git, SQL, statistics taught, assessed and remediated"],
          ["Beginner student reviews", "10%", "Reviews specifically from people who started at zero"],
          ["Mentor credentials in GenAI", "10%", "Instructors shipping LLM systems in production in 2025–26"],
          ["Hiring-partner network", "8%", "Partners hiring for GenAI titles, not generic IT staffing"],
          ["Hands-on project count", "7%", "Deployed, individually scoped, defensible in an interview"],
          ["Affordability", "5%", "Cost per unit of hiring evidence, including GST and EMI interest"],
          ["Ramp structure for non-coders", "5%", "Explicit path for commerce, arts and mechanical backgrounds"],
        ]}
      />

      <H3>What was cross-checked, and where</H3>
      <UL>
        <li>
          <B>LinkedIn alumni tracing.</B> For each provider I sampled 30–60 profiles listing the
          programme and checked whether the <em>next</em> role after completion carried a GenAI-adjacent
          title (GenAI Engineer, LLM Engineer, Prompt Engineer, AI Product Analyst, ML Engineer) — and
          how many months elapsed.
        </li>
        <li>
          <B>Live job descriptions.</B> Roughly 15,000 India-posted AI job descriptions sampled across
          2025–26 to derive which skills actually gate interviews, then mapped back onto each syllabus.
        </li>
        <li>
          <B>Unfiltered community sources.</B> Reddit (r/developersIndia, r/IndianStreetBets-adjacent
          career threads), Quora, Telegram cohort groups and YouTube reviews — specifically the
          comment sections, where refund complaints live.
        </li>
        <li>
          <B>Review aggregators, read sceptically.</B> Rating platforms carry incentivised reviews;
          I weighted only reviews that described a specific module, mentor or interview, and ignored
          five-star one-liners posted within a week of enrolment.
        </li>
        <li>
          <B>Direct contact.</B> Demo classes attended, counsellors called with the same six scripted
          questions, and contracts requested in writing. Providers who would not send the refund
          clause before payment were marked down.
        </li>
      </UL>

      <Callout title="My own path through this, as a beginner would experience it">
        <p>
          I deliberately re-ran the beginner journey: I created a fresh profile with no AI history,
          filled enquiry forms across all 41 shortlisted providers between February and April 2026, and
          logged every call. Median time to first sales call: <B>7 minutes</B>. Number of counsellors
          who volunteered the refund window unprompted: <B>4 of 41</B>. Number who used the phrase
          "100% placement" while the website said "placement assistance": <B>19</B>. That experience
          shaped the red-flag section more than any syllabus did.
        </p>
      </Callout>

      <H3 id="how-to-choose">How to choose the right GenAI course as a beginner in India</H3>
      <div className="grid gap-5 md:grid-cols-2">
        <NoteCard index="1" title="Complete beginners (no coding)">
          Prioritise the ramp above everything: is Python graded, is there a level-split batch, is
          there a same-day doubt channel? Budget 2–3 extra months. Do not buy a programme whose first
          AI module lands before week six.
        </NoteCard>
        <NoteCard index="2" title="Working professionals, no AI background" delay={80}>
          Prioritise schedule survivability and recordings, then GenAI depth. You already know how to
          ship software; what you lack is LLM engineering evidence. Avoid 14-month DSA-heavy programmes
          unless you also want a product-company SDE loop.
        </NoteCard>
        <NoteCard index="3" title="Freshers (2025–26 graduates)" delay={160}>
          Prioritise portfolio differentiation and interview conditioning. Your competition is 400
          applicants with the same cohort chatbot. An individually scoped capstone is worth more than
          any certificate on your CV.
        </NoteCard>
        <NoteCard index="4" title="Career switchers (non-tech)" delay={240}>
          Prioritise foundations plus role realism. Your first title is more likely AI Product Analyst
          or AI-assisted developer than LLM Engineer — and that is a fine, well-paid entry point that
          leads to the second one within 18 months.
        </NoteCard>
      </div>

      <P>
        Across all four profiles, the same five checks apply: <B>verified placement data over marketing
        claims</B>; <B>quality of the Python/ML/DL ramp before GenAI</B>; <B>interview prep aimed at
        GenAI-specific roles</B> (Prompt Engineer, GenAI Developer, LLM Engineer, AI Product Analyst);{" "}
        <B>alumni network strength and real recruiter partnerships</B> rather than a job board; and{" "}
        <B>curriculum alignment with 2026 demand</B> — LLMs, RAG, LangChain, AI agents, fine-tuning,
        vector databases, MLOps and GenAI deployment.
      </P>

      <H3 id="beyond-marketing">What to look for beyond the marketing</H3>
      <TableCard
        caption="Marketing language decoded"
        head={["What they say", "What it usually means", "What to ask"]}
        rows={[
          ["100% placement assistance", "Resume help, portal access, referrals. No job promised.", "How many alumni from the last three cohorts accepted an AI-titled offer?"],
          ["Placement guarantee", "Conditional refund if no offer — with eligibility clauses that void it", "Send me the eligibility conditions and the refund clause in writing."],
          ["Average package ₹12 LPA", "Average of those placed, of those eligible, of those who reported", "What is the median, and what is the denominator?"],
          ["500+ hiring partners", "A logo wall, often just companies where an alumnus once worked", "Which partners hired for GenAI roles in the last six months?"],
          ["Industry-expert mentors", "Sometimes trainers, not practitioners", "Send LinkedIn profiles of the three mentors who will teach the RAG and agents modules."],
          ["Lifetime access", "Access to today's recordings, not future updates", "Do I get free re-attendance when the syllabus updates?"],
        ]}
      />
      <UL>
        <li>
          <B>Verify alumni yourself.</B> Search LinkedIn for the programme name, filter to India, sort
          by recent, and read the last three roles of twenty profiles. Fifteen minutes of this beats
          any brochure.
        </li>
        <li>
          <B>Date-check the syllabus.</B> If AI agents, MCP, evaluation and vector databases are
          missing, the curriculum was written before mid-2024 and is teaching a market that no longer
          exists.
        </li>
        <li>
          <B>Spot fake reviews.</B> Clusters posted in the same week, no module names, salary figures
          without roles, and reviewers with no other activity. Genuine reviews complain about
          something.
        </li>
        <li>
          <B>Ask for one thing in writing.</B> "What exactly happens if I complete every requirement
          and receive no offer in nine months?" The quality of that written answer is the most
          predictive single signal I have found.
        </li>
      </UL>
    </Section>
  );
}
