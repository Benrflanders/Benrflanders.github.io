import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "components/Hero";
import Footer from "components/Footer";
import About from "components/About";
import Blog from "components/Blog";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";

import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Benjamin Flanders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
