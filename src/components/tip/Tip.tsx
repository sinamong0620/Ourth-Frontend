import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
interface IProps {
  imgurl: string;
  title: string;
  subtitle: string;
  id: string;
}
const Tip = (props: IProps) => {
  const router = useRouter();
  return (
    <MissionContainer
      onClick={() => {
        router.push({
          pathname: `/tipdetail/${props.id}`,
          query: {
            text: props.title,
            imgurl: props.imgurl,
          },
        });
      }}
    >
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
  width: 23rem;
  margin-right: 1.3rem;
  border-radius: 1.8rem;
  border-radius: 1.8rem;
  background: white;
  font-weight: 600;
  cursor: pointer;

  div:first-child {
    width: 23rem;
    height: 78%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 1.8rem 1.8rem 0em 0em;
    }
  }

  > div:last-child {
    font-weight: 100;
    padding: 1rem;
  }
`;
