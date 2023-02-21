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
              <h1 className="card-title flex flex-3">SkiNNer</h1>
              <figure className="flex flex-2">
                <Image
                  src="/artimatic.png"
                  alt="Artimatic Logo"
                  height={165 / 2}
                  width={512 / 2}
                />
              </figure>
            </div>
            <h2>Co-Founder of Artimatic Technologies, Inc.</h2>
            <p>
              {" "}
              Developed and trained the neural network that powers SkiNNer, an
              automated weight painting solution for Autodesk Maya.
            </p>
            <p>
              Artimatic{"'"}s innovative approach significantly reduces the time
              and effort required for weight painting. Ben also contributed to a
              published paper detailing the technical aspects of the project.
              This experience gave me the opportunity to apply my technical
              skills and creativity to solve complex problems and present my
              work to a broader audience.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Python</code>
              </pre>
              <pre>
                <code>Tensorflow && Keras</code>
              </pre>
              <pre>
                <code>AWS (SageMaker, EC2, & S3)</code>
              </pre>
              <pre>
                <code>Docker</code>
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
            <div className="flex flex-row">
              <h1 className="card-title flex flex-3">Artimatic API</h1>
              <figure className="flex flex-2">
                <Image
                  src="/artimatic.png"
                  alt="Artimatic Logo"
                  height={165 / 2}
                  width={512 / 2}
                />
              </figure>
            </div>
            <h2>Co-Founder of Artimatic Technologies, Inc.</h2>
            <p>
              As lead developer at Artimatic, Ben designed and developed the API
              that serves as the backbone of all Artimatic product deliveries.
            </p>
            <p>
              Ben leveraged his expertise in RESTful API design and database
              development to create a highly scalable and reliable
              infrastructure. Thanks to his contributions, Artimatic's products
              are known for their seamless integration and ease of use. In
              addition, Ben has continued to improve the API to ensure that it
              meets the evolving needs of Artimatic customers.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Python</code>
              </pre>
              <pre>
                <code>Django REST Framework</code>
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
            <div className="flex flex-row">
              <h1 className="card-title flex flex-3">Artimatic Web App</h1>
              <figure className="flex flex-2">
                <Image
                  src="/artimatic.png"
                  alt="Artimatic Logo"
                  height={165 / 2}
                  width={512 / 2}
                />
              </figure>
            </div>
            <h2>Co-Founder of Artimatic Technologies, Inc.</h2>
            <p>
              Co-developed and continues to improve the Artimatic web app, a
              crucial component of Artimatic{"'"}s suite of tools.
            </p>{" "}
            <p>
              It serves as an interface for the API, facilitates payment
              processing through Stripe, and provides a streamlined installation
              process for skiNNer. Additionally, the app is used to interact
              with geNNie, an AI powered texture generator for animators and
              artists.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Typescript && Javascript</code>
              </pre>
              <pre>
                <code>React</code>
              </pre>
              <pre>
                <code>AWS (Amplify, S3, EC2, and more)</code>
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
            <h1 className="card-title">Freelance Projects</h1>
            <h2>Freelance Software Developer</h2>
            <p>
              As a freelance developer, Ben undertakes diverse client projects.
              Check out Wayfinder Data Solutions, LLC for more information about
              these projects.
            </p>
            <p>
              One of these projects involved the development of an internal
              construction project planner and data tracker. The project
              comprised real-time reporting, camera integrations, and SCRUM for
              project management.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Typescript && Javascript</code>
              </pre>
              <pre>
                <code>NextJS</code>
              </pre>
              <pre>
                <code>AWS (S3, EC2, & Amplify)</code>
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
            <h1 className="card-title">
              MS AI Thesis: Automated Bird Audio Classification using Machine
              Learning
            </h1>
            <h2>Student at UGA, Masters of Artificial Intelligence</h2>
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
            <h1 className="card-title">
              NPS SECN Estuarine Water Quality Database & Data App
            </h1>
            <h2>NPS Database Technician</h2>
            <p>
              Ben designed database schemas and implemented, then developed
              applications for scientists to interface with these databases.
            </p>
            <p>
              Ben helped author standard operating procedures dictating
              operations while using the data-applications as well as scientist
              procedures relating to the proejct as a whole.
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
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <div className="card-body">
            <h1 className="card-title">
              NPS SECN Wildlife Database & Data App
            </h1>
            <h2>NPS Database Technician</h2>
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
