import styled from "styled-components";
import TodaysMission from "../components/mission/TodaysMission";
import CompletedMission from "../components/mission/CompletedMission";
import useMission from "../hooks/useMission";
import Link from "next/link";
import { useEffect } from "react";

export default function Mission() {
  const { userMission, saveRandomMission } = useMission();

  return (
    <MainStyleContainer>
      <Link href="/main">
        <div>{`< 메인으로`}</div>
      </Link>

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
                todomore="똥 좀 덜 쌉니다"
                imgurl="/images/poo.png"
                saveRandomMission={saveRandomMission}
              />
            </div>
          )
        )}
        <h1>완료</h1>

        {userMission.map((mission) =>
          mission.status ? (
            <div key={mission.id}>
              <CompletedMission todo={mission.text} imgurl="/images/poo.png" />
            </div>
          ) : null
        )}
      </div>
    </MainStyleContainer>
  );
}

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
    padding: 6rem 0 0.5rem 0;
  }
`;
