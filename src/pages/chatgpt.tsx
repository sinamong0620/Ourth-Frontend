import { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Chatgpt() {
  return <></>;
}
Chatgpt.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
