import styled from "styled-components";
import Image from "next/image";
import Ranking from "@/src/pages/ranking";
interface IProps {
  medal: string;
  ranking: number;
  schoolName: string;
  point: number;
}

const eachRanking = (props: IProps) => {
  return (
    <EachRankingContainer>
      {props.ranking < 4 ? (
        <Image src={props.medal} alt="사진임" width={60} height={60} />
      ) : (
        <NoMedalRankingCss>{props.ranking}</NoMedalRankingCss>
      )}

      <div>
        <h3>{props.schoolName}</h3>
        <div>{props.point}pt</div>
      </div>
    </EachRankingContainer>
  );
};
export default eachRanking;

const EachRankingContainer = styled.div`
  background: white;
  display: flex;
  align-items: center;
  border-radius: 1.4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  img {
    margin-right: 1rem;
  }
`;

const NoMedalRankingCss = styled.h1`
  margin: 0rem 1.5rem 0rem 1rem;
`;
