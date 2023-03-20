import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "../../styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}
