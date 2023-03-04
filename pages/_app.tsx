import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GA_TRACKING_ID = "G-GLJBCSVJV2";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID! });
    } catch (error) {
      console.error("Environment variable NEXT_PUBLIC_GTM_ID is not defined.");
    }
    if (typeof GA_TRACKING_ID == "string") {
      console.log("Google analytics ID: ", GA_TRACKING_ID);
    } else {
      throw TypeError("GA Tracking ID environment variable not loaded.");
    }
  }, []);

  return (
    <>
      <Script
        id="load-gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="push-gtag-to-datalayer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
