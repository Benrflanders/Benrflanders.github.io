import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "components/Hero";
import Footer from "components/Footer";
import About from "components/About";
import Blog from "components/Blog";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Flanders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen w-screen bg-base-300">
        <Hero />
        <div className="flex flex-col w-full border-opacity-50 py-8">
          <div className="divider prose-xl">
            A seasoned machine learning engineer
          </div>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
