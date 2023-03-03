import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Script from "next/script";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script
      id="load-gtag-js"
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
    <Script
      id="push-gtag-to-datalayer"
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `
      }}
    />
    <Component {...pageProps} /></>
}
