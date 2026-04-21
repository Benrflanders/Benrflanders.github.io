export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-white/[0.04] bg-slate-900/30 py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-cyan-400/80">
          About
        </p>
        <h2
          id="about-heading"
          className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
        >
          Background
        </h2>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-400 sm:text-lg">
          <p className="text-lg font-medium text-slate-200 sm:text-xl">
            Ben is an Atlanta-based engineer focused on{" "}
            <strong className="font-medium text-slate-100">
              production AI agents
            </strong>
            ,{" "}
            <strong className="font-medium text-slate-100">
              multi-stage multi-agent pipelines
            </strong>
            , and reliable orchestration across complex systems and data flows.
          </p>

          <p>
            He is an{" "}
            <strong className="font-medium text-slate-200">
              AI Agent Developer at ADP
            </strong>{" "}
            (full-time, since September 2025), where most of his work centers on
            designing and shipping multi-stage, multi-agent pipelines for complex
            routing, tool use, and cross-system data handoffs, with chat as one
            component inside a broader orchestration platform.
          </p>

          <p>
            He{" "}
            <strong className="font-medium text-slate-200">
              co-founded Artimatic Technologies, Inc.
            </strong>{" "}
            , an AI animation software company, and is no longer in an operating
            role there. Earlier, he was a software developer for the{" "}
            <strong className="font-medium text-slate-200">
              U.S. National Park Service
            </strong>{" "}
            South East Coast Network in Athens, GA. Details on Artimatic
            products, freelance work, and NPS data tooling live in the{" "}
            <a
              href="#portfolio"
              className="font-medium text-slate-200 underline decoration-cyan-500/40 underline-offset-4 transition hover:text-cyan-300"
            >
              Work
            </a>{" "}
            section above.
          </p>

          <p>
            Ben earned a{" "}
            <strong className="font-medium text-slate-200">
              B.S. in Computer Science
            </strong>{" "}
            and a{" "}
            <strong className="font-medium text-slate-200">
              B.A. in Cognitive Science
            </strong>{" "}
            from the University of Georgia in 2019, and an{" "}
            <strong className="font-medium text-slate-200">
              M.S. in Artificial Intelligence
            </strong>{" "}
            from UGA in 2021. During the M.S., he built database applications for
            NPS Wildlife and Water Quality SECN teams. He is a UGA fan—Go Dawgs.
            Off the clock, he enjoys exploring with his dogs.
          </p>

          <p>
            He cares about architecture, planning, and turning ideas into shipped
            software. Deep strengths include{" "}
            <strong className="font-medium text-slate-200">Python</strong>,{" "}
            <strong className="font-medium text-slate-200">SQL</strong>,{" "}
            <strong className="font-medium text-slate-200">AWS</strong>, and
            agent stacks (Strands, LangChain), alongside the web and API layers
            that surround them.
          </p>
        </div>
      </div>
    </section>
  );
}
