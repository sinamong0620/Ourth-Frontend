// import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../../styles/global.css";

type AppProps = {
  Component: React.ElementType;
};

export default function App({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
