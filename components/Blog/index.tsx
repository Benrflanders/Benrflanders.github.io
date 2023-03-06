import BlogEntry from "./blogEntry";
import BlogSection from "./blogSection";

export default function Blog() {
  //  A section to share their thoughts, experiences, and knowledge in the field of web development, machine learning, and technology leadership.

  return (
    <div>
      <h1 className="text-primary-content">{"Ben's Blog"}</h1>
      <BlogSection sectionName={"Papers"}>
        <BlogEntry>Thesis, Artimatic Paper, maybe some school work?</BlogEntry>
      </BlogSection>
      <BlogSection sectionName={"Articles"}>
        <BlogEntry>Published articles</BlogEntry>
      </BlogSection>
      <BlogSection sectionName={"Thoughts"}>
        <BlogEntry>
          tweet feed here, or some cherry picked tweets/posts
        </BlogEntry>
      </BlogSection>
    </div>
  );
}
