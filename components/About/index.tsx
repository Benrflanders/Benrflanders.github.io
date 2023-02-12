export default function About() {
  // A section that provides a brief overview of Ben's experience, education, and skills, including their work experience as a web developer, machine learning engineer, and COO.

  return (
    <div className="grid grid-cols-2 rounded-b-full">
      <div className="bg-neutral-600 rounded-b-full shadow-2xl flex justify-end px-4 py-4 md:px-12 text-neutral-content">
        <div>
          <h1 className="content-end text-lg">Education</h1>
          <h2 className="prose-md">M.S. Artificial Intelligence</h2>
          <h2 className="prose-md">B.S. Computer Science</h2>
          <h2 className="prose-md">B.A. Cognitive Science</h2>
        </div>
      </div>
      <div className="bg-neutral-400 rounded-b-full shadow-2xl flex justify-start px-4 py-4 md:px-12 text-neutral-800">
        <div>
          <h1 className="text-lg prose-lg">Past Work Experience</h1>
          <h2>National Parks Database Technician</h2>
        </div>
      </div>
    </div>
  );
}
