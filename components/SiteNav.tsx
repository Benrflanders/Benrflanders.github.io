import Link from "next/link";

const links = [
  { href: "#portfolio", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
] as const;

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-slate-100 transition hover:text-cyan-300"
        >
          Ben Flanders
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-cyan-200"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="ml-1 hidden sm:block">
              <a
                href="mailto:Benrflanders@gmail.com"
                className="btn-secondary !py-2 !px-4 text-xs"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
