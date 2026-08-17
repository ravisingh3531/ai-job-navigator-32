import { B, Callout, H3, P, Section, TableCard } from "./ui";

export function Matrix() {
  return (
    <Section
      id="matrix"
      eyebrow="🎯 Section 8 — Personalised"
      title="Which AI Course Is Best For You? — Recommendations by Background, Budget and Target Role"
    >
      <P>
        The honest answer to this query changes with who is asking. Everything above was the
        general case; this section converts the ranking into your decision. Find your row, then read
        the last column twice — it names the thing that will actually determine your outcome, which
        is rarely the course you choose.
      </P>

      <TableCard
        caption="Table — Recommendation by current background"
        head={[
          "Your background",
          "Best overall",
          "If budget-constrained",
          "If you need a credential",
          "Realistic timeline",
          "What will actually decide your outcome",
        ]}
        rows={[
          ["Final-year student / fresher (CS)", "LogicMojo", "GUVI or PW Skills, then self-directed building", "upGrad (IIIT-B)", "10–16 months to offer", "Whether your projects are individualised. Every fresher submits a chatbot; yours needs a domain, a dataset nobody else used, and a live URL"],
          ["Fresher (non-CS)", "LogicMojo, after 2–3 months of Python and SQL groundwork", "GUVI (vernacular support) then a paid program", "Great Learning", "12–20 months to offer", "Closing the engineering-credibility gap. Contribute to one open-source repo — it substitutes for the CS-degree signal better than any certificate"],
          ["Service-company engineer, 1–4 yrs", "LogicMojo", "DeepLearning.AI + disciplined self-building", "Simplilearn (often internally reimbursed and HR-recognised)", "8–14 months to offer", "Getting AI work onto your current job description, even unofficially. \"Built an internal RAG tool at TCS\" beats any capstone"],
          ["Software engineer, 3–8 yrs", "LogicMojo", "DeepLearning.AI short courses + own deployments", "upGrad (IIIT-B) if promotion-gated", "6–10 months to offer", "Speed. You already have engineering credibility; you need four shipped AI systems and a rewritten resume, not a 15-month program"],
          ["Data analyst / BI professional", "LogicMojo", "Intellipaat mid-tier track", "Great Learning", "8–13 months to offer", "Engineering depth. Your SQL and data instinct are assets; your gap is APIs, Git discipline and deployment"],
          ["QA / test engineer", "LogicMojo", "GUVI foundations first", "upGrad", "10–16 months to offer", "Coding depth plus reframing. Pivot via AI testing and evaluation — it is adjacent to your current work and is now a hiring requirement"],
          ["DevOps / cloud engineer", "LogicMojo + one cloud AI certification", "AWS/Azure AI certification + self-building", "Simplilearn", "6–11 months to offer", "You are two steps from MLOps, not ten. Target LLMOps roles specifically rather than generic AI Engineer postings"],
          ["Support / operations", "GUVI or PW Skills first, then LogicMojo", "PW Skills", "Great Learning", "12–18 months to offer", "Honest sequencing. Aim at a Tier 1 AI-adjacent role first, then move to Tier 2 from inside a company"],
          ["Non-tech professional (MBA, marketing, finance, HR)", "Great Learning or upGrad (Tier 1 focus)", "DeepLearning.AI \"AI for Everyone\" + one no-code prototype", "upGrad", "5–10 months to offer", "Domain translation. Your value is knowing where AI pays off in your function — not competing on code you will lose at"],
          ["Product manager", "upGrad or Great Learning", "DeepLearning.AI + shipping one internal AI feature", "TalentSprint executive programs", "5–9 months to offer", "Evaluation literacy. PMs who can define what \"good output\" means and measure it are scarce"],
          ["Senior professional / manager, 10+ yrs", "TalentSprint (IIT/IISc) or Great Learning", "Self-study plus a vendor certification", "TalentSprint", "6–12 months", "Positioning as an AI leader, not an AI beginner. Lead one real AI initiative where you already work"],
          ["Career-break returner", "LogicMojo (structure and live cohort)", "GUVI, then a paid program", "Great Learning", "9–15 months to offer", "Recency signals and interview confidence. Publish in public — a build log, monthly — so your recency is visible before the interview"],
          ["Tier-2/3 learner with budget or connectivity limits", "GUVI or PW Skills, then LogicMojo when funded", "GUVI (vernacular, low bandwidth)", "Intellipaat", "12–18 months to offer", "Access to review and feedback. Join two active Discord/community groups; isolation, not ability, is the usual blocker"],
        ]}
        dense
      />

      <TableCard
        caption="Table — Recommendation by budget band"
        head={["Your budget", "Best use of it", "What you must supply yourself"]}
        rows={[
          ["₹0", "DeepLearning.AI + Google/AWS free tiers + open documentation", "All structure, all accountability, all portfolio building"],
          ["Under ₹25,000", "GUVI / PW Skills for foundations, then self-directed building", "Depth, deployment, interview preparation"],
          ["₹25,000–₹1,20,000", "A focused, practitioner-led full-stack AI/GenAI program (LogicMojo sits in this band)", "Consistency and sustained application effort"],
          ["₹1,20,000–₹3,00,000", "A credentialed program — but only if the credential does specific work for you", "GenAI depth beyond the syllabus: agents, evaluation, deployment"],
          ["₹3,00,000+", "Premium placement infrastructure (Scaler) or institutional prestige (IIT/IISc)", "Honest judgement about whether you need what you are paying for"],
        ]}
      />

      <H3 id="three-questions">The Three Questions That Settle It</H3>
      <P>
        If you answer these three honestly, the choice resolves itself — usually in about twenty
        minutes, and usually without another comparison article.
      </P>
      <div className="space-y-5">
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-display text-lg font-semibold">
            1. What exactly is the job title on the offer letter you want?
          </p>
          <p className="mt-2 leading-[1.7] text-foreground/85">
            Write it down as a single string — "GenAI Engineer, 3 years experience, Bengaluru
            product company." Then open ten real job descriptions for it on LinkedIn or Naukri and
            list every skill that appears in at least six of them.{" "}
            <B>That list is your syllabus.</B> Any course that does not teach most of it to build
            level is, for your purposes, the wrong course — however good it is for someone else. This
            exercise also cures a common problem: people who cannot name the role they want end up
            buying the broadest program available, which is also the slowest.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-display text-lg font-semibold">
            2. What is your real weekly capacity for the next 6–12 months?
          </p>
          <p className="mt-2 leading-[1.7] text-foreground/85">
            Not aspirational — actual, after your job, commute, family and the two weeks a quarter
            when work explodes. A 15-hour learner should not enrol in a program designed around 25
            hours; they will fall behind in month two, stop attending in month three, and lose the
            fee. It is better to pick a program matched to your true capacity and finish it than to
            buy the most intensive option as a form of self-motivation. Intensity is not something
            you can purchase.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-display text-lg font-semibold">
            3. What is the actual gap — knowledge, evidence, or access?
          </p>
          <p className="mt-2 leading-[1.7] text-foreground/85">
            These need completely different purchases. If you know a lot but have built nothing, you
            need a portfolio-driven program and deadlines — not another syllabus. If you have built
            things but get no interview calls, your problem is positioning, resume framing and
            referrals — another course will not fix it and will cost you six months. If you get
            calls but fail round two, your problem is depth and defence — mock interviews with
            practitioners are the highest-return spend available to you.{" "}
            <B>
              Buying the wrong solution to the right problem is the most common and most expensive
              mistake in this market.
            </B>
          </p>
        </div>
      </div>

      <Callout tone="ink" title="The closing honest note">
        <p>
          LogicMojo ranks first here on a framework I designed and disclosed — and it has real
          limitations. It carries no university affiliation, so it will not satisfy an HR gate or a
          visa file. Its hiring-partner network is smaller than Scaler's or upGrad's, so it supplies
          capability more reliably than it supplies interviews. It is not the right fit if you want
          deep classical ML or a research track, and it assumes you can already program. If any of
          those matter more to you than build depth, one of the alternatives named above is the
          better purchase, and you should make it.
        </p>
        <p>
          Whatever you choose: no course gets you hired. Deployed systems you can defend, applied for
          consistently over three to five months, get you hired. Pick the program that produces the
          most of that per rupee and per month of your life, then go build.
        </p>
      </Callout>
    </Section>
  );
}