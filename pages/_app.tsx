import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GA_TRACKING_ID = "G-GLJBCSVJV2";
const GTM_TRACKING_ID = "GTM-5HZSW2M";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_TRACKING_ID });
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
