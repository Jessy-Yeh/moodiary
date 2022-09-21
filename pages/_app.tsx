import "../src/common/styles/globals.css";
import "../src/common/styles/calendar.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
