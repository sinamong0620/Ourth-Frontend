import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";

interface Props {
  username: string;
  userpoint: number;
}

const Profile = (props: Props) => {
  return (
    <MissionContainer>
      <DisplayFlex>
        <Image src="/images/user.png" alt="사진임" width={60} height={60} />
        <UserMessage>
          <div>Hello,</div>
          <div>{`${props.username ?? ""}`}</div>
        </UserMessage>
      </DisplayFlex>
      <PointCss>{`${props.userpoint ?? ""}`}pt</PointCss>
    </MissionContainer>
  );
};

export default Profile;

const MissionContainer = styled.div`
  width: 100%;
  background: white;
  height: 6.25rem;
  border-radius: 1.8rem;

  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  justify-content: space-between;

  img {
    margin-right: 1rem;
  }
`;
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;

const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  div:first-child {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  div:last-child {
    font-size: 1.5rem;
  }
`;

const PointCss = styled.div`
  width: 4.7rem;
  height: 2.3rem;
  background: #62a167;
  border-radius: 0.8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
