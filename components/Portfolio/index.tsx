import Image from "next/image";

export default function Portfolio() {
  // A showcase of their previous projects, including web development projects and machine learning projects. Each project should have a brief description, technology stack used, and a screenshot or demo link.
  // Portfolio: Artimatic, Wayfinder, and Thesis? -- each should have clear
  // data about the tech stack and any other info that is relevant to what I
  // actually coded... maybe tell a story?

  return (
    <div>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full content-center justify-center bg-slate-200 py-4 px-2">
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <figure>
            <Image src="/artimatic.png" alt="Artimatic Logo" fill={true} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Founder of Artimatic Technologies, Inc.
            </h2>
            <p>Ben helped co-found Artimatic Technologies, Inc.</p>
            <p>
              He has worked on every piece of the Artimatic stack and pieced it
              together from scratch.
            </p>
            <div className="mockup-code">
              <pre>
                <code>Tensorflow and Keras</code>
              </pre>
              <pre>
                <code>Django Rest Framework</code>
              </pre>
              <pre>
                <code>React</code>
              </pre>
              <pre>
                <code>AWS</code>
              </pre>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check out Artimatic</button>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <figure>
            <Image src="/wayfinder.png" alt="Wayfinder Logo" fill={true} />
          </figure>
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
              <button className="btn btn-primary">Check out Wayfinder</button>
            </div>
          </div>
        </div>
        <div className="card max-w-lg bg-base-100 shadow-xl justify-center justify-self-center">
          <figure>
            <Image
              src="/thesis_logo.png"
              alt="Thesis Image Placholder"
              fill={true}
            />
          </figure>
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
              <button className="btn btn-primary">Read {"Ben's"} Thesis</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
