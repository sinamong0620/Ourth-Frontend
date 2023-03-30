import styled from "styled-components";
import TodaysMission from "../components/mission/TodaysMission";
import CompletedMission from "../components/mission/CompletedMission";
import useMission from "../hooks/useMission";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Image from "next/image";

export default function Mission() {
  const { userMission, saveRandomMission, missionArray } = useMission();

  const MissionCount = missionArray.filter((x) => x === true);
  const imgArray = [
    "/images/poo.png",
    "/images/wink.png",
    "/images/sunglasses.png",
    "/images/hearteye.png",
  ];

  const onClickAddBadge = async () => {
    try {
      const response = await axios.post(
        "https://ourth.duckdns.org/badge/add",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
          withCredentials: true,
        }
      );
      //missionArray의 값을 갱신해주기 위해서 한번 더 호출
      saveRandomMission();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <MainStyleContainer>
      {missionArray[0] ? (
        <EntireMissionComplete>
          <div> Mission accomplished! </div>
          <div>{`See you next week! :)`}</div>
        </EntireMissionComplete>
      ) : MissionCount.length === 4 ? (
        <BadgeReceive>
          <Image src="/images/medal.png" width={200} height={200} alt="뱃지" />

          <div>
            You can reveive a <b>badge</b> this week
          </div>
          <button onClick={onClickAddBadge}>Get Badge</button>
        </BadgeReceive>
      ) : (
        <div>
          <h1>
            Week <b>Mission</b>
          </h1>
          {userMission.map((mission) =>
            mission.status ? null : (
              <div key={mission.id}>
                <TodaysMission
                  onSuccess={saveRandomMission}
                  id={mission.id}
                  todo={mission.text}
                  imgurl={imgArray[userMission.indexOf(mission)]}
                  point={mission.point}
                />
              </div>
            )
          )}
          <h1>Completed</h1>

          {userMission.map((mission) =>
            mission.status ? (
              <div key={mission.id}>
                <CompletedMission
                  todo={mission.text}
                  point={mission.point}
                  imgurl={imgArray[userMission.indexOf(mission)]}

                  //userMission에서 이 미션이 몇번째인지 인덱스를 찾아서 이미지 배열에 있는 순서대로 아이콘을 보여줌
                />
              </div>
            ) : null
          )}
        </div>
      )}
    </MainStyleContainer>
  );
}
Mission.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background-color: #f6f6f6;

  a:visited,
  a:link,
  a:active {
    color: #747474;
    text-decoration: none;
  }

  h1 {
    font-weight: 100;
    padding: 3rem 0 0.5rem 0;
  }
`;

const BadgeReceive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 100;
  height: 25rem;
  justify-content: end;
  img {
    margin-bottom: 1rem;
  }
  button {
    width: 4.3rem;
    height: 2.3rem;
    background: #62a167;
    border-radius: 0.8rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border: 0;
    margin-top: 1rem;
  }
`;
const EntireMissionComplete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  margin: 50% 0;
`;
