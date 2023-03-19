import BlogEntry from "./blogEntry";
import BlogSection from "./blogSection";

export default function Blog() {
  //  A section to share their thoughts, experiences, and knowledge in the field of web development, machine learning, and technology leadership.

  return (
    <div>
      <BlogSection sectionName={"Papers"}>
        <BlogEntry
          title={"UGA Thesis"}
          content={
            "With support from the US National Parks System and the University of Georgia School of Artificial Intelligence, Ben authored a thesis on automated bird collection audio data."
          }
          url={
            "https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf"
          }
          buttonName={"Read the Thesis"}
        />
        <BlogEntry
          title={"SkiNNer Paper"}
          content={
            "A paper describing Artimatic's flasghip product, skiNNer. Original publication was 2021, but the paper is not yet on the publishers site. Check back soon!"
          }
          url={null}
          buttonName={""}
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
      <BlogSection sectionName={"Other Thoughts"}>
        <BlogEntry
          title={"Twitter"}
          content={
            "Follow Ben on Twitter to stay up-to-date on ML news and Ben's professional journey."
          }
          url={"https://twitter.com/Benflanders200"}
          buttonName={"Follow Ben on Twitter"}
        />
      </BlogSection>
    </div>
  );
}
