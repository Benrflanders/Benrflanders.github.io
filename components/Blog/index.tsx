import BlogSection from "./blogSection";

export default function Blog() {
  //  A section to share their thoughts, experiences, and knowledge in the field of web development, machine learning, and technology leadership.

  return (
    <div>
      <BlogSection sectionName={"Papers"} />
      <BlogSection sectionName={"Social"} />
      <BlogSection sectionName={"Thoughts"} />
    </div>
  );
}
