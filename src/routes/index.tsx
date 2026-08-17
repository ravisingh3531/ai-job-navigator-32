import { createFileRoute } from "@tanstack/react-router";

import { AnswerBox, Hero, Intro } from "@/components/article/Hero";
import { MarketReality } from "@/components/article/MarketReality";
import { Skills } from "@/components/article/Skills";
import { Framework } from "@/components/article/Framework";
import { Rankings } from "@/components/article/Rankings";
import { Matrix } from "@/components/article/Matrix";

const title = "Which AI Course Is Best to Get a Job in 2026? (India Guide)";
const description =
  "A hiring-first comparison of India's top 10 AI courses in 2026 — ranked on job-description alignment, portfolio output, placement mechanism, cost and realistic timelines.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const toc = [
  { href: "#short-answer", label: "The short answer", n: "01" },
  { href: "#market", label: "2026 job market reality", n: "02" },
  { href: "#skills", label: "Skills that get hired", n: "03" },
  { href: "#framework", label: "Evaluation framework", n: "04" },
  { href: "#rankings", label: "Rankings & comparison", n: "05" },
  { href: "#matrix", label: "Best course for you", n: "06" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Table of contents" className="surface-card mb-14 p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">On this page</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {toc.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:border-primary/20 hover:bg-primary-soft"
                >
                  <span className="font-display text-xs font-bold text-primary/60 transition-colors group-hover:text-primary">
                    {t.n}
                  </span>
                  <span className="text-[0.97rem] font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    {t.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article>
          <Intro />
          <AnswerBox />
          <MarketReality />
          <Skills />
          <Framework />
          <Rankings />
          <Matrix />
        </article>

        <footer className="mt-20 rounded-2xl border border-border bg-secondary/60 p-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Prices, syllabi and placement policies change frequently. Verify current fees, GST, EMI
            terms, refund windows and curriculum coverage directly with each provider before
            enrolling. Scores reflect the author's assessment using the disclosed framework, not an
            objective measurement.
          </p>
        </footer>
      </div>
    </main>
  );
}
