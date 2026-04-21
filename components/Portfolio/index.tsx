import PortfolioCard, { ArtimaticLogo } from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-20 border-t border-white/[0.04] bg-slate-950 bg-grid-fade bg-grid-size py-16 sm:py-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-vignette" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-cyan-400/80">
            Selected Work
          </p>
          <h2
            id="portfolio-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
          >
            Things Ben Has Built
          </h2>
          <p className="mt-3 text-slate-400">
            Agents, platforms, and research spanning ML, APIs, and the web.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch xl:grid-cols-3">
          <PortfolioCard
            title="ADP Multi-Agent System"
            subtitle="AI Agent Developer · ADP"
            tech={[
              "Python",
              "Strands (AI)",
              "LangChain",
              "AWS (SQS, S3)",
              "Docker",
            ]}
            href="https://www.adp.com"
            cta="Visit ADP"
          >
            <p>
              Built multi-stage, multi-agent pipelines for complex workflow
              routing, tool orchestration, and cross-system data exchange across
              enterprise integrations.
            </p>
            <p>
              Contributed to agent architecture and design, owned prompt and
              context engineering deliverables, and presented progress on shipped
              improvements that increased reliability across decision stages.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="SkiNNer"
            subtitle="Former Co-Founder · Artimatic Technologies, Inc."
            tech={["Python", "TensorFlow & Keras", "AWS (SageMaker, EC2, S3)", "Docker"]}
            href="https://www.artimatic.io/"
            cta="Visit Artimatic"
            logo={<ArtimaticLogo />}
          >
            <p>
              Developed and trained the neural network that powers SkiNNer, an
              automated weight painting solution for Autodesk Maya.
            </p>
            <p>
              Artimatic&apos;s approach significantly reduces time and effort for
              weight painting. Ben contributed to a published paper on the
              technical work.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="Artimatic API"
            subtitle="Former Co-Founder · Artimatic Technologies, Inc."
            tech={["Python", "Django REST Framework", "AWS"]}
            href="https://www.artimatic.io/"
            cta="Visit Artimatic"
            logo={<ArtimaticLogo />}
          >
            <p>
              As lead developer, Ben designed and built the API that backs all
              Artimatic product deliveries.
            </p>
            <p>
              RESTful design, solid database work, and ongoing improvements for
              customer needs.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="Artimatic Web App"
            subtitle="Former Co-Founder · Artimatic Technologies, Inc."
            tech={["React", "JavaScript", "AWS (Amplify, S3, EC2, …)"]}
            href="https://www.artimatic.io/"
            cta="Visit Artimatic"
            logo={<ArtimaticLogo />}
          >
            <p>
              Co-developed the customer-facing app: API UI, Stripe payments,
              SkiNNer install flow, and geNNie (AI texture tooling).
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="Freelance Projects"
            subtitle="Freelance Software Developer"
            tech={["JavaScript", "Next.js", "AWS (S3, EC2, Amplify)"]}
            href="http://wayfinderdata.com/"
            cta="Wayfinder Data Solutions"
          >
            <p>
              Diverse client work via Wayfinder Data Solutions, LLC — including
              an internal construction planner and data tracker with real-time
              reporting, camera integrations, and Scrum-style delivery.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="M.S. AI Thesis: Bird Audio Classification"
            subtitle="M.S. Artificial Intelligence · UGA"
            tech={["NumPy", "Scikit-Learn", "SciPy (signals)"]}
            href="https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf"
            cta="Read Thesis (PDF)"
          >
            <p>
              Worked with the National Park Service on automated bird song
              classification — bird populations as habitat health indicators.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="NPS SECN — Estuarine Water Quality"
            subtitle="Database Technician · U.S. National Park Service"
            tech={["Transact-SQL", "Visual Basic"]}
            href="https://www.nps.gov/articles/secn-august19-newsletter.htm"
            cta="SECN Newsletter"
          >
            <p>
              Schema design, apps for scientists, and SOPs for data workflows and
              field procedures.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="NPS SECN — Wildlife Data"
            subtitle="Database Technician · U.S. National Park Service"
            tech={["Transact-SQL", "Visual Basic"]}
            href="https://www.nps.gov/articles/secn-august19-newsletter.htm"
            cta="SECN Newsletter"
          >
            <p>
              Database applications for Wildlife and Water Quality SECN teams
              during M.S. studies.
            </p>
          </PortfolioCard>

          <PortfolioCard
            title="This Portfolio Site"
            subtitle="Open Source"
            tech={["Next.js", "Tailwind CSS", "TypeScript"]}
            href="https://github.com/Benrflanders/Benrflanders.github.io"
            cta="View on GitHub"
          >
            <p>
              This site is open source — layout, content, and deploy pipeline
              live in the repo.
            </p>
          </PortfolioCard>
        </div>
      </div>
    </section>
  );
}
