import MainOurth from "../components/MainOurth";
import { ReactElement } from "react";
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
