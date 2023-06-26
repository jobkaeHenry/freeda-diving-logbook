import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Freeda</title>
      </Head>
      <RecoilRoot>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </RecoilRoot>
    </>
  );
}
export default appWithTranslation(App);
