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
              multi-agent chat
            </strong>
            , and{" "}
            <strong className="font-medium text-slate-100">
              low-latency conversational quality
            </strong>
            — shipping systems that stay sharp when users move fast.
          </p>

          <p>
            He is an{" "}
            <strong className="font-medium text-slate-200">
              AI Agent Developer at ADP
            </strong>{" "}
            (full-time, since September 2025), building multi-agent chat and
            production agent systems with a bias toward{" "}
            <strong className="font-medium text-slate-200">
              low-latency, high-quality realtime UX
            </strong>
            . He also held an engineering role at{" "}
            <strong className="font-medium text-slate-200">StreamIt</strong>{" "}
            with closely related goals:{" "}
            <strong className="font-medium text-slate-200">
              realtime chat agents
            </strong>
            , responsiveness, and keeping answers strong under rapid
            back-and-forth.
          </p>

          <p>
            He co-founded{" "}
            <strong className="font-medium text-slate-200">
              Artimatic Technologies, Inc.
            </strong>{" "}
            and is{" "}
            <strong className="font-medium text-slate-200">
              no longer in an operating role there
            </strong>
            . Earlier, he was a software developer for the{" "}
            <strong className="font-medium text-slate-200">
              U.S. National Park Service
            </strong>{" "}
            South East Coast Network in Athens, GA. Details on Artimatic
            products, freelance work, and NPS data tooling live in the{" "}
            <strong className="font-medium text-slate-200">Work</strong> section
            above.
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
