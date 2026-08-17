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
  { href: "#short-answer", label: "The short answer" },
  { href: "#market", label: "2026 job market reality" },
  { href: "#skills", label: "Skills that get hired" },
  { href: "#framework", label: "Evaluation framework" },
  { href: "#rankings", label: "Rankings & comparison" },
  { href: "#matrix", label: "Best course for you" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <nav
          aria-label="Table of contents"
          className="mb-12 rounded-lg border border-border bg-card p-5"
          style={{ boxShadow: "var(--shadow-paper)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            On this page
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {toc.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="text-[0.95rem] font-medium text-primary underline-offset-4 hover:underline"
                >
                  {t.label}
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

        <footer className="mt-16 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
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
