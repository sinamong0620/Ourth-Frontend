import useRankingList from "../hooks/useRankingList";
import styled from "styled-components";
import Header from "../components/Header";
import EachRanking from "../components/ranking/EachRanking";
import useMissionList from "../hooks/useMissionList";
import Link from "next/link";

export default function Ranking() {
  const { anoterranking, mySchoolRanking } = useRankingList();
  console.log(anoterranking);
  const imagesFile = [
    "/images/gold1.png",
    "/images/sliver.png",
    "/images/bronze.png",
  ];
  return (
    <MainStyleContainer>
      <MainStyle>
        <Link href="/main">
          <div>{`< 메인으로`}</div>
        </Link>
        <Header />
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
        <h1>우리 학교 랭킹</h1>

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

const MainStyleContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const MainStyle = styled.div`
  background-color: #f6f6f6;
  max-width: 30rem;
  padding: 0 24px 0 24px;
  min-height: 100vh;

  a:visited,
  a:link,
  a:active {
    color: #747474;
    text-decoration: none;
  }
`;
