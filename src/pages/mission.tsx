import styled from "styled-components";
import TodaysMission from "../components/mission/TodaysMission";
import CompletedMission from "../components/mission/CompletedMission";
import useMissionList from "../hooks/useMissionList";
import Link from "next/link";
import axios from "axios";

export default function Mission() {
  const { randomMission, saveRandomMission } = useMissionList();

  //왜 자꾸 개체가 undefined라고 뜨는건지 잘 모르겟음.
  //그리고 왜 map 업다고 함. ㅅㅂ 장난?
  //뭐야 왜 여기서 하면 갑자기 map이 됨?
  const UserMission = async () => {
    try {
      const response = await axios.post(
        "https://ourth.duckdns.org/usermission/add",
        {}, //post는 형식이 {data,{config}} 이렇게 해야함
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
      console.log("이거 왜 않되");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <MainStyleContainer>
      <Link href="/main">
        <div>{`< 메인으로`}</div>
      </Link>

      {randomMission.length === 0 ? (
        <button onClick={UserMission}>추가 ㅋ</button>
      ) : (
        <div>
          <h1>
            이번 주 <b>미션</b>이에요
          </h1>
          {randomMission.map((mission) =>
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

          {randomMission.map((mission) =>
            mission.status ? (
              <div key={mission.id}>
                <CompletedMission
                  todo={mission.text}
                  imgurl="/images/poo.png"
                />
              </div>
            ) : null
          )}
        </div>
      )}
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