import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css";

export const metadata = {
  title: "Homepage of Ben Flanders",
  description:
    "The homepage of Ben Flanders. A software engineer and machine learning expert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} data-theme="business">
      <body>{children}</body>
    </html>
  );
}
