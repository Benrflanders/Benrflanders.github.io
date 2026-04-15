import Hero from "components/Hero";
import Footer from "components/Footer";
import About from "components/About";
import Blog from "components/Blog";
import Portfolio from "components/Portfolio";
import SiteNav from "components/SiteNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ben Flanders — ML, Agents & Web",
  description:
    "Software engineer in Atlanta. AI agents and multi-agent chat at ADP; prior realtime agent work at StreamIt; former Artimatic co-founder; ML and production systems.",
};

export default async function Home() {
  return (
    <>
      <SiteNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full scroll-mt-20 bg-slate-950 outline-none"
      >
        <Hero />
        <p className="section-quote animate-fade-up opacity-0 [animation-delay:100ms] motion-reduce:animate-none motion-reduce:opacity-100">
          Empowering your digital vision with expert web development and machine
          learning.
        </p>
        <Portfolio />
        <p className="section-quote">
          “The best way to predict the future is to invent it.” — Alan Kay
        </p>
        <About />
        <p className="section-quote">
          &ldquo;If I have seen further, it is by standing on the shoulders of
          giants.&rdquo; — Sir Isaac Newton
        </p>
        <Blog />
      </main>
      <Footer />
    </>
  );
}
