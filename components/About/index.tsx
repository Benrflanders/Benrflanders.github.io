export default function About() {
  // A section that provides a brief overview of Ben's experience, education, and skills, including their work experience as a web developer, machine learning engineer, and COO.

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-4 rounded-br-full min-h-screen bg-neutral-200 place-content-center"
      id="about"
    >
      <div></div>
      <div className="lg:col-span-2 shadow-2xl h-fit flex justify-start px-4 py-4 md:px-12 text-secondary-content bg-neutral-100">
        <div>
          <h4 className="text-lg prose-lg">
            Ben Flanders is a software engineer based out of Atlanta with a
            passion for artificial intelligence and building scalable
            businesses. He is currently wearing many hats at his startup
            Artimatic Technologies, Inc., an animation technology startup, and
            was previously a software developer for the US National Parks System
            south east coast network in Athens, GA.{" "}
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben graduated from the University of Georgia twice, the first time
            with a bachelors of science in Computer science and a BA in
            Cognitive Science. The second time, with a MS of Artificial
            Intelligence. Go Dawgs! Unfortunately, throughout all of this
            schooling Ben graudate just before UGA won their National Title :D{" "}
          </h4>
          <br />
          <h4 className="text-md prose-md">
            He is experienced in coding, but has also had many opportunities to
            work with the business development side of software. He discovered
            he has both a passion for programming itself and project
            architecture, as well as a passion for project planning and
            translating the ideas of business focused individuals intor
            products. This interest led Ben to co-found a company during his
            masters degree with one of his professors and two other students. He
            hopes to continue working with other{" "}
          </h4>
          <p>
            While pursuing his Masters of Artificial Intelligence, Ben worked
            with the US National Parks System to create datbase applications for
            the Wildlife and Water Quality SECN teams.
          </p>
          <br />
          <h4 className="text-md prose-md">
            Ben is an expert in Python, Javascript, SQL, and multiple AWS
            Services
          </h4>
          <br />
          <h4 className="text-md prose-md">
            Ben is proficient in Javascript, but he will probably talk you into
            using Typescript, Javascripts superior sibling.
          </h4>
          <br />
          <h4>
            Outside of work, Ben loves to cheer on the Dawgs and explore the
            world with his dogs. Recently, Ben has also made a hobby out of
            creating art with Artifical intelligence. Thanks Stable Diffusion!
            All of the images on this site were at least partially created with
            the help of AI. [insert AI art of Ben, Oliver, and Dunkin]
          </h4>
        </div>
      </div>
    </div>
  );
}
