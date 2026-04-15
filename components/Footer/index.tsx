import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          © {new Date().getFullYear()} Benjamin Flanders. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Benrflanders"
            className="btn-ghost-icon"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Ben on GitHub"
          >
            <Image
              src="/github-mark.svg"
              height={26}
              width={26}
              alt=""
              className="invert opacity-80"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-flanders/"
            className="btn-ghost-icon"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Ben on LinkedIn"
          >
            <Image
              src="/LI-In-Bug.png"
              height={26}
              width={26}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
