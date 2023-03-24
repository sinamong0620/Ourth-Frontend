import styled from "styled-components";
import TodaysMission from "../components/mission/TodaysMission";
import CompletedMission from "../components/mission/CompletedMission";
import useMission from "../hooks/useMission";
import { ReactElement, useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Modal from "../components/mission/Modal";

export default function Mission() {
  const { userMission, saveRandomMission, missionArray } = useMission();
  //모달 useState 설정
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const MissionCount = missionArray.filter((x) => x === true);
  const imgArray = [
    "/images/poo.png",
    "/images/wink.png",
    "/images/sunglasses.png",
    "/images/hearteye.png",
  ];
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
        <div>수고 했어요 모든 미션 완료하셨습니다</div>
      ) : MissionCount.length === 4 ? (
        <div>
          뱃지 받게 하기
          <button onClick={onClickAddBadge}>뱃지 받기</button>
        </div>
      ) : (
        <div>
          <h1>
            이번 주 <b>미션</b>이에요
          </h1>
          {userMission.map((mission) =>
            mission.status ? null : (
              <div key={mission.id}>
                <TodaysMission
                  id={mission.id}
                  todo={mission.text}
                  imgurl={imgArray[mission.id - 1]}
                  point={mission.point}
                  saveRandomMission={saveRandomMission}
                  setModalOpen={setModalOpen}
                />
              </div>
            )
          )}
          <h1>완료</h1>

          {userMission.map((mission) =>
            mission.status ? (
              <div key={mission.id}>
                <CompletedMission
                  todo={mission.text}
                  point={mission.point}
                  imgurl={imgArray[mission.id - 1]}
                />
              </div>
            ) : null
          )}
        </div>
      )}

      {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
  padding: 0 1.5rem 0 1.5rem;
  min-height: 100vh;
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
