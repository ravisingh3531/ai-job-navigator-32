import { B, Callout, ExperienceNote, H3, P, Section, UL } from "./ui";
import { Reveal } from "./Reveal";

const flags: Array<[string, string]> = [
  ['"100% job guarantee" without a written, readable contract', "A guarantee that exists only in a counsellor's WhatsApp message is not a guarantee. If the terms cannot be sent to you as a document before payment, there are no terms."],
  ["Placement claims with no methodology", "“94% placed” means nothing without a denominator. Placed out of how many enrolled, over what window, and what counts as a placement — any offer, any salary, any role?"],
  ['"Average CTC" quoted without median, range or sample size', "A handful of outlier offers can lift an average far above what a typical graduate sees. Ask for the median and the bottom quartile; refusal is itself an answer."],
  ["Counsellor pressure tactics", "Expiring discounts, “last two seats”, same-day decision demands. Real programs run new cohorts continuously and can wait a week for you to think."],
  ["Refusal to share the module-level syllabus before payment", "A topic-title list is marketing. A module-level syllabus is a product specification. If you cannot see the specification, you cannot evaluate the product."],
  ["No named instructors with verifiable profiles", "“Industry experts from top companies” is not a credential. Names you can look up, with work you can verify, are."],
  ["Classical ML rebranded as a GenAI course", "If the syllabus is mostly regression, clustering and a CNN project with one LLM module bolted on, it is a 2021 course with 2026 marketing."],
  ["No deployed projects — everything lives in a notebook", "Notebooks demonstrate that code ran once on your laptop. Hiring managers screen for systems that survive being used by someone else."],
  ["ISA or deferred contracts with vague placement definitions", "Look for the salary threshold, the repayment ceiling, the maximum duration, and what happens if you take a job the provider did not source."],
  ["Testimonials you cannot find or verify on LinkedIn", "Named alumni in current roles are checkable in ninety seconds. First-name-only testimonials with stock photographs are not evidence."],
];

const clauses: Array<[string, string]> = [
  ["Definition of “placement”", "Role type, CTC floor, location and company category. A ₹3.5 LPA support role in another city may legally discharge the obligation."],
  ["Eligibility conditions for any guarantee", "Attendance percentage, assessment scores, minimum weekly applications, mandatory mock interviews — miss one and the guarantee lapses."],
  ["Refund window and forfeiture triggers", "How many days, from enrolment or from batch start, and which actions void the right entirely."],
  ["Whether refunds are net of GST and fees", "GST is frequently non-refundable, and processing or platform fees may be deducted before the balance returns."],
  ["Loan and EMI structure", "Critically: does the loan survive your withdrawal from the course? In many no-cost-EMI arrangements it does."],
  ["Bond or lock-in period", "Any obligation to stay, to accept placement assistance exclusively, or to repay on early exit."],
  ["Offer acceptance and rejection limits", "How many offers you may decline before the guarantee is treated as satisfied or void."],
  ["Data and IP terms on your project work", "Whether the provider claims rights over what you build, and whether you may publish it publicly on GitHub."],
];

export function RedFlags() {
  return (
    <Section
      id="red-flags"
      eyebrow="Consumer protection · Section 9"
      title="How to Avoid Getting Scammed: Red Flags in AI Course Marketing (2026)"
    >
      <P>
        Indian AI education is a large, lightly regulated market with high emotional stakes and
        commission-driven sales. Most providers are legitimate; the failure mode is rarely outright
        fraud and almost always a gap between what marketing implies and what the contract obliges.
        The ten signals below are the ones worth walking away over, and the clause list after them is
        what to read before any money moves.
      </P>

      <H3 id="rf-ten">Ten red flags</H3>
      <div className="grid gap-4 md:grid-cols-2">
        {flags.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 70}>
            <div className="surface-card h-full border-l-4 border-l-warning/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-warning/20 text-sm font-bold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">{t}</h4>
                  <p className="mt-1.5 text-[0.94rem] leading-[1.65] text-foreground/75">{d}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <H3 id="rf-contract">The contract clauses to read before you pay</H3>
      <UL>
        {clauses.map(([t, d]) => (
          <li key={t}>
            <B>{t}.</B> {d}
          </li>
        ))}
      </UL>

      <Callout tone="warn" title="The one practical instruction">
        <p>
          Ask for the contract in writing before payment. Read it away from the sales call, on a
          different day, ideally with someone else reading it too. If any counsellor discourages
          this — by framing it as unnecessary, by claiming the price changes tomorrow, or by
          offering to “explain it over a call” instead of sending it — treat that as
          disqualifying, regardless of how good the course looks.
        </p>
      </Callout>
    </Section>
  );
}
