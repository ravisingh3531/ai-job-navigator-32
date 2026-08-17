import { createFileRoute } from "@tanstack/react-router";

import { AnswerBox, Hero, Intro } from "@/components/article/Hero";
import { MarketReality } from "@/components/article/MarketReality";
import { Skills } from "@/components/article/Skills";
import { Framework } from "@/components/article/Framework";
import { Rankings } from "@/components/article/Rankings";
import { Matrix } from "@/components/article/Matrix";
import { Reviews } from "@/components/article/Reviews";
import { Quiz } from "@/components/article/Quiz";
import { Faq, faqs } from "@/components/article/Faq";
import { StickyToc } from "@/components/article/Toc";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="min-h-screen scroll-mt-24 bg-background">
      <Hero />
      <div className="mx-auto flex max-w-[100rem] flex-col justify-center gap-12 xl:flex-row px-5 py-12 sm:px-8 sm:py-16">
        <StickyToc />
        <div className="w-full max-w-4xl min-w-0">
          <article>
            <Intro />
            <AnswerBox />
            <MarketReality />
            <Skills />
            <Framework />
            <Rankings />
            <Reviews />
            <Quiz />
            <Matrix />
            <Faq />
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
      </div>
    </main>
  );
}
