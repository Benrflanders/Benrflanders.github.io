import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  // A showcase of their previous projects, including web development projects and machine learning projects. Each project should have a brief description, technology stack used, and a screenshot or demo link.
  // Portfolio: Artimatic, Wayfinder, and Thesis? -- each should have clear
  // data about the tech stack and any other info that is relevant to what I
  // actually coded... maybe tell a story?

  return (
    <div id="portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full content-center justify-center bg-slate-200 py-4">
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <div className="card-body">
            <div className="flex flex-row">
              <h2 className="card-title flex flex-3">
                Co-Founder of Artimatic Technologies, Inc.
              </h2>
              <figure className="flex flex-2">
                <Image
                  src="/artimatic.png"
                  alt="Artimatic Logo"
                  height={165 / 2}
                  width={512 / 2}
                />
              </figure>
            </div>
            <p>Ben helped co-found Artimatic Technologies, Inc.</p>
            <p>
              He has worked on every piece of the Artimatic stack and pieced it
              together from scratch.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Tensorflow && Keras</code>
              </pre>
              <pre>
                <code>Django REST Framework</code>
              </pre>
              <pre>
                <code>React</code>
              </pre>
              <pre>
                <code>AWS</code>
              </pre>
            </div>

            <div className="card-actions justify-end">
              <a
                href="https://www.artimatic.io/"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Check out Artimatic
              </a>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <div className="card-body">
            <h2 className="card-title">Freelance Developer</h2>
            <p>
              Ben performs freelance development for clients. Check out
              Wayfinder Data Solutions, LLC to learn more about these projects
            </p>
            <p>
              Ben works with constructions project managers to create customized
              data tracking apps.
            </p>
            <div className="mockup-code">
              <pre>
                <code>NextJS</code>
              </pre>
              <pre>
                <code>AWS</code>
              </pre>
            </div>
            <div className="card-actions justify-end">
              <div className="card-actions justify-end">
                <a
                  href="http://wayfinderdata.com/"
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Check out Wayfinder
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <div className="card-body">
            <h2 className="card-title">Masters of Artificial Intelligence</h2>
            <p>
              While pursuing his Masters of Artificial Intelligence, Ben worked
              with the National Parks System to create a system for automated
              bird song classification.
            </p>
            <p>
              In case you {"didn't"} know, Bird populations are a great
              indicator of habitat health.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Numpy</code>
              </pre>
              <pre>
                <code>Scikit-Learn</code>
              </pre>
              <pre>
                <code>Scipy (for Signal Processing)</code>
              </pre>
            </div>
            <div className="card-actions justify-end">
              <a
                href="https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read {"Ben's"} Thesis
              </a>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <div className="card-body">
            <h2 className="card-title">NPS Database Technician</h2>
            <p>
              While pursuing his Masters of Artificial Intelligence, Ben worked
              with the US National Parks System to create datbase applications
              for the Wildlife and Water Quality SECN teams.
            </p>
            <p>
              Ben designed database schemas and implemented, then developed
              applications for scientists to interface with these databases.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Transact-SQL</code>
              </pre>
              <pre>
                <code>Visual Basic</code>
              </pre>
            </div>
            <div className="card-actions justify-end">
              <a
                href="https://www.nps.gov/articles/secn-august19-newsletter.htm"
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                South East Coast Network NPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
