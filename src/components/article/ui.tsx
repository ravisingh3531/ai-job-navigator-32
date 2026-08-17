import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 mt-16 pt-16">
      <Reveal>
        <div className="mb-8">
          <div className="mb-6 h-px w-full bg-gradient-to-r from-primary/45 via-border to-transparent" />
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-4 text-3xl leading-[1.15] font-bold text-foreground sm:text-[2.5rem]">
            {title}
          </h2>
        </div>
      </Reveal>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 flex items-start gap-3 pt-6 text-xl font-semibold text-foreground sm:text-2xl"
    >
      <span
        aria-hidden
        className="mt-2.5 h-3 w-3 shrink-0 rounded-sm bg-gradient-to-br from-primary to-primary-glow"
      />
      <span>{children}</span>
    </h3>
  );
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="text-base font-semibold text-foreground sm:text-lg">{children}</h4>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.04rem] leading-[1.8] text-foreground/80">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-[1.75] text-foreground/90 sm:text-[1.3rem] sm:leading-[1.65]">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-4 pl-1 text-[1.02rem] leading-[1.75] text-foreground/80 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:top-[0.6em] [&>li]:before:left-0 [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-gradient-to-br [&>li]:before:from-primary [&>li]:before:to-primary-glow [&>li]:before:ring-4 [&>li]:before:ring-primary/10">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-[1.02rem] leading-[1.75] text-foreground/80 marker:font-semibold marker:text-primary">
      {children}
    </ol>
  );
}

export function Callout({
  tone = "default",
  title,
  children,
}: {
  tone?: "default" | "warn" | "ink";
  title?: string;
  children: ReactNode;
}) {
  const tones = {
    default: {
      wrap: "border-primary/20 bg-primary-soft text-foreground",
      chip: "bg-primary text-primary-foreground",
      label: "Note",
    },
    warn: {
      wrap: "border-warning/40 bg-warning/10 text-foreground",
      chip: "bg-warning text-ink",
      label: "Caution",
    },
    ink: {
      wrap: "border-transparent text-ink-foreground",
      chip: "bg-primary-glow text-ink",
      label: "Key insight",
    },
  } as const;
  const t = tones[tone];
  return (
    <Reveal>
      <aside
        className={`relative overflow-hidden rounded-2xl border p-6 sm:p-7 ${t.wrap}`}
        style={
          tone === "ink"
            ? { background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }
            : { boxShadow: "var(--shadow-paper)" }
        }
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary-glow"
        />
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] uppercase ${t.chip}`}
        >
          {t.label}
        </span>
        {title ? <p className="mt-3 font-display text-lg font-semibold sm:text-xl">{title}</p> : null}
        <div className="mt-3 space-y-3 text-[1rem] leading-[1.75] opacity-95">{children}</div>
      </aside>
    </Reveal>
  );
}

export function TableCard({
  caption,
  head,
  rows,
  dense,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
  dense?: boolean;
}) {
  const pad = dense ? "px-3.5 py-2.5" : "px-4 py-3.5";
  return (
    <Reveal>
      <figure className="my-9">
        <figcaption className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-primary uppercase">
          <span aria-hidden className="h-px w-6 bg-primary/50" />
          {caption}
        </figcaption>
        <div
          className="overflow-x-auto rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-paper)" }}
        >
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr
                className="text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {head.map((h) => (
                  <th key={h} className={`${pad} font-semibold whitespace-nowrap`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className={`transition-colors hover:bg-primary-soft ${i % 2 ? "bg-secondary/45" : ""}`}
                >
                  {r.map((c, j) => (
                    <td
                      key={j}
                      className={`${pad} border-t border-border align-top leading-[1.6] ${
                        j === 0 ? "font-medium text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted-foreground sm:hidden">Swipe the table to see more →</p>
      </figure>
    </Reveal>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

/**
 * First-person author note — carries the "Experience" and "Expertise"
 * signals of Google's E-E-A-T framework in-line with the content.
 */
export function ExperienceNote({
  label = "From my own hiring desk",
  who = "Written by the lead analyst · 11 yrs in engineering hiring · 6 yrs shipping ML/LLM systems",
  children,
  delay = 0,
}: {
  label?: string;
  who?: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <aside
        className="relative my-8 overflow-hidden rounded-2xl border border-primary/25 bg-card p-5 sm:p-6"
        style={{ boxShadow: "var(--shadow-paper)" }}
      >
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1.5"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="flex items-start gap-4 pl-2">
          <span
            aria-hidden
            className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground sm:flex"
            style={{ background: "var(--gradient-brand)" }}
          >
            AN
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-bold tracking-[0.16em] text-primary uppercase">
              {label}
            </p>
            <div className="mt-2 space-y-3 text-[1rem] leading-[1.75] text-foreground/85 italic">
              {children}
            </div>
            <p className="mt-3 text-xs text-muted-foreground not-italic">{who}</p>
          </div>
        </div>
      </aside>
    </Reveal>
  );
}

/** Compact provenance strip: where a claim came from (Trustworthiness). */
export function EvidenceStrip({ items }: { items: string[] }) {
  return (
    <Reveal>
      <div className="my-6 flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
            {i}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="surface-card h-full p-5">
        <p
          className="font-display text-3xl font-bold"
          style={{
            background: "var(--gradient-brand)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {value}
        </p>
        <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{label}</p>
      </div>
    </Reveal>
  );
}

export function NoteCard({
  index,
  title,
  children,
  delay = 0,
}: {
  index: string;
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="surface-card group h-full p-6">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            {index}
          </span>
          <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
        </div>
        <div className="mt-3 text-[0.98rem] leading-[1.7] text-foreground/80">{children}</div>
      </div>
    </Reveal>
  );
}
