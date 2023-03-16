import styled from "styled-components";
import Image from "next/image";
interface IProps {
  imgurl: string;
  title: string;
  subtitle: string;
}
const Tip = (props: IProps) => {
  return (
    <MissionContainer>
      <div>
        <Image src={props.imgurl} width={403} height={333} alt="체크" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <div>{props.subtitle}</div>
      </div>
    </MissionContainer>
  );
};
export default Tip;

const MissionContainer = styled.div`
  background: white;
  border-radius: 1.8rem;
  font-weight: 600;
  margin-right: 1.3rem;
  cursor: pointer;
  border-radius: 1.8rem;
  width: 23rem;
  height: 100%;

  div:first-child {
    width: 23rem;
    height: 78%;
    img {
      height: 100%;
      border-radius: 1.8rem 1.8rem 0em 0em;
      width: 100%;
      object-fit: cover;
    }
  }

  > div:last-child {
    font-weight: 100;
    padding: 1rem;
  }
`;
