import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";
import useRankingList from "../hooks/useRankingList";
interface IProps {
  schoolName: string;
}
const Ranking = (props: IProps) => {
  const { mySchoolRanking } = useRankingList();
  return (
    <MissionContainer>
      <MissionTextContain>
        <div>랭킹</div>
        <div>
          <div>{props.schoolName}</div>
          <div>{mySchoolRanking[0]?.ranking}위</div>
        </div>
      </MissionTextContain>
      <Image src="/images/ranking.png" alt="키보드" width={165} height={150} />
    </MissionContainer>
  );
};
export default Ranking;

const MissionContainer = styled.div`
  background: white;
  height: 12.25rem;
  border-radius: 1.8rem;
  margin: 0 auto;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
  display: flex;
  justify-content: space-between;
`;

const MissionTextContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div div:first-child {
    font-weight: 100;
    margin-bottom: 0.3rem;
    font-size: 2rem;
  }
  div div:last-child {
    font-size: 1.9rem;
  }
`;
