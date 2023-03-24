import Layout from "../components/Layout";
import { ReactElement } from "react";
import styled from "styled-components";

export default function Achievement() {
  return <MyRankingContainer></MyRankingContainer>;
}
Achievement.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const MyRankingContainer = styled.div`
  height: 100vh;
`;
