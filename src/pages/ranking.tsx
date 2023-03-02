import useRankingList from "../hooks/useRankingList";
import styled from "styled-components";
import Header from "../components/Header";
import EachRanking from "../components/ranking/EachRanking";
import useMissionList from "../hooks/useMissionList";
import Link from "next/link";

export default function Ranking() {
  const { ranking, saveRanking } = useRankingList();

  return (
    <MainStyleContainer>
      <MainStyle>
        <Link href="/main">
          <div>{`< 메인으로`}</div>
        </Link>
        <Header />
        <h1>랭킹</h1>

        {ranking.map((school) => (
          <div key={school.id}>
            <EachRanking
              ranking={school.ranking}
              schoolName={school.schoolName}
              point={school.point}
            />
          </div>
        ))}
        <h1>우리 학교 랭킹</h1>
      </MainStyle>
    </MainStyleContainer>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const MainStyle = styled.div`
  background-color: #f6f6f6;
  max-width: 480px;
  padding: 0 1.5rem 0 1.5rem;

  a:visited,
  a:link,
  a:active {
    color: #747474;
    text-decoration: none;
  }
`;
