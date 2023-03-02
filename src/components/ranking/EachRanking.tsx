import styled from "styled-components";
import Image from "next/image";
interface IProps {
  ranking: number;
  schoolName: string;
  point: number;
}
const eachRanking = (props: IProps) => {
  return (
    <EachRankingContainer>
      <Image src="/images/gold1.png" alt="사진임" width={60} height={60} />
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
