import { B, Callout, H3, P, Section, TableCard, UL } from "./ui";

export function MarketReality() {
  return (
    <Section
      id="market"
      eyebrow="📊 Section 2 — Reality check"
      title="Before You Pick a Course: What AI Hiring in India Actually Looks Like in 2026"
    >
      <P>
        You cannot evaluate a course without knowing the target it is supposed to hit. So before any
        ranking, here is the target: how AI hiring in India actually works right now, what changed
        since 2023, and what the honest timelines and salary bands look like.
      </P>

      <H3 id="tiers">The Three Tiers of AI Jobs in India (and which one you're realistically targeting)</H3>
      <P>
        "AI job" is not one thing. It is three markets with different screening bars, different
        entry paths and different pay. Confusing them is the most common planning error I see.
      </P>
      <TableCard
        caption="Table — The three tiers of AI roles in India, 2026"
        head={[
          "Tier",
          "Role examples",
          "What hiring actually screens for",
          "Realistic entry path",
          "Typical India CTC band (2026)",
        ]}
        rows={[
          [
            <B>Tier 1 — AI-adjacent / AI-enabled</B>,
            "AI Business Analyst, AI Product Manager, GenAI Solutions Consultant, AI Implementation Specialist, Prompt/Content Ops, AI Support Engineer",
            "Domain expertise + AI literacy + ability to scope and evaluate AI solutions. Light or no coding.",
            "Reachable from non-tech backgrounds in 3–6 months",
            "₹5–18 LPA (heavily domain- and experience-dependent)",
          ],
          [
            <B>Tier 2 — Applied AI / GenAI engineering</B>,
            "AI Engineer, GenAI Engineer, LLM Engineer, AI Agent Developer, ML Engineer (applied), AI Full-Stack Engineer, RAG Engineer",
            "Can you BUILD? Deployed systems, API integration, retrieval pipelines, agents, evaluation, production concerns. Strong coding required.",
            "6–12 months from a software/data background; 9–18 from scratch",
            "₹8–35 LPA (₹6–12 freshers; ₹18–35 at 4–8 yrs with proven AI work)",
          ],
          [
            <B>Tier 3 — Core ML / research / applied science</B>,
            "Applied Scientist, Research Engineer, ML Scientist, Foundation Model Engineer",
            "Mathematical depth, publications or equivalent, strong CS fundamentals — usually MS/PhD or exceptional demonstrated work",
            "Rarely reachable via a short course alone",
            "₹25 LPA – ₹1Cr+",
          ],
        ]}
      />
      <Callout tone="ink">
        <p>
          Almost every "AI course with placement" in India is <em>selling</em> Tier 2 outcomes. Most{" "}
          <em>deliver</em> Tier 1. Almost none deliver Tier 3, regardless of marketing.
        </p>
      </Callout>
      <P>
        Pick your tier before you pick a course. A program that is ideal for Tier 2 is expensive
        overkill for Tier 1 — you will spend months on deployment and MLOps you will never use. And
        no six-month program, at any price, converts a non-research profile into an Applied
        Scientist. If Tier 3 is your goal, the honest route is a master's, a research assistantship
        or publishable open-source work, not a bootcamp.
      </P>

      <H3 id="bar-shift">What Changed Between 2023 and 2026 — The Hiring Bar Shift</H3>
      <TableCard
        caption="Table — How screening signals were repriced"
        head={["Hiring signal", "2023 reality", "2026 reality"]}
        rows={[
          ["AI certificate on resume", "Differentiating — few had one", "Baseline noise — nearly every applicant has one"],
          ["Kaggle notebook / classroom project", "Often sufficient for a fresher screen", "Ignored unless deployed and non-templated"],
          ["\"Knows Python + sklearn\"", "Enough for entry ML roles", "Assumed; no longer mentioned as a plus"],
          ["Prompt engineering skill", "Marketable as a standalone skill", "Baseline literacy; not a role by itself at most companies"],
          ["RAG experience", "Rare and differentiating", "Expected for most GenAI engineering roles"],
          ["Agent / multi-agent work", "Cutting-edge, rarely asked", "Fastest-growing requirement in Indian JDs"],
          ["Deployment + monitoring", "\"Nice to have\"", "Frequently a screening filter"],
          ["Model evaluation / guardrails", "Rarely mentioned", "Increasingly mandatory, especially in BFSI and enterprise"],
          ["Domain + AI combination", "Uncommon", "Strongly preferred — AI-in-BFSI, AI-in-healthcare, AI-in-retail"],
        ]}
      />
      <P>
        The mechanism behind that table is simple. Between 2023 and 2025 the market absorbed the
        first large wave of AI-certified candidates, discovered that certificates did not predict
        capability, and shifted to evidence-based screening. Hiring teams learned — expensively —
        that a person who can describe a retrieval pipeline is not the same as a person who has
        debugged one at 2 a.m. when embeddings drifted after a model upgrade.
      </P>
      <P>
        Two other forces compounded it. First, the hype-hiring wave of 2023–24 normalised: budgets
        are now attached to shipped products, so managers hire for delivery, not potential. Second,
        the work itself moved. Demand for pure model-training generalists collapsed, applied
        GenAI/LLM engineering surged, RAG became table-stakes rather than a differentiator, agentic
        systems became the new frontier, and MLOps plus evaluation graduated from optional to
        expected. This is <B>good news</B> if you pick a course that produces evidence, and{" "}
        <B>terrible news</B> if you pick a credential-first program.
      </P>

      <H3 id="screening">What Indian Hiring Managers Told Me They Actually Screen For</H3>
      <P>
        Synthesised from conversations with hiring managers, engineering leads and technical
        recruiters across product companies, GCCs, AI-native startups and IT-services AI practices.
        Ranked by how much weight it carries at the shortlist stage.
      </P>
      <UL>
        <li>
          <B>1. A deployed system with a public URL or demo.</B> Outranks every certificate. A
          working link says "this person finished something," which is rarer than it sounds.
        </li>
        <li>
          <B>2. GitHub with genuine commit history.</B> Iteration, bug fixes and messy middle
          commits prove you built it. A single "initial commit" of 4,000 lines proves the opposite.
        </li>
        <li>
          <B>3. The ability to explain trade-offs.</B> "Why chunk at 512 tokens?" "Why this vector
          database?" "Why fine-tune instead of RAG?" As one hiring lead at a Bengaluru fintech put
          it, this is where most course graduates fall apart — they can narrate what they did, not
          why.
        </li>
        <li>
          <B>4. Familiarity with production concerns.</B> Cost per token, latency budgets, caching,
          rate limits, failure modes, evaluation. Cheap to learn, and it instantly separates you.
        </li>
        <li>
          <B>5. Relevant domain context.</B> A claims-processing AI project beats a generic chatbot
          when you are applying to an insurer.
        </li>
        <li>
          <B>6. Communication.</B> Explaining an AI system to a non-technical stakeholder is a real
          interview round at GCCs and consultancies.
        </li>
        <li>
          <B>7. Credential.</B> Last — mostly a tiebreaker or an HR-gate satisfier, and occasionally
          a hard filter in IT-services bands and visa processes. Real, but small.
        </li>
      </UL>

      <H3 id="timeline">The Honest Timeline — From Course Start to Offer Letter</H3>
      <P>
        These bands assume consistent effort of roughly 10–15 hours per week <em>and</em> active
        applying from month four onward. "Job-ready" means you can survive a technical round; "offer"
        includes the search itself, which in 2026 is the longer half.
      </P>
      <TableCard
        caption="Table — Realistic timelines by starting profile"
        head={["Your starting point", "Time to job-ready", "Time to offer", "Main bottleneck"]}
        rows={[
          ["Software engineer, 2–6 yrs, strong coding", "4–7 months", "6–10 months", "Building AI-specific evidence, not learning"],
          ["Data analyst / BI, SQL + some Python", "6–9 months", "8–13 months", "Engineering depth and deployment"],
          ["Fresher, CS degree, decent coding", "7–11 months", "10–16 months", "Experience proxy — projects must be exceptional"],
          ["Fresher, non-CS degree", "9–14 months", "12–20 months", "Both fundamentals and credibility"],
          ["QA / support / DevOps, 2–8 yrs", "7–11 months", "10–16 months", "Coding depth and role-change resistance"],
          ["Non-tech professional (Tier 1 roles)", "3–6 months", "5–10 months", "Positioning and domain-AI translation"],
          ["Career-break returner", "6–10 months", "9–15 months", "Recency signalling and interview confidence"],
        ]}
      />
      <P>
        Anyone promising "an AI job in three months from scratch" is describing an outlier, not a
        plan. Equally honest: a meaningful share of learners take longer than these bands, and some
        never convert. In almost every non-conversion I have tracked, the cause was one of two
        things — they stopped building after the course ended, or they stopped applying after the
        first thirty rejections. Neither is a knowledge problem.
      </P>

      <H3 id="salary">Realistic Salary Expectations (and how course marketing distorts them)</H3>
      <P>
        Before the bands, understand the arithmetic that produces the numbers in ads.{" "}
        <B>"Average CTC" is pulled upward by a handful of outlier offers</B> — one ₹45 LPA offer in a
        cohort of forty moves the average visibly. <B>"Highest CTC" is useless</B> as a planning
        number. <B>"Average CTC of placed learners"</B> silently excludes everyone who did not get
        placed, which is the number you actually care about. And CTC itself bundles variable pay,
        ESOP paper value and joining bonuses that never appear in your monthly bank credit.
      </P>
      <TableCard
        caption="Table — Planning bands, not guarantees (India, 2026)"
        head={["Profile", "Realistic first AI role CTC"]}
        rows={[
          ["Fresher, strong portfolio, product company or startup", "₹6–14 LPA"],
          ["Fresher, service-company AI practice", "₹4–8 LPA"],
          ["2–4 yrs SDE moving to AI Engineer", "₹12–24 LPA"],
          ["5–8 yrs engineer moving to Senior AI/GenAI Engineer", "₹20–40 LPA"],
          ["Data analyst → AI/ML Engineer", "₹9–18 LPA"],
          ["Non-tech → Tier 1 AI-adjacent role", "₹5–15 LPA (domain-dependent)"],
          ["GCC AI roles (all levels)", "Typically 15–35% above equivalent service-company bands"],
        ]}
      />
      <P>
        Two location realities worth planning around: metro roles (Bengaluru, Hyderabad, NCR, Pune,
        Mumbai) pay meaningfully more than Tier-2 remote roles for identical work, and fully remote
        AI roles at Indian companies are notably less common in 2026 than in 2021–22. If you are
        optimising for a remote-first outcome, expect a longer search and a narrower band.
      </P>
    </Section>
  );
}