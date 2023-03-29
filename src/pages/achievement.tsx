import Layout from "../components/Layout";
import { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import useCompletedMission from "../hooks/useCompletedMission";

export default function Achievement() {
  const { userMission, userInfo } = useCompletedMission();
  console.log(userMission);
  return (
    <MyRankingContainer>
      <h1>My Info</h1>
      <MyProfileContainer>
        <MyProfile>
          <h1>{userInfo?.username}</h1>
          <Image src="/images/user.png" alt="사진임" width={80} height={80} />
        </MyProfile>
        <MyDetailInfoContainer>
          <MyDetailInfo>
            <div>{userInfo?.point}</div>
            <div>point</div>
          </MyDetailInfo>
          <MyDetailInfo>
            <div>{userInfo?.badgeCount}</div>
            <div>badge</div>
          </MyDetailInfo>
          <MyDetailInfo>
            <div>{userInfo?.userMissions.length}</div>
            <div>mission</div>
          </MyDetailInfo>
        </MyDetailInfoContainer>
      </MyProfileContainer>

      <CompletedMissionContainer>
        <h1>
          <p>Completed</p> Missions
        </h1>
        {userMission.map((mission) => {
          return (
            <EachCompletedMission key={mission.id}>
              <h1>{mission.id}</h1>
              <div>
                <div>{mission.text}</div>
                <div>{mission.point}pt</div>
              </div>
            </EachCompletedMission>
          );
        })}
      </CompletedMissionContainer>
    </MyRankingContainer>
  );
}
Achievement.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const MyRankingContainer = styled.div`
  > h1 {
    margin: 2rem 0rem 1rem 0rem;
  }
  height: 100vh;
`;
const MyProfileContainer = styled.div`
  background: white;
  border-radius: 1.8rem;
  padding: 2rem;
`;
const MyProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h1 {
    font-weight: 600;
  }
`;
const MyDetailInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MyDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-child {
    margin-bottom: 0.6rem;
    font-weight: 500;
  }

  div:last-child {
    font-weight: 100;
  }
`;

const CompletedMissionContainer = styled.div`
  > h1 {
    margin-bottom: 1rem;
  }
  margin-top: 3rem;
  h1 p {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 0.6rem;
  }
`;

const EachCompletedMission = styled.div`
    display: flex;
    background: white;
    padding: 1.5rem 1.8rem;
    border-radius: 1.8rem;
    margin-bottom: 1.2rem;
    h1{
      margin-right : 1.5rem;
    }
    div div:first-child {
      font-size : 1.2rem;
    }
    div div:last-child{
      font-weight : 100;
      font-size : 0.8rem;
    }
   
}`;
