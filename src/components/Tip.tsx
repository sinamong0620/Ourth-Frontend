import styled from "styled-components";
import Image from "next/image";

const Tip = () => {
  return (
    <MissionContainer>
      <div>팁</div>
      <Image src="/images/tip.jpeg" width={103} height={133} alt="체크" />
    </MissionContainer>
  );
};
export default Tip;

const MissionContainer = styled.div`
  background: white;
  height: 13.25rem;
  border-radius: 1.8rem;
  margin: 0 auto;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
  width: 50%;
  margin-right: 1rem;

  img {
    float: right;
  }
`;
