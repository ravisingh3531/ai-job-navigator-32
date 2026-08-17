import { useEffect, useState } from "react";

export type TocItem = { href: string; label: string; children?: TocItem[] };

export const tocItems: TocItem[] = [
  { href: "#top", label: "Overview" },
  { href: "#short-answer", label: "The short answer" },
  { href: "#market", label: "Reality check" },
  { href: "#skills", label: "Deep dive: skill stack" },
  { href: "#framework", label: "Evaluation framework" },
  {
    href: "#rankings",
    label: "Reviews",
    children: [
      { href: "#review-logicmojo", label: "LogicMojo" },
      { href: "#review-scaler", label: "Scaler" },
      { href: "#review-upgrad", label: "upGrad" },
      { href: "#review-great-learning", label: "Great Learning" },
      { href: "#review-intellipaat", label: "Intellipaat" },
      { href: "#review-talentsprint", label: "TalentSprint" },
      { href: "#review-simplilearn", label: "Simplilearn" },
      { href: "#review-deeplearning-ai", label: "DeepLearning.AI" },
      { href: "#review-almabetter", label: "AlmaBetter / Masai" },
      { href: "#review-pw-guvi", label: "PW Skills / GUVI" },
    ],
  },
  { href: "#quiz", label: "Course-fit quiz" },
  { href: "#matrix", label: "Best course for you" },
  { href: "#faq", label: "FAQs" },
];

const flat = tocItems.flatMap((i) => [i, ...(i.children ?? [])]);

function useActiveSection() {
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => {
      let current = "#top";
      for (const item of flat) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= 140) current = item.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function StickyToc() {
  const active = useActiveSection();
  const [openReviews, setOpenReviews] = useState(false);

  return (
    <>
      {/* Mobile / tablet: sticky top strip */}
      <nav
        aria-label="Table of contents"
        className="sticky top-0 z-40 -mx-5 mb-8 border-b border-border/70 bg-background/85 px-5 py-2.5 backdrop-blur-xl xl:hidden"
      >
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tocItems.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                active === t.href || t.children?.some((c) => c.href === active)
                  ? "border-primary/30 bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Desktop: sticky side rail */}
      <nav
        aria-label="Table of contents"
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] w-64 shrink-0 overflow-y-auto pr-2 xl:block [scrollbar-width:thin]"
      >
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
          On this page
        </p>
        <ul className="space-y-0.5 border-l border-border">
          {tocItems.map((t) => {
            const isActive = active === t.href;
            const inReviews = !!t.children?.some((c) => c.href === active);
            return (
              <li key={t.href}>
                <div className="flex items-center">
                  <a
                    href={t.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`-ml-px flex-1 border-l-2 py-1.5 pl-3 text-[0.9rem] leading-snug transition-all ${
                      isActive || inReviews
                        ? "border-primary font-semibold text-primary"
                        : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {t.label}
                  </a>
                  {t.children ? (
                    <button
                      type="button"
                      onClick={() => setOpenReviews((v) => !v)}
                      aria-expanded={openReviews}
                      aria-label="Toggle course reviews"
                      className="rounded-md p-1 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-3.5 w-3.5 transition-transform ${openReviews ? "rotate-90" : ""}`}
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M7 4l6 6-6 6z" />
                      </svg>
                    </button>
                  ) : null}
                </div>
                {t.children && (openReviews || inReviews) ? (
                  <ul className="mb-1 space-y-0.5">
                    {t.children.map((c) => (
                      <li key={c.href}>
                        <a
                          href={c.href}
                          className={`-ml-px block border-l-2 py-1 pl-6 text-[0.84rem] transition-all ${
                            active === c.href
                              ? "border-primary font-semibold text-primary"
                              : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
