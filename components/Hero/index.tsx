import Image from "next/image";
import heroImage from "../../public/hero_banner.png";
import DownloadResumeButton from "./downloadResumeButton";

export default function Hero() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <div className="absolute inset-0">
        <Image
          alt="Abstract background art. Colors are primarily blue, dark gray, and white."
          src={heroImage}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/75 to-slate-950"
          aria-hidden
        />
        <div className="absolute inset-0 bg-hero-vignette" aria-hidden />
      </div>

      <div className="relative flex flex-1 flex-col justify-end px-4 pb-16 pt-24 sm:justify-center sm:px-8 sm:pb-20 sm:pt-28 lg:px-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10 md:p-12">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
              Atlanta, GA
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ben Flanders
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300 sm:text-xl">
              Machine learning engineer and product-minded builder — AI agents,
              multi-stage pipelines, and low-latency systems that stay sharp
              under load.
            </p>
            <a
              href="mailto:Benrflanders@gmail.com"
              className="mt-2 inline-block text-sm font-medium text-cyan-300/90 underline-offset-4 hover:text-cyan-200 hover:underline"
            >
              Benrflanders@gmail.com
            </a>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#portfolio"
                className="btn-primary w-full justify-center sm:w-auto sm:min-w-[200px]"
              >
                View Work
              </a>
              <a
                href="#about"
                className="btn-secondary w-full justify-center sm:w-auto sm:min-w-[200px]"
              >
                About
              </a>
            </div>
            <div className="mt-4 flex justify-stretch sm:justify-start">
              <DownloadResumeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
