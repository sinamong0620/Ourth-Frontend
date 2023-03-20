import { ReactElement } from "react";
import MainOurth from "../components/MainOurth";
import Layout from "../components/Layout";

export default function Main() {
  return (
    <>
      <MainOurth />
    </>
  );
}

Main.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
