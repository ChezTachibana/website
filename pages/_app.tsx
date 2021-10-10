import type { AppProps } from "next/app";

import "../styles/bulma.scss";
import { useGoogleAnalytics } from "../lib/useGoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();
  return <Component {...pageProps} />;
}

export default MyApp;
