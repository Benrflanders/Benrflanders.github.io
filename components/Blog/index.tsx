import BlogEntry from "./blogEntry";
import BlogSection from "./blogSection";

export default function Blog() {
  //  A section to share their thoughts, experiences, and knowledge in the field of web development, machine learning, and technology leadership.

  return (
    <div>
      <h1 className="text-seondary-content text-4xl mx-4">{"Ben's Blog"}</h1>
      <BlogSection sectionName={"Papers"}>
        <BlogEntry
          title={"UGA Thesis"}
          content={
            "Ben authored a thesis on automated bird collection audio data in a collaboration between the US National Parks System and the University of Georgia School of Artficial Intelligence."
          }
          url={
            "https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf"
          }
          buttonName={"Thesis"}
        />
        <BlogEntry
          title={"SkiNNer Paper"}
          content={""}
          url={null}
          buttonName={"Check back soon"}
        />
      </BlogSection>
      <BlogSection sectionName={"Articles"}>
        <BlogEntry
          title={"Ben's take on Stripe"}
          content={
            "I'm excited to share why Stripe has become my favorite payment processing tool and why I think it’s a valuable tool for developers everywhere."
          }
          url={
            "https://www.artimatic.io/post/three-reasons-i-love-using-stripe"
          }
          buttonName={"View the blog post"}
        />
      </BlogSection>
      <BlogSection sectionName={"Thoughts"}>
        <div>More coming soon...</div>
      </BlogSection>
    </div>
  );
}
