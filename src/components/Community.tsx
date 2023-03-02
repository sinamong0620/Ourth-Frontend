import styled from "styled-components";
import Image from "next/image";

const Community = () => {
  return (
    <MissionContainer>
      <div>커뮤니티</div>
      <Image src="/images/community.png" width={143} height={133} alt="체크" />
    </MissionContainer>
  );
};
export default Community;
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

  img {
    float: right;
  }
`;
