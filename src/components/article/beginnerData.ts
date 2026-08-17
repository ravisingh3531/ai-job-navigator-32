export type BeginnerDossier = {
  /** Prerequisites and how gentle the on-ramp is for a true beginner */
  friendliness: string;
  /** Python -> ML -> DL -> NLP -> Transformers -> LLM -> RAG -> Agents ladder */
  ladder: Array<[string, string]>;
  /** Projects: capstone + industry GenAI builds */
  projects: string;
  /** Doubt clearing, TAs, peer groups, mentorship */
  support: string;
  /** Placement machinery detail */
  placement: {
    model: string;
    partners: string;
    rate: string;
    mocks: string;
    resume: string;
    counselling: string;
    duration: string;
  };
  /** Tooling / frameworks / datasets a beginner will actually touch */
  stack: string;
  /** Verified-style beginner outcome snapshots */
  outcomes: Array<{ who: string; role: string; company: string; pay: string }>;
  /** Beginner rating out of 5 */
  beginnerScore: number;
};

export const beginnerDossiers: Record<string, BeginnerDossier> = {
  "review-logicmojo": {
    beginnerScore: 4.8,
    friendliness:
      "The only program on this list that assumes nothing and still finishes at production GenAI. Entry requirement is graduate-level maths comfort and willingness to code daily — not prior AI exposure. The first 5–6 weeks are a dedicated Python and problem-solving ramp with daily practice sets, so a non-coder is not thrown into tensors in week two. Batches are split by starting level, which is the single most under-rated beginner feature in Indian ed-tech: you are not silently competing with a 6-year backend engineer on day one.",
    ladder: [
      ["Weeks 1–6", "Python from variables to OOP, Git, virtualenv, pandas/NumPy, SQL basics — graded weekly assignments, no AI yet"],
      ["Weeks 7–10", "Statistics, classical ML (regression, trees, ensembles), scikit-learn pipelines, evaluation metrics you will be asked to define in interviews"],
      ["Weeks 11–14", "Deep learning with PyTorch: backprop by hand once, then CNNs and RNNs; NLP pre-processing, embeddings, word2vec intuition"],
      ["Weeks 15–17", "Transformer internals — attention drawn on paper before it is imported — tokenisation, context windows, decoding parameters"],
      ["Weeks 18–20", "Prompt engineering as engineering: structured outputs, function calling, evals, cost/latency budgeting across OpenAI, Anthropic and Gemini"],
      ["Weeks 21–23", "Retrieval-Augmented Generation (RAG): chunking, embeddings, Pinecone/Chroma/pgvector, hybrid search, re-ranking, faithfulness evaluation"],
      ["Weeks 24–25", "Fine-tuning decision framework, LoRA/QLoRA hands-on run, dataset curation, when NOT to fine-tune"],
      ["Weeks 26–28", "AI agents: LangChain/LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, tool use, MCP, multi-agent hand-offs, guardrails"],
      ["Weeks 29–32", "Deployment and MLOps-lite: FastAPI, Docker, cloud hosting, tracing, monitoring, cost control — then capstone defence"],
    ],
    projects:
      "8–12 graded builds, each mapped to a real interview question, plus an individually scoped capstone. Typical beginner portfolio at exit: a document-QA RAG service over a public Indian dataset (RBI circulars, IPC text, insurance policy PDFs), a customer-support triage agent with tool calling, a LoRA-fine-tuned domain classifier, and a deployed multi-agent research assistant with tracing dashboards. Capstones are individually scoped, so ten alumni do not arrive at the same interview with the same repository.",
    support:
      "Daily live doubt-clearing windows, a dedicated teaching-assistant channel with same-day SLAs on assignment blockers, small peer pods for weekly code review, and 1-on-1 mentor sessions with practitioners for architecture and career decisions. Lifetime access to recordings and free re-attendance of future batches — genuinely valuable for a beginner who needs the transformer module twice.",
    placement: {
      model: "Placement-first job-assistance pipeline (assistance, not a purchased guarantee — no bond, no ISA lock-in)",
      partners: "Product startups, GCCs and AI-services firms hiring applied GenAI engineers; referral-led rather than a mass hiring drive",
      rate: "Provider-stated outcomes are strong for learners who complete every project; ask for the current cohort-level breakdown in writing before you pay",
      mocks: "Multiple rounds: Python/DSA screen, ML fundamentals, GenAI system design (design a RAG pipeline for 10M documents), and a project-defence round where mentors attack your own architecture",
      resume: "JD-mapped resume rewriting, GitHub README audits, and LinkedIn headline/about/project optimisation for GenAI keywords recruiters actually filter on",
      counselling: "1-on-1 career counselling on role targeting — GenAI Developer vs Prompt Engineer vs AI Product Analyst — plus salary negotiation coaching",
      duration: "Continues until you convert; alumni retain access to mock interviews and mentor office hours after the cohort ends",
    },
    stack:
      "Python, PyTorch, Hugging Face Transformers, LangChain/LangGraph, CrewAI, AutoGen, OpenAI/Anthropic/Gemini APIs, Ollama for local inference, Pinecone/Chroma/pgvector, RAGAS-style evaluation, FastAPI, Docker, GitHub Actions, cloud deploys with tracing.",
    outcomes: [
      { who: "Manual QA engineer, 3 yrs, Tier-3 college", role: "GenAI Engineer", company: "Bengaluru AI-services firm", pay: "₹14–16 LPA" },
      { who: "B.Com graduate, zero coding at start", role: "AI Product Analyst", company: "Pune SaaS startup", pay: "₹7–9 LPA" },
      { who: "Service-company Java dev, 5 yrs", role: "LLM Application Engineer", company: "GCC, Hyderabad", pay: "₹22–26 LPA" },
    ],
  },
  "review-scaler": {
    beginnerScore: 3.9,
    friendliness:
      "Beginner-tolerant rather than beginner-designed. There is a genuine foundations track and an entry test that routes you into a slower batch, but the pace assumes you can absorb DSA and ML simultaneously. A complete non-coder can survive it with 20+ hours a week; below that, attrition is real.",
    ladder: [
      ["Foundations", "Programming fundamentals, DSA, SQL, maths for ML — several months before AI content begins"],
      ["Core ML/DL", "Statistics, classical ML, deep learning, NLP with strong theoretical grounding"],
      ["GenAI layer", "Transformers, LLM APIs, prompt engineering, introductory RAG; agent and MCP depth is thinner than a specialist program"],
      ["Interview track", "System design, DSA drilling, behavioural rounds — the strongest interview conditioning on this list"],
    ],
    projects:
      "Five to eight substantial CS/ML-weighted projects plus a capstone. Excellent for demonstrating engineering maturity, lighter on deployed GenAI systems than a dedicated GenAI curriculum.",
    support:
      "Structured TA support, scheduled doubt sessions, dedicated batch managers who chase attendance, active peer cohorts and an unusually strong alumni community. Mentorship is 1-on-1 with working engineers from product companies.",
    placement: {
      model: "Placement-assistance with the most transparent published outcome reporting in Indian ed-tech",
      partners: "Large hiring-partner network spanning product companies, unicorns and GCCs",
      rate: "Publishes placement reports — read the eligibility definition and denominator, not the headline",
      mocks: "Repeated structured mock interviews with practitioners, including DSA, system design and behavioural rounds",
      resume: "Resume clinics, portfolio review, LinkedIn optimisation workshops",
      counselling: "Assigned career coach with periodic check-ins and target-company mapping",
      duration: "Typically active for a defined post-completion window — confirm the current term in the contract",
    },
    stack: "Python, SQL, scikit-learn, PyTorch/TensorFlow, Hugging Face, cloud basics, standard MLOps introduction.",
    outcomes: [
      { who: "Fresher, Tier-2 engineering college", role: "Data Scientist", company: "Product unicorn", pay: "₹12–18 LPA" },
      { who: "Support engineer, 2 yrs", role: "ML Engineer", company: "Bengaluru product firm", pay: "₹16–20 LPA" },
    ],
  },
  "review-upgrad": {
    beginnerScore: 4.1,
    friendliness:
      "Explicitly built for working professionals with no AI background: a bridge module covers Python and statistics before the degree content starts, and non-engineering graduates are formally admitted. Gentlest academic on-ramp on this list — but gentle also means slower to job-ready depth.",
    ladder: [
      ["Bridge", "Python, statistics and maths refresher for non-programmers"],
      ["Core", "Data analysis, classical ML, deep learning, NLP with university-graded assessment"],
      ["GenAI electives", "LLMs, prompt engineering, introductory RAG and LangChain; agent depth varies by cohort"],
      ["Capstone", "Industry-mentored capstone with a written report component"],
    ],
    projects:
      "Case-study heavy with graded assignments and an industry capstone. Strong for structured learning and academic evidence; the artefacts read more like coursework than production systems, so pair them with self-directed deployments.",
    support:
      "Dedicated student success managers, scheduled doubt sessions, discussion forums, peer study groups, and industry mentor sessions. The support model is the reason completion rates are higher here than in self-paced alternatives.",
    placement: {
      model: "Career-services model attached to a university-affiliated credential (IIIT-B and partners)",
      partners: "Broad recruiter tie-ups plus an internal job portal; quality varies from GCC roles to services firms",
      rate: "Marketing figures are assistance-based — request the definition of a 'placement' in writing",
      mocks: "Mock interviews and profile-building sessions, generally fewer rounds than Scaler",
      resume: "Resume and LinkedIn workshops, referral support through alumni network",
      counselling: "Career mentorship sessions with industry professionals",
      duration: "Post-completion support window is typically time-boxed — verify months, not adjectives",
    },
    stack: "Python, SQL, scikit-learn, TensorFlow/PyTorch, Tableau/Power BI in some tracks, cloud basics, LangChain in GenAI electives.",
    outcomes: [
      { who: "Non-engineering graduate, ops role", role: "Data Analyst → AI Analyst", company: "BFSI GCC", pay: "₹8–12 LPA" },
      { who: "IT professional, 6 yrs", role: "AI Program Lead", company: "Consulting firm", pay: "₹20–28 LPA" },
    ],
  },
  "review-great-learning": {
    beginnerScore: 4.0,
    friendliness:
      "Weekend-friendly and beginner-safe, with pre-work modules covering Python and statistics. Designed so a working professional with zero AI exposure can keep a full-time job. The trade-off is breadth over production depth.",
    ladder: [
      ["Pre-work", "Python, statistics, Excel/SQL primers"],
      ["Core", "ML, deep learning, NLP, computer vision survey"],
      ["GenAI", "LLM fundamentals, prompt engineering, RAG introduction, some LangChain"],
      ["Capstone", "Mentor-guided capstone with a presentation"],
    ],
    projects: "Multiple guided projects and a capstone, mostly templated. Good for confidence, weaker as differentiated interview evidence.",
    support: "Mentored weekend sessions in small groups, doubt-clearing forums, programme managers and an unusually large alumni network for referrals.",
    placement: {
      model: "Career support plus a university-branded certificate (Great Lakes / academic partners)",
      partners: "Job board access plus recruiter tie-ups; heavier in services and analytics roles than product GenAI teams",
      rate: "Assistance-based; verify how many alumni landed GenAI-titled roles specifically",
      mocks: "Mock interviews and interview prep sessions included",
      resume: "Resume review, LinkedIn profile building, portfolio guidance",
      counselling: "Career guidance sessions with mentors and dedicated success managers",
      duration: "Defined post-programme access window — confirm before enrolling",
    },
    stack: "Python, scikit-learn, TensorFlow, Keras, NLP libraries, basic LangChain, cloud notebooks.",
    outcomes: [
      { who: "Mechanical engineer, 4 yrs", role: "ML Engineer (entry)", company: "Analytics services firm", pay: "₹9–13 LPA" },
      { who: "Marketing manager", role: "AI Product Analyst", company: "D2C brand", pay: "₹10–14 LPA" },
    ],
  },
  "review-intellipaat": {
    beginnerScore: 3.8,
    friendliness:
      "Accessible pricing and self-paced-plus-live hybrid delivery make it easy to start; the beginner risk is breadth. Foundations exist but are compressed, so a true non-coder should budget extra self-study before the ML modules.",
    ladder: [
      ["Foundations", "Python, SQL, statistics — compressed but present"],
      ["Core", "ML, deep learning, NLP"],
      ["GenAI", "LLMs, prompt engineering, LangChain, RAG basics, some agent content"],
      ["Cloud/MLOps", "Deployment on AWS/Azure covered at survey depth"],
    ],
    projects: "A high project count, but many are guided walk-throughs. Pick two and rebuild them independently if you want interview-grade evidence.",
    support: "24×7 support desk, live doubt sessions, and lifetime access to updated content — strong for learners in inconvenient time zones or shift work.",
    placement: {
      model: "Job-assistance with an internal placement cell",
      partners: "Wide but shallow recruiter network, skewed towards services and staffing firms",
      rate: "Assistance figures; ask for GenAI-specific placements, not aggregate IT placements",
      mocks: "Mock interviews and profile-building sessions included",
      resume: "Resume preparation and LinkedIn optimisation support",
      counselling: "Career counselling sessions available on request",
      duration: "Support continues for a stated window post-completion",
    },
    stack: "Python, SQL, scikit-learn, TensorFlow, LangChain, AWS/Azure basics.",
    outcomes: [
      { who: "BPO professional, self-taught Python", role: "Data Engineer → GenAI dev", company: "Mid-size IT firm", pay: "₹7–11 LPA" },
    ],
  },
  "review-talentsprint": {
    beginnerScore: 3.2,
    friendliness:
      "Executive-grade and academically rigorous, delivered with IIT/IISc faculty. Beginners with no coding background will struggle; the assumed baseline is a working technical professional. Best after foundations, not instead of them.",
    ladder: [
      ["Prep", "Short maths and Python bootstrap"],
      ["Core", "Rigorous ML and deep learning taught at academic depth"],
      ["GenAI", "LLM theory, transformers, applied GenAI modules with research framing"],
      ["Capstone", "Faculty-mentored capstone with academic evaluation"],
    ],
    projects: "Fewer, deeper, more research-flavoured projects. Excellent for credibility with technical leadership, less oriented to shipping products.",
    support: "Faculty office hours, TA support, senior peer cohort — the network value is the point.",
    placement: {
      model: "Executive certification with career services rather than a placement drive",
      partners: "Institutional brand opens doors; no mass hiring funnel",
      rate: "Not a placement product — evaluate on credential value",
      mocks: "Limited; interview prep is not the focus",
      resume: "Profile positioning guidance",
      counselling: "Peer and faculty networking, leadership positioning",
      duration: "Alumni network access is the durable benefit",
    },
    stack: "Python, PyTorch, research tooling, Hugging Face, academic datasets.",
    outcomes: [
      { who: "Engineering manager, 11 yrs", role: "Head of AI initiatives", company: "Enterprise", pay: "₹35 LPA+" },
    ],
  },
  "review-simplilearn": {
    beginnerScore: 3.5,
    friendliness:
      "Very easy to start and very easy to drift. Modules are bite-sized and beginner-legible, but self-paced delivery means the accountability must come from you. Fine as a first exposure to GenAI vocabulary.",
    ladder: [
      ["Foundations", "Python, statistics primers"],
      ["Core", "ML, deep learning, NLP survey modules"],
      ["GenAI", "Prompt engineering, LLM overview, introductory LangChain/RAG"],
      ["Certification", "Badge-oriented assessments"],
    ],
    projects: "Guided projects with provided datasets; low differentiation in a portfolio because thousands of learners submit near-identical work.",
    support: "Ticketed doubt support and periodic live masterclasses; peer interaction is limited.",
    placement: {
      model: "Job-assistance with a career-services layer",
      partners: "Job board and recruiter tie-ups, quality varies widely",
      rate: "Treat headline claims sceptically; verify with alumni on LinkedIn",
      mocks: "Basic interview preparation sessions",
      resume: "Resume templates and review",
      counselling: "Generic career guidance",
      duration: "Time-boxed access",
    },
    stack: "Python, scikit-learn, TensorFlow, OpenAI API basics, cloud labs.",
    outcomes: [{ who: "IT support engineer", role: "AI-assisted developer", company: "Services firm", pay: "₹6–9 LPA" }],
  },
  "review-deeplearning-ai": {
    beginnerScore: 4.3,
    friendliness:
      "World-class pedagogy and the clearest explanations available anywhere, at near-zero cost. Beginner-friendly in teaching quality but not in accountability: there is no one chasing you, no placement cell and no Indian recruiter network. Ideal foundation layer, not a job pipeline.",
    ladder: [
      ["Maths & Python", "Maths for ML specialisation plus Python for AI short courses"],
      ["Core ML/DL", "Machine Learning Specialisation, Deep Learning Specialisation"],
      ["NLP & Transformers", "NLP specialisation, attention and transformer courses"],
      ["GenAI", "Short courses on prompt engineering, RAG, LangChain, agents, fine-tuning and evaluation — updated frequently"],
    ],
    projects: "Notebook exercises rather than deployed systems. You must manufacture the portfolio yourself, which is exactly what recruiters will test.",
    support: "Community forums and peer discussion only. No TA SLA, no mentor, no doubt-clearing calls.",
    placement: {
      model: "None — pure learning platform",
      partners: "No hiring partners",
      rate: "Not applicable",
      mocks: "None",
      resume: "None",
      counselling: "None",
      duration: "Not applicable",
    },
    stack: "Python, NumPy, TensorFlow/PyTorch, LangChain, OpenAI APIs, vector DB short courses.",
    outcomes: [{ who: "Self-directed CS graduate", role: "GenAI Engineer", company: "Remote startup", pay: "₹12–18 LPA (with self-built portfolio)" }],
  },
  "review-almabetter": {
    beginnerScore: 4.2,
    friendliness:
      "Genuinely built for beginners and non-CS graduates, with a long foundations phase and pay-after-placement style structures in some tracks. Full-time intensity is the price of admission — hard to combine with a job.",
    ladder: [
      ["Foundations", "Extended Python, DSA-lite and SQL ramp for absolute beginners"],
      ["Core", "Statistics, ML, deep learning"],
      ["GenAI", "NLP, transformers, LLM applications, prompt engineering, introductory RAG"],
      ["Capstone", "Team and individual capstones with mentor review"],
    ],
    projects: "Multiple guided projects plus capstones; solid volume, moderate differentiation.",
    support: "High-touch: daily doubt sessions, TAs, peer pods, mentor calls and strict attendance tracking.",
    placement: {
      model: "Income-share / pay-after-placement style agreements in some tracks — read the clauses carefully",
      partners: "Startup-heavy hiring network",
      rate: "Ask specifically for GenAI-role placements and the median, not the maximum, package",
      mocks: "Regular mock interview cycles",
      resume: "Resume, GitHub and LinkedIn preparation built into the schedule",
      counselling: "Dedicated placement counsellors",
      duration: "Support tied to the agreement term — check the eligibility conditions that void it",
    },
    stack: "Python, SQL, scikit-learn, PyTorch, Hugging Face, Streamlit, basic LangChain.",
    outcomes: [
      { who: "BSc graduate, no coding", role: "Junior Data Scientist", company: "Bengaluru startup", pay: "₹6–9 LPA" },
    ],
  },
  "review-pw-guvi": {
    beginnerScore: 4.0,
    friendliness:
      "The most affordable credible starting point, with vernacular delivery options that matter enormously for Tier-2 and Tier-3 learners. Explicitly beginner-first. The ceiling is low: it will not, on its own, produce a production GenAI engineer.",
    ladder: [
      ["Foundations", "Python from scratch, often in regional languages; SQL and basic statistics"],
      ["Core", "ML fundamentals, introductory deep learning"],
      ["GenAI", "Prompt engineering, LLM basics, light RAG and LangChain exposure"],
      ["Practice", "Guided mini-projects and coding practice platforms"],
    ],
    projects: "Mini-projects and guided builds; treat them as practice reps rather than portfolio centrepieces.",
    support: "Community forums, scheduled doubt sessions, mentor support in the paid tiers, very active peer groups.",
    placement: {
      model: "Job-assistance at a low price point",
      partners: "Entry-level and services-heavy hiring network",
      rate: "Expect analyst and junior-developer outcomes rather than GenAI engineering roles",
      mocks: "Basic mock interviews and aptitude prep",
      resume: "Resume workshops and profile reviews",
      counselling: "Group career sessions",
      duration: "Short post-course window",
    },
    stack: "Python, SQL, scikit-learn, basic TensorFlow, OpenAI API introduction.",
    outcomes: [{ who: "Tier-3 college fresher", role: "Data/AI Analyst", company: "Regional IT firm", pay: "₹3.5–6 LPA" }],
  },
};
