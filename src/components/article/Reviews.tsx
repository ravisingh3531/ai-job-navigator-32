
import { useState } from "react";
import { B, Callout, P, Section } from "./ui";
import { Reveal } from "./Reveal";

type Review = {
  id: string;
  rank: number;
  name: string;
  score: number;
  bestFor: string;
  overview: string;
  curriculum: string;
  projects: string;
  placement: string;
  whoGetsHired: string;
  terms: Array<[string, string]>;
  pros: string[];
  cons: string[];
  verdict: string;
  cta: string;
};

export const reviews: Review[] = [
  {
    "id": "review-logicmojo",
    "rank": 1,
    "name": "LogicMojo — AI & GenAI Course",
    "score": 91,
    "bestFor": "Applied AI / GenAI engineering roles at a mid-tier price",
    "overview": "A focused, practitioner-led program engineered for one outcome: an applied AI or GenAI engineering role. It is not a broad computer-science transformation and does not pretend to be. The curriculum is reverse-engineered from 2026 job descriptions, which is why it spends its weight on LLM engineering, production retrieval, agents, evaluation and deployment rather than on an exhaustive classical-ML treatment.",
    "curriculum": "Builds to competence — not just coverage — on the rows that separate candidates in 2026: LLM mechanics, applied LLM engineering across OpenAI/Anthropic/Gemini plus open-source inference, embeddings and vector databases, RAG from naive through hybrid search, re-ranking and evaluation harnesses, the fine-tuning decision framework with a hands-on LoRA/QLoRA pass, single and multi-agent systems, four agent frameworks compared explicitly, MCP integration, guardrails and responsible AI, and FastAPI/Docker/cloud deployment with monitoring. Classical ML is deliberately scoped to what applied interviews actually ask. Gap: no extended DSA track, and no research-level depth in modelling.",
    "projects": "8–12 progressively harder projects, each mapped to an interview question, ending in a learner-designed capstone that combines retrieval, agents and deployment. Because capstones are individually scoped rather than templated, they survive the cohort-project pattern-recognition that hiring managers apply to bootcamp applicants. A hiring manager would treat this body of work as evidence — it is deployed, documented and defensible.",
    "placement": "Career support is capability-led: AI system-design practice, project-defence sessions where you are challenged on your own architecture decisions, mock interviews with practitioners, resume rewriting against target JDs, LinkedIn positioning and a GitHub audit. There is no job guarantee and no large hiring-partner drive. Outcome claims are provider-stated and not independently audited — ask for specifics in writing, as you should with every provider on this list.",
    "whoGetsHired": "Service-company engineers with 1–6 years moving into applied AI; CS freshers with genuine coding ability who will build consistently; and career switchers from data, testing or backend roles who can commit to a cohort rhythm. Learners who treat it as a video library do not convert.",
    "terms": [
      [
        "Format",
        "Live IST batches with recordings"
      ],
      [
        "Duration",
        "Approximately 6 months, cohort-based"
      ],
      [
        "Fees",
        "Mid-tier band, ₹40K–₹1.2L indicative"
      ],
      [
        "EMI",
        "Available; verify current terms"
      ],
      [
        "Bond",
        "None"
      ],
      [
        "Refund",
        "Verify window directly before paying"
      ]
    ],
    "pros": [
      "Curriculum reverse-engineered from live job descriptions rather than an academic syllabus",
      "Deepest coverage on this list of advanced RAG, agents and multi-agent orchestration",
      "Multi-framework agent teaching (LangChain/LangGraph, CrewAI, AutoGen, OpenAI Agents SDK) rather than a single-framework lock-in",
      "MCP and tool integration covered while most Indian competitors have not added it",
      "Deployment, evaluation and guardrails treated as core, not as an optional final module",
      "Learner-designed capstone that reads as individual work, not a cohort template",
      "Structured interview readiness: AI system design, project-defence drills, mock interviews",
      "Best cost per unit of hiring evidence in the ₹40K–₹1.2L band",
      "No bond and no guarantee contract to be constrained by"
    ],
    "cons": [
      "Smaller brand and alumni network than Scaler, upGrad or Great Learning — referral surface area is genuinely thinner",
      "Hiring-partner funnel is modest; there is no large structured placement drive",
      "No university-affiliated credential, so it does nothing for HR-gated promotions or visa files",
      "No job guarantee, so there is no contractual downside protection",
      "Cohort format punishes learners who need to disappear for weeks at a time",
      "No extended DSA or CS system-design track for product-company SDE loops",
      "Not a route into research or applied-science roles",
      "Outcome data is provider-stated rather than independently published"
    ],
    "verdict": "The best choice if your goal is an applied AI or GenAI engineering role and you are willing to be judged on what you have built rather than on what you have attended. It buys depth on exactly the competencies 2026 job descriptions concentrate on, at roughly a third of premium-bootcamp pricing. It is the wrong choice if you specifically need an accredited credential, a guarantee contract, a large placement drive, or a DSA-heavy preparation track for product-company SDE interviews.",
    "cta": "Explore the full AI & GenAI curriculum, projects and batch schedule →"
  },
  {
    "id": "review-scaler",
    "rank": 2,
    "name": "Scaler Academy — Data Science & ML / AI Track",
    "score": 85,
    "bestFor": "Freshers and 0–4 year engineers targeting premium product companies",
    "overview": "India's most established premium tech bootcamp. The AI/DS track sits inside a broader, CS-heavy program, and its genuine strength is placement infrastructure and interview conditioning rather than GenAI depth. You are buying a machine that gets people into interview rooms and drills them until they perform.",
    "curriculum": "Very strong on DSA, programming fundamentals, system design, statistics, classical ML, deep learning and NLP. GenAI coverage is present and expanding, but it is a component of a larger program rather than its centre. Advanced RAG, multi-agent systems, agent frameworks and MCP are limited relative to a dedicated GenAI program — Scaler updates frequently, so verify the current syllabus rather than relying on any published summary.",
    "projects": "Five to eight substantial projects, CS- and ML-weighted. They are strong material for interview conversation and demonstrate engineering maturity, but there are fewer deployed GenAI systems than a specialist program produces.",
    "placement": "The strongest and most transparent mechanism on this list: a large hiring-partner network, structured and repeated mock interviews, dedicated career coaching, and published placement reporting. Publishing outcome data at all is itself a differentiator in this market. Read the report's methodology — eligibility definitions and denominators — rather than the headline number.",
    "whoGetsHired": "Freshers and 0–4 year engineers with real coding aptitude and the stamina for an 11–18 month program alongside work. Premium outcomes concentrate among candidates who were already strong on entry.",
    "terms": [
      [
        "Format",
        "Live IST cohorts"
      ],
      [
        "Duration",
        "11–18 months"
      ],
      [
        "Fees",
        "₹3–4L indicative"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Bond",
        "None"
      ],
      [
        "Commitment",
        "High weekly hours"
      ]
    ],
    "pros": [
      "Best-in-class placement infrastructure and hiring-partner network in Indian ed-tech",
      "Excellent DSA and CS foundations that transfer to any engineering interview",
      "Large, active alumni network with real referral value",
      "Structured accountability measurably reduces dropout",
      "Genuine product-company outcomes, not only services placements",
      "Publishes outcome data, which almost no competitor does",
      "Interview conditioning is relentless and raises the ceiling of average candidates"
    ],
    "cons": [
      "Very expensive if your only goal is GenAI engineering",
      "11–18 months is a substantial opportunity cost for a working professional",
      "GenAI is a module set, not the programme's spine",
      "Significant curriculum time on DSA that a GenAI applied role does not require",
      "Pace is demanding for genuine beginners",
      "Premium outcomes concentrate among already-strong candidates, which the headline numbers obscure",
      "Limited production-RAG, agent-framework and MCP depth as of 2026"
    ],
    "verdict": "The right answer for a fresher or early-career engineer who wants a comprehensive tech-plus-AI transformation with the strongest placement infrastructure available, and who can afford both the money and the eleven-to-eighteen months. The wrong answer for a working professional who needs GenAI depth inside six months, or for anyone whose target JD reads “RAG, agents, deployment” rather than “SDE with ML exposure”.",
    "cta": "Verify current fees, duration and the latest placement report methodology with Scaler directly."
  },
  {
    "id": "review-upgrad",
    "rank": 3,
    "name": "upGrad — AI & ML Programs (IIIT-B / LJMU affiliated)",
    "score": 79,
    "bestFor": "Working professionals who need a recognised credential for an HR gate",
    "overview": "The largest university-affiliated online program provider in India. The product being sold is the credential plus the structure around it; the AI content is competent but follows academic revision cycles rather than the release cycle of the field.",
    "curriculum": "Python, statistics, classical ML, deep learning, NLP, computer vision and a GenAI/LLM component. Coverage of advanced RAG, agent frameworks and MCP is limited to absent across most tracks as of 2026. upGrad runs several distinct AI programs with materially different syllabi, so verify per program rather than per brand.",
    "projects": "Four to six academic-style projects plus a capstone. Documentation quality is decent and the structure encourages completion, but deployment focus is limited and the work reads as coursework rather than as production evidence.",
    "placement": "Structured career services, resume and interview preparation, and hiring events. Outcomes skew toward IT services, consulting and enterprise analytics rather than product-company AI engineering. Advertised transition and salary statistics are provider claims; treat them as such unless independently sourced.",
    "whoGetsHired": "Working professionals with 3+ years using the credential to move internally or laterally, particularly inside large enterprises where HR recognises the institutional affiliation.",
    "terms": [
      [
        "Format",
        "Live plus recorded, cohort-based"
      ],
      [
        "Duration",
        "8–18 months"
      ],
      [
        "Fees",
        "₹1.5–3.5L indicative"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Credential",
        "University certificate on completion"
      ],
      [
        "Bond",
        "None; verify refund window"
      ]
    ],
    "pros": [
      "Genuine academic affiliation with recognisable Indian institutional branding",
      "Strong structure and accountability for professionals who need external deadlines",
      "Established career services with real hiring-event volume",
      "Well-suited to internal promotion cases and appraisal documentation",
      "Large alumni base across Indian enterprises",
      "Strong learner-support operations and predictable delivery"
    ],
    "cons": [
      "Expensive relative to the applied skill delivered",
      "Curriculum updates lag the GenAI market by a meaningful margin",
      "Limited agent-framework, production-RAG and MCP coverage",
      "Heavy sales and counsellor follow-up is a widely reported friction",
      "Projects lean academic rather than production-shaped",
      "The credential's weight with product-company hiring managers is lower than the marketing implies"
    ],
    "verdict": "Choose it if the credential does specific work for you — an HR gate, an internal promotion committee, an employer reimbursement policy, or a career-switch narrative that needs institutional backing. Do not choose it if your goal is to be the strongest applied GenAI builder in the interview room; a specialist program at half the price will get you closer to that.",
    "cta": "Compare the exact program track and its current GenAI module list before enrolling."
  },
  {
    "id": "review-great-learning",
    "rank": 4,
    "name": "Great Learning — PGP in AI & ML (Great Lakes / UT Austin)",
    "score": 77,
    "bestFor": "Mid-career professionals layering AI onto existing domain expertise",
    "overview": "A mature, well-run program aimed at mid-career professionals, with a genuinely strong mentoring model and a recognisable international academic association. Delivery discipline is among the best in this market.",
    "curriculum": "Comprehensive classical ML and deep learning, NLP, computer vision, and a growing GenAI module. Depth on production RAG, agents and MCP is limited compared with GenAI-specialist programs — the GenAI content is an addition to a mature ML syllabus rather than a rebuild of it.",
    "projects": "Several guided projects plus a capstone. Mentor review is a real quality advantage and produces better-documented work than most competitors, though deployment emphasis remains modest.",
    "placement": "Established career services, resume clinics, interview preparation and hiring events. Outcomes skew to analytics, consulting and enterprise AI roles rather than product-company GenAI engineering.",
    "whoGetsHired": "Professionals with 4–12 years of experience adding AI capability to an existing domain — BFSI, retail, supply chain, telecom — rather than switching career track entirely.",
    "terms": [
      [
        "Format",
        "Weekend live sessions"
      ],
      [
        "Duration",
        "6–12 months"
      ],
      [
        "Fees",
        "₹1.5–3.5L indicative"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Credential",
        "Academic association certificate"
      ],
      [
        "Bond",
        "None; verify refund window"
      ]
    ],
    "pros": [
      "Strong mentor model with genuine practitioner interaction",
      "Well-structured for working professionals with weekend delivery",
      "Recognisable international academic association",
      "Good learner support and low administrative friction",
      "Solid classical ML foundation taught properly",
      "Highly effective for AI-plus-domain positioning inside an existing career"
    ],
    "cons": [
      "GenAI depth trails specialist programs noticeably",
      "Limited agent-framework and MCP coverage",
      "Expensive for the applied-GenAI outcome specifically",
      "Aggressive sales follow-up is commonly reported",
      "Capstones can be template-adjacent and lose differentiation value",
      "Less effective for a pure career switch into engineering roles"
    ],
    "verdict": "A good fit for an experienced professional layering AI onto domain expertise, where the mentoring and the academic association both do real work. A weaker fit for someone whose target job description says “GenAI Engineer — RAG, agents, deployment”, because the program will not take you deep enough on any of those three.",
    "cta": "Ask for the current GenAI module breakdown and mentor allocation before committing."
  },
  {
    "id": "review-intellipaat",
    "rank": 5,
    "name": "Intellipaat — Advanced AI / GenAI (IIT-affiliated tracks)",
    "score": 74,
    "bestFor": "Working professionals wanting broad AI exposure at mid-tier cost",
    "overview": "A mid-priced provider offering IIT-affiliated certification tracks with substantial live instruction hours and an active job-assistance operation. Breadth is the strategy.",
    "curriculum": "Broad — Python, ML, deep learning, NLP, and increasingly GenAI including LLMs, prompt engineering and introductory RAG. Depth is inconsistent across tracks; advanced RAG, multi-agent systems and MCP are thin or absent in most of them. Ask for the module-level syllabus of the specific track, not the brand-level brochure.",
    "projects": "Multiple guided projects, with quality varying by track and batch. Deployment coverage is limited, and project work is often templated across a cohort.",
    "placement": "Active job assistance with resume preparation and interview scheduling. The volume of interview opportunities is a stated strength; role quality varies considerably, and outcome data is provider-reported.",
    "whoGetsHired": "Working professionals in IT services and enterprise environments seeking a lateral AI move at moderate cost, usually into analytics-adjacent or AI-support roles first.",
    "terms": [
      [
        "Format",
        "Live plus self-paced"
      ],
      [
        "Duration",
        "6–12 months"
      ],
      [
        "Fees",
        "₹80K–2.5L indicative by track"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Access",
        "Lifetime content access on many tracks"
      ],
      [
        "Bond",
        "None; verify refund window"
      ]
    ],
    "pros": [
      "IIT-brand association at well below IIT-executive pricing",
      "Substantial live instruction hours for the price band",
      "Active job-assistance operation with real interview volume",
      "Broad curriculum breadth across ML, DL and GenAI",
      "Frequent batch starts, so you rarely wait to begin",
      "Lifetime content access on many tracks"
    ],
    "cons": [
      "Breadth over depth — many topics are covered shallowly",
      "GenAI depth is insufficient for competitive GenAI engineering roles",
      "The IIT association is a certification partnership, not an IIT degree, and should be understood that way",
      "Heavy sales pressure is widely reported",
      "Instructor quality varies noticeably by batch",
      "Project work is often templated, limiting portfolio differentiation"
    ],
    "verdict": "Reasonable value for a working professional who wants broad AI exposure with a recognisable brand association at mid-tier cost, especially if an employer is contributing. Not sufficient on its own for a competitive applied-GenAI role — you would need substantial self-directed building layered on top, at which point a specialist program may cost less in total time.",
    "cta": "Request the module-level syllabus for the exact track before paying."
  },
  {
    "id": "review-talentsprint",
    "rank": 6,
    "name": "TalentSprint — IIT / IISc AI & ML Programs",
    "score": 73,
    "bestFor": "Senior professionals seeking institutional credibility for AI leadership",
    "overview": "A delivery partner for executive AI/ML programs from top Indian institutions. The product is institutional prestige and a senior peer cohort — and on those terms it delivers well.",
    "curriculum": "Academically rigorous ML and deep learning foundations taught by institute faculty, with strong conceptual depth. Applied GenAI engineering — production RAG, agent frameworks, MCP, deployment — is comparatively light and varies by program cohort.",
    "projects": "Academic and research-flavoured projects plus a capstone. Strong for understanding and for strategy conversations; weaker as production evidence in an engineering interview.",
    "placement": "Limited by design. These are executive-education programs, not placement bootcamps. Career support is primarily network and brand rather than a hiring funnel, and the marketing is comparatively honest about this.",
    "whoGetsHired": "Senior professionals, managers and technical leads using the credential for internal mobility, consulting credibility, or a move into AI leadership rather than hands-on engineering.",
    "terms": [
      [
        "Format",
        "Weekend / hybrid with campus immersion"
      ],
      [
        "Duration",
        "8–12 months"
      ],
      [
        "Fees",
        "₹2.5–4.5L indicative"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Credential",
        "Institute-issued certificate"
      ],
      [
        "Commitment",
        "Significant alongside a senior role"
      ]
    ],
    "pros": [
      "Genuine top-tier institutional branding that survives scrutiny",
      "Faculty-taught rigour and real conceptual depth",
      "Strong senior peer cohort with lasting network value",
      "Excellent for AI leadership and strategy positioning",
      "Campus immersion adds network value that online-only programs cannot",
      "Well-run delivery operations with low administrative friction"
    ],
    "cons": [
      "Expensive, particularly for hands-on outcomes",
      "Academically weighted rather than production-weighted",
      "Limited placement mechanism by design",
      "Light on the 2026 applied GenAI stack — agents, MCP, production retrieval",
      "Poor fit for freshers or anyone needing a first job",
      "Time commitment is significant alongside a senior role"
    ],
    "verdict": "Excellent if you already have seniority and need institutional credibility to move into AI leadership, technical strategy or consulting. A poor use of ₹3L+ if your goal is a first hands-on AI engineering job — the program is not built to produce that outcome and does not claim to be.",
    "cta": "Confirm the current cohort's applied GenAI module list before enrolling."
  },
  {
    "id": "review-simplilearn",
    "rank": 7,
    "name": "Simplilearn — PG Program in AI & ML (Purdue / IBM)",
    "score": 70,
    "bestFor": "Enterprise and IT-services professionals on employer-funded learning",
    "overview": "A high-volume global provider with corporate-recognised certification partnerships. It is strongest inside enterprise and IT-services contexts where the badge is recognised by HR and L&D teams.",
    "curriculum": "Structured coverage of Python, statistics, ML, deep learning, NLP and a GenAI component. Breadth is good and sequencing is predictable; depth is moderate. Agent frameworks, production RAG and MCP are largely absent.",
    "projects": "Several guided projects and a capstone, mostly notebook-level with limited deployment. They demonstrate completion rather than engineering capability.",
    "placement": "Career services and job assistance exist but are lighter than the premium bootcamps. Outcomes skew to IT services and enterprise analytics.",
    "whoGetsHired": "IT-services and enterprise professionals using the certificate for an internal role change, client-facing credibility, or L&D-funded upskilling.",
    "terms": [
      [
        "Format",
        "Live classes plus self-paced"
      ],
      [
        "Duration",
        "Approximately 11 months"
      ],
      [
        "Fees",
        "₹1.5–2.5L indicative"
      ],
      [
        "EMI",
        "Available"
      ],
      [
        "Credential",
        "Partner-branded certificate"
      ],
      [
        "Bond",
        "None; verify refund window"
      ]
    ],
    "pros": [
      "Widely recognised certification partnerships inside enterprises",
      "Well-structured and predictable delivery",
      "Good fit for corporate-sponsored learning budgets",
      "Strong breadth for generalists and managers",
      "Frequent cohorts and flexible scheduling",
      "Established global operations with mature support"
    ],
    "cons": [
      "GenAI depth is insufficient for engineering roles",
      "Projects are not portfolio-differentiating",
      "Heavily marketing-driven with aggressive follow-up",
      "Instructor variability across batches",
      "Price is high relative to the applied capability delivered",
      "Career support is thinner than the fee implies"
    ],
    "verdict": "Defensible if your employer is paying and the certificate is recognised internally — in that context it is a low-risk, well-organised way to formalise AI knowledge. Hard to justify from personal funds if the goal is a competitive AI engineering job, because the portfolio it produces will not compete with a specialist program's output.",
    "cta": "Check whether your employer's L&D budget covers it before considering personal payment."
  },
  {
    "id": "review-deeplearning-ai",
    "rank": 8,
    "name": "DeepLearning.AI + Coursera Stack (Andrew Ng)",
    "score": 68,
    "bestFor": "Highly self-directed learners with near-zero budget",
    "overview": "The best pure education on this list and the worst job mechanism. The Machine Learning Specialization, the Deep Learning Specialization and the shorter GenAI courses are outstanding teaching by any standard — they simply do not include any of the machinery that converts learning into employment.",
    "curriculum": "Excellent conceptual foundations in ML and deep learning, and genuinely strong LLM fundamentals. GenAI topics are spread across many short courses rather than assembled into one coherent program. Production RAG, multi-agent systems, MCP and deployment are thin to absent.",
    "projects": "Lab-based exercises inside the platform. Excellent for learning, weak as hiring evidence, because they are identical across hundreds of thousands of learners and a reviewer recognises them instantly.",
    "placement": "None. Certificates only. There is no mentorship, no interview preparation and no employer connection of any kind.",
    "whoGetsHired": "Highly self-directed learners who use these courses as the knowledge layer and then independently build, deploy and document four to six original systems on top. This path genuinely works — and it is far harder than it looks, with a very high dropout rate for unsupported self-study.",
    "terms": [
      [
        "Format",
        "Fully self-paced"
      ],
      [
        "Duration",
        "Learner-determined"
      ],
      [
        "Fees",
        "Free to audit"
      ],
      [
        "Subscription",
        "≈₹2,500–4,000/month for Coursera Plus"
      ],
      [
        "Credential",
        "Individual certificates available"
      ],
      [
        "Support",
        "None"
      ]
    ],
    "pros": [
      "World-class instruction and exceptional conceptual clarity",
      "Near-zero cost, with free auditing on most content",
      "Globally recognised instructor and course lineage",
      "Fully flexible pace around a job",
      "Constantly expanding short-course library on current GenAI topics",
      "No financial risk whatsoever"
    ],
    "cons": [
      "No accountability, and very high dropout among self-studying learners",
      "No mentorship or doubt resolution when you are genuinely stuck",
      "Lab projects are not differentiated portfolio evidence",
      "No interview preparation and no career support",
      "GenAI content is fragmented across many short courses rather than sequenced",
      "No Indian job-market context, pricing or hiring-process guidance",
      "The certificate carries little screening weight in 2026"
    ],
    "verdict": "The correct choice if your budget is genuinely near zero and you have the discipline to build independently without anyone checking. Pair it with a public build habit — ship something every three weeks, write it up, put it where people can see it — or it will not convert into a job no matter how well you understand the material.",
    "cta": "Start free, then commit to a public build cadence from week three."
  },
  {
    "id": "review-almabetter",
    "rank": 9,
    "name": "AlmaBetter / Masai — Pay-After-Placement Programs",
    "score": 64,
    "bestFor": "Freshers with no upfront capital and full-time availability",
    "overview": "Deferred-payment and income-share models aimed at freshers with no upfront capital. The model aligns incentives in principle — the provider is paid when you are employed — and the contract terms determine whether it does so in practice.",
    "curriculum": "Structured full-time programs covering programming, data, ML, and increasingly GenAI. Depth on advanced RAG, agents and MCP is limited; the emphasis is employability breadth and job-readiness drilling rather than specialist engineering capability.",
    "projects": "Multiple guided projects, frequently cohort-templated, which limits their differentiation value in a competitive applicant pool.",
    "placement": "Central to the model: dedicated placement teams, hiring drives and structured interview preparation. Roles skew toward analyst, junior engineering and IT-services positions rather than premium AI engineering.",
    "whoGetsHired": "Freshers and recent graduates who can commit full-time for 6–11 months and who will accept an entry-level first role as a genuine starting point.",
    "terms": [
      [
        "Format",
        "Full-time intensive"
      ],
      [
        "Duration",
        "6–11 months"
      ],
      [
        "Upfront fee",
        "₹0 or minimal"
      ],
      [
        "Repayment",
        "ISA or deferred fee above a salary threshold"
      ],
      [
        "Contract",
        "Read salary floor, ceiling and duration caps"
      ],
      [
        "Bond",
        "Effectively contractual — read carefully"
      ]
    ],
    "pros": [
      "Removes the upfront financial barrier entirely",
      "Incentives partly aligned with actually placing you",
      "Strong structure and daily accountability",
      "Genuine outcomes for freshers with no other viable route",
      "Active placement operations with real hiring-drive volume",
      "Good peer cohort energy in a full-time format"
    ],
    "cons": [
      "ISA and deferred-fee agreements carry salary thresholds, repayment ceilings, duration caps and penalty clauses that can total more than an upfront fee — read the contract line by line",
      "Full-time commitment is impossible alongside a job",
      "Placed roles are frequently not AI-specific",
      "AI and GenAI depth is limited relative to specialist programs",
      "Pressure to accept the first offer is commonly reported",
      "Cohort-templated projects limit portfolio differentiation",
      "Outcome data is provider-reported"
    ],
    "verdict": "A legitimate route for a fresher with no capital and genuine full-time availability, provided the contract is read line by line — ideally with someone else reading it too, away from the sales call. It is not a route to a specialist GenAI engineering role, and expecting one from it is the most common disappointment reported by graduates.",
    "cta": "Request the full ISA or deferred-fee agreement in writing before you enrol."
  },
  {
    "id": "review-pw-guvi",
    "rank": 10,
    "name": "PW Skills / GUVI (IIT-M incubated) — Budget AI Programs",
    "score": 60,
    "bestFor": "Students and Tier-2/3 learners taking a first structured step",
    "overview": "The most affordable structured options in the Indian market, with genuine accessibility advantages: low price, vernacular delivery (GUVI offers Tamil, Telugu and Hindi; PW Skills offers Hindi) and large, supportive learner communities. These are real advantages that the premium market ignores.",
    "curriculum": "Python, data handling, ML basics, introductory deep learning, GenAI concepts, prompt engineering and basic LLM API usage. Advanced RAG, agents, frameworks, fine-tuning, MCP and deployment are largely absent.",
    "projects": "Three to five entry-level projects. Useful for learning and for confirming interest; not competitive as hiring evidence for AI engineering roles.",
    "placement": "Growing but limited — primarily resume support and job boards, with some hiring events. Not a placement mechanism in the sense the premium bootcamps use the word.",
    "whoGetsHired": "Students and Tier-2/3 learners using these programs as a first structured step, typically converting into data-adjacent or entry analyst roles rather than AI engineering roles directly.",
    "terms": [
      [
        "Format",
        "Mostly recorded with some live sessions"
      ],
      [
        "Duration",
        "3–8 months"
      ],
      [
        "Fees",
        "₹5,000–₹35,000 indicative"
      ],
      [
        "Languages",
        "Hindi, Tamil, Telugu (varies)"
      ],
      [
        "EMI",
        "Rarely needed at this price"
      ],
      [
        "Bond",
        "None"
      ]
    ],
    "pros": [
      "Genuinely affordable and low financial risk",
      "Vernacular delivery is a real and underrated accessibility win",
      "Large, active learner communities",
      "Excellent for testing whether you enjoy the field before committing capital",
      "Trusted consumer brands in the Indian student market",
      "Reasonable foundations in Python and data handling"
    ],
    "cons": [
      "Insufficient depth for competitive AI roles in 2026",
      "Entry-level projects that do not function as hiring evidence",
      "Limited live instruction and doubt resolution",
      "Weak placement mechanism",
      "Large cohorts limit individual attention",
      "The certificate carries little screening weight"
    ],
    "verdict": "An excellent ₹10,000 first step and a poor ₹10,000 final step. Use it to build foundations, confirm your interest and prove to yourself that you will show up — then layer a deeper program or serious self-directed building on top. Do not expect it to produce an AI engineering job on its own, and be sceptical of any marketing that suggests it will.",
    "cta": "Treat it as step one, and budget for the depth layer that follows."
  }
];

function ScoreRing({ score }: { score: number }) {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <svg viewBox="0 0 36 36" className="absolute h-16 w-16 -rotate-90" aria-hidden>
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
        <circle
          cx="18"
          cy="18"
          r="15.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${score} 100`}
          className="text-primary"
        />
      </svg>
      <span className="font-display text-sm font-bold text-foreground">{score}</span>
    </div>
  );
}

function Part({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="mb-1.5 text-[0.7rem] font-bold tracking-[0.16em] text-primary uppercase">{label}</p>
      <div className="text-[0.97rem] leading-[1.72] text-foreground/80">{children}</div>
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [open, setOpen] = useState(r.rank === 1);
  return (
    <Reveal>
      <article id={r.id} className="surface-card scroll-mt-28 overflow-hidden">
        <div className="flex flex-wrap items-center gap-4 p-6">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-base font-bold text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            {String(r.rank).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg leading-tight font-semibold text-foreground sm:text-xl">{r.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Best for: <span className="text-foreground/80">{r.bestFor}</span>
            </p>
          </div>
          <ScoreRing score={r.score} />
        </div>

        <div className="px-6 pb-6">
          <p className="text-[0.99rem] leading-[1.75] text-foreground/85">{r.overview}</p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {open ? "Hide the full review" : "Read the full nine-part review"}
            <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`} fill="currentColor" aria-hidden>
              <path d="M7 4l6 6-6 6z" />
            </svg>
          </button>

          {open ? (
            <div className="mt-5 space-y-4">
              <Part label="Curriculum — job-relevance audit">{r.curriculum}</Part>
              <Part label="Projects & portfolio output">{r.projects}</Part>
              <Part label="Placement & career support — what's real">{r.placement}</Part>
              <Part label="Who gets hired from this course">{r.whoGetsHired}</Part>
              <Part label="Format, duration, pricing & terms">
                <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {r.terms.map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="shrink-0 font-semibold text-foreground/70">{k}:</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Part>
              <div className="grid gap-4 border-t border-border pt-4 md:grid-cols-2">
                <div className="rounded-xl border border-success/30 bg-success/10 p-4">
                  <p className="mb-2 text-[0.7rem] font-bold tracking-[0.16em] uppercase text-foreground/70">Pros</p>
                  <ul className="space-y-2 text-[0.93rem] leading-[1.6] text-foreground/85">
                    {r.pros.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-warning/40 bg-warning/10 p-4">
                  <p className="mb-2 text-[0.7rem] font-bold tracking-[0.16em] uppercase text-foreground/70">Cons</p>
                  <ul className="space-y-2 text-[0.93rem] leading-[1.6] text-foreground/85">
                    {r.cons.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Part label="Verdict">
                <p>{r.verdict}</p>
                <p className="mt-3 text-sm font-semibold text-primary">{r.cta}</p>
              </Part>
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Section 7 · Full reviews"
      title="In-Depth Reviews: The 10 Best AI Courses for Getting a Job in 2026"
    >
      <P>
        Every program below is assessed against the same nine-part template — positioning, a
        job-relevance curriculum audit, portfolio output, the actual placement mechanism, the learner
        profile it converts for, format and terms, pros, cons and a verdict. No review is shortened
        because the page is getting long, and every course gets real cons, including the one ranked
        first.
      </P>
      <Callout tone="warn" title="Accuracy note">
        <p>
          Fees, durations, university affiliations and outcome figures are <B>indicative bands</B>,
          not quotations. Providers change pricing, partnerships and syllabi frequently. Verify
          current terms — including GST, EMI structure, refund window and module-level syllabus —
          directly with each provider before paying anything.
        </p>
      </Callout>
      <div className="space-y-6">
        {reviews.map((r) => (
          <ReviewCard key={r.id} r={r} />
        ))}
      </div>

      <Callout title="Honourable mentions — supplements, not substitutes">
        <p>
          <B>AWS Certified Machine Learning</B>, <B>Microsoft Azure AI Engineer Associate</B>,{" "}
          <B>Google Cloud Professional ML Engineer</B>, <B>NVIDIA DLI</B> and the{" "}
          <B>Databricks GenAI Engineer</B> credential are genuinely useful resume signals for
          enterprise, GCC and cloud-heavy roles — and are often the exact keyword an enterprise JD
          screens for. But they certify tool proficiency within one vendor ecosystem rather than
          end-to-end build capability, so treat them as a pairing with a build-focused program, not a
          replacement for one.
        </p>
        <p>
          <B>fast.ai</B> and the better-rated <B>Udemy</B> GenAI courses work well as low-cost depth
          supplements. For Udemy specifically, check the last-updated date before purchase: a highly
          rated course from 2023 is teaching a framework API that has since changed.
        </p>
      </Callout>
    </Section>
  );
}
