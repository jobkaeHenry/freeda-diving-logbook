import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    
    <RecoilRoot>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </RecoilRoot>

  );
}
export default appWithTranslation(App);
