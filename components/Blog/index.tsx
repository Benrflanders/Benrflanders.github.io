import BlogEntry from "./blogEntry";
import BlogSection from "./blogSection";

export default function Blog() {
  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-white/[0.04] bg-slate-950 py-20 sm:py-24"
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-cyan-400/80">
            Publications & Links
          </p>
          <h2
            id="writing-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
          >
            Papers, Patents & Posts
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Research output, IP, and occasional writing elsewhere on the web.
          </p>
        </div>

        <div className="mt-12">
          <BlogSection sectionName="Papers & Patents">
            <BlogEntry
              title="Patent: Automated Weighting Generation for Three-Dimensional Models"
              content="Developed and patented a novel process that creates and adjusts model weightings matrices, applies a machine learning model, and generates an accurate output weighting."
              url="https://patents.justia.com/inventor/benjamin-robert-flanders"
              buttonName="View Patent"
            />
            <BlogEntry
              title="UGA Thesis"
              content="With support from the U.S. National Park Service and the University of Georgia School of Artificial Intelligence, Ben authored a thesis on automated bird collection audio data."
              url="https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf"
              buttonName="Read Thesis (PDF)"
            />
            <BlogEntry
              title="SkiNNer Paper"
              content="A paper describing Artimatic's flagship product, SkiNNer. Original publication was 2021; the paper is not yet on the publisher's site."
              url={null}
              buttonName=""
            />
          </BlogSection>
          <BlogSection sectionName="Articles">
            <BlogEntry
              title="Ben's Take on Stripe"
              content="Why Stripe has become a favorite payment tool and why it's valuable for developers."
              url="https://www.artimatic.io/post/three-reasons-i-love-using-stripe"
              buttonName="Read on Artimatic"
            />
          </BlogSection>
          <BlogSection sectionName="Elsewhere">
            <BlogEntry
              title="Twitter / X"
              content="ML news and professional updates."
              url="https://twitter.com/Benflanders200"
              buttonName="Follow @Benflanders200"
            />
          </BlogSection>
        </div>
      </div>
    </section>
  );
}
