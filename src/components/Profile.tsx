import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";

const Profile = () => {
  const { randomMission, saveRandomMission, userInfo } = useMissionList();

  return (
    <MissionContainer>
      <Image src="/images/user.png" alt="사진임" width={60} height={60} />
      <UserMessage>
        <div>안녕하세요</div>
        <div>{`${userInfo?.username}`}님</div>
      </UserMessage>
    </MissionContainer>
  );
};
export default Profile;
const MissionContainer = styled.div`
  background: white;
  height: 6.25rem;
  border-radius: 1.8rem;
  margin: 0 auto;
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  img {
    margin-right: 1rem;
  }
`;

const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  div:first-child {
    font-size: 1rem;
    margin-bottom: 0.2em;
  }

  div:last-child {
    font-size: 1.5rem;
  }
`;
