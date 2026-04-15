import React from "react";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

import "./globals.css";
import SkipLink from "components/SkipLink";

export const metadata = {
  title: "Ben Flanders — ML, Agents & Web",
  description:
    "Software engineer in Atlanta focused on machine learning, production AI agents, and low-latency conversational systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 font-sans text-slate-300 antialiased">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
