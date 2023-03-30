import useRankingList from "../hooks/useRankingList";
import styled from "styled-components";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import EachRanking from "../components/ranking/EachRanking";

export default function Ranking() {
  const { anoterranking, mySchoolRanking } = useRankingList();

  const imagesFile = [
    "/images/gold1.png",
    "/images/sliver.png",
    "/images/bronze.png",
  ];
  return (
    <MainStyleContainer>
      <MainStyle>
        <h1>랭킹</h1>

        {anoterranking.map((school) => (
          <div key={school.id}>
            <EachRanking
              medal={imagesFile[school.ranking - 1]}
              ranking={school.ranking}
              schoolName={school.schoolName}
              point={school.point}
            />
          </div>
        ))}
        <h1>Our School Ranking</h1>

        {mySchoolRanking.map((school) => (
          <div key={school.id}>
            <EachRanking
              medal={imagesFile[school.ranking - 1]}
              ranking={school.ranking}
              schoolName={school.schoolName}
              point={school.point}
            />
          </div>
        ))}
      </MainStyle>
    </MainStyleContainer>
  );
}

//getLayout 할 때 컴포넌트 내부에서 하면 안됨. 그러면 layout 적용안됨.
Ranking.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const MainStyleContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const MainStyle = styled.div`
  h1 {
    margin: 3rem 0rem 0.2rem 0.8rem;
    font-size: 1.8rem;
  }
  background-color: #f6f6f6;
  max-width: 30rem;

  min-height: 100vh;
  margin-top: 2rem;

  a:visited,
  a:link,
  a:active {
    color: #747474;
    text-decoration: none;
  }
`;
