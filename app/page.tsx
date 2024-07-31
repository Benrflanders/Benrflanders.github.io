import Hero from "components/Hero";
import Footer from "components/Footer";
import About from "components/About";
import Blog from "components/Blog";
import Portfolio from "components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage of Ben Flanders",
  description:
    "The homepage of Ben Flanders. A software engineer and machine learning expert.",
};

export default async function Home() {
  return (
    <>
      <main className="max-w-screen w-screen bg-base-300">
        <Hero learnMoreHref="/#portfolio" aboutHref="/#about" />
        <div className="flex flex-col w-full border-opacity-50 py-8">
          <div className="divider prose-xl">
            Empowering Your Digital Vision with Expert Web Development and
            Machine Learning
          </div>
        </div>
        <Portfolio />
        <div className="flex flex-col w-full border-opacity-50 py-8">
          <div className="divider prose-xl">
            “The best way to predict the future is to invent it.” -Alan Kay
          </div>
        </div>
        <About />
        <div className="flex flex-col w-full border-opacity-50 py-8">
          <div className="divider prose-xl">
            {
              '"If I have seen further, it is by standing on the shoulders of giants"'
            }{" "}
            -Sir Isaac Newton
          </div>
        </div>
        <Blog />
      </main>
      <Footer />
    </>
  );
}
