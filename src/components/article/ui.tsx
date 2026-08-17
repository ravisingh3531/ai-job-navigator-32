import type { ReactNode } from "react";

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
    <section id={id} className="scroll-mt-24 border-t border-border pt-12 mt-16">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight font-semibold text-foreground sm:text-4xl">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="scroll-mt-24 pt-4 text-xl font-semibold text-foreground sm:text-2xl">
      {children}
    </h3>
  );
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="pt-2 text-base font-semibold text-foreground">{children}</h4>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.02rem] leading-[1.75] text-foreground/85">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-[1.7] text-foreground/90 sm:text-xl sm:leading-[1.65]">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-3 pl-1 text-[1.02rem] leading-[1.7] text-foreground/85 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.62em] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-accent">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-[1.02rem] leading-[1.7] text-foreground/85 marker:font-semibold marker:text-primary">
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
    default: "bg-card border-border",
    warn: "bg-highlight border-warning/40",
    ink: "bg-ink text-ink-foreground border-ink",
  } as const;
  return (
    <aside
      className={`rounded-lg border-l-4 border-l-accent p-5 sm:p-6 ${tones[tone]}`}
      style={{ boxShadow: "var(--shadow-paper)" }}
    >
      {title ? <p className="mb-2 font-display text-lg font-semibold">{title}</p> : null}
      <div className="space-y-3 text-[0.98rem] leading-[1.7] opacity-95">{children}</div>
    </aside>
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
  const pad = dense ? "px-3 py-2" : "px-4 py-3";
  return (
    <figure className="my-8">
      <figcaption className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {caption}
      </figcaption>
      <div
        className="overflow-x-auto rounded-lg border border-border bg-card"
        style={{ boxShadow: "var(--shadow-paper)" }}
      >
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-ink text-ink-foreground">
              {head.map((h) => (
                <th key={h} className={`${pad} font-semibold whitespace-nowrap`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-secondary/50" : ""}>
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`${pad} align-top leading-[1.55] text-foreground/85 border-t border-border`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}