export default function About() {
  // A section that provides a brief overview of Ben's experience, education, and skills, including their work experience as a web developer, machine learning engineer, and COO.

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-4 rounded-br-full min-h-screen bg-neutral-200 place-content-center p-4"
      id="about"
    >
      <div></div>
      <div className="lg:col-span-2 shadow-2xl h-fit flex justify-start px-4 py-4 md:px-12 text-secondary-content bg-neutral-100  rounded-md">
        <div>
          <br />
          <h4 className="text-2xl prose-2xl">
            Ben Flanders is a software engineer based out of Atlanta with a
            passion for artificial intelligence and building scalable
            businesses.
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben is currently wearing many hats at his animation technology
            startup, Artimatic Technologies, Inc. He was previously a software
            developer for the US National Parks System south east coast network
            in Athens, GA.
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben graduated from the University of Georgia in 2019 with a B.S. in
            Computer Science and a B.A. in Cognitive Science. He graduated from
            UGA again in 2021, with a M.S. in Artificial Intelligence. Go Dawgs!
          </h4>
          <br />
          <h4 className="text-md prose-md">
            While pursuing his Masters of Artificial Intelligence, Ben worked
            with the US National Parks System to create datbase applications for
            the Wildlife and Water Quality SECN teams.
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben is a seasoned coder with extensive experience in both software
            development and business operations. While working in the software
            industry, he discovered a passion for not only programming and
            project architecture but also project planning and translating
            business ideas into tangible products. These interests drove him to
            co-found a startup during his {"master's"} degree with one of his
            professors and two other students. He looks forward to collaborating
            with other like-minded individuals and continuing to explore his
            passion for software development and business innovation.
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben is an expert in Python, Typescript, SQL, and multiple Amazon Web
            Services
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben is proficient in Javascript, but he will probably talk you into
            using Typescript instead.
          </h4>
          <br />
          <h4>
            Outside of work, Ben loves to cheer on the Dawgs and explore the
            world with his dogs. Recently, Ben has also made a hobby out of
            creating art with Artifical intelligence and other digital tools.
            Thank you StabilityAI! All of the images on this site were
            (partially) created with the help of AI.
          </h4>
        </div>
      </div>
    </div>
  );
}
