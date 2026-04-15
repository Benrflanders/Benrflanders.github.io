import Image from "next/image";
import type { ReactNode } from "react";

type PortfolioCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  tech: string[];
  href?: string;
  cta: string;
  logo?: ReactNode;
};

export default function PortfolioCard({
  title,
  subtitle,
  children,
  tech,
  href,
  cta,
  logo,
}: PortfolioCardProps) {
  return (
    <article className="group relative flex max-w-lg flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:border-cyan-500/20 hover:shadow-card-hover">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/15"
        aria-hidden
      />
      <div className="relative flex flex-row items-start justify-between gap-3">
        <h2 className="font-display text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
          {title}
        </h2>
        {logo ? <div className="shrink-0 opacity-90">{logo}</div> : null}
      </div>
      <p className="relative mt-1 text-xs font-medium uppercase tracking-wider text-cyan-400/90">
        {subtitle}
      </p>
      <div className="relative mt-4 space-y-3 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
      <ul className="relative mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li key={item}>
            <span className="inline-block rounded-lg border border-cyan-500/15 bg-brand-muted px-2.5 py-1 font-mono text-[11px] font-medium text-cyan-100/90">
              {item}
            </span>
          </li>
        ))}
      </ul>
      <div className="relative mt-6 flex justify-end border-t border-white/[0.06] pt-5">
        {href ? (
          <a
            href={href}
            className="btn-primary text-xs sm:text-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            {cta}
          </a>
        ) : (
          <span className="rounded-xl border border-white/10 px-4 py-2 text-xs text-slate-500">
            Link coming soon
          </span>
        )}
      </div>
    </article>
  );
}

export function ArtimaticLogo() {
  return (
    <Image
      src="/artimatic.png"
      alt="Artimatic"
      height={165 / 2}
      width={512 / 2}
      className="opacity-90"
    />
  );
}
