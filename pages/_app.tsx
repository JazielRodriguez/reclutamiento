import { Suspense } from "react";
import LoadingSuspense from "../components/global/LoadingSuspense/LoadingSuspense";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Leckerli_One } from "@next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
const leckerli = Leckerli_One({ subsets: ["latin"], weight: "400" });
import "../i18n/i18n";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<LoadingSuspense />}>
      <div className={`${raleway.className} ${leckerli}`}>
        <style jsx global>
          {`
            html {
              font-family: ${raleway.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </div>
    </Suspense>
  );
}
