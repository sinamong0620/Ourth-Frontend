import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";
interface IProps {
  remainMission: number;
}

const Days = [6, 5, 4, 3, 2, 1, "오늘까지"];
const today = Days[new Date().getDay()];

const Mission = (props: IProps) => {
  return (
    <MissionContainer>
      <div>Mission</div>
      <MissionIconContainer>
        <EachIconContainer>
          <Image src="/images/fire.png" width={60} height={60} alt="체크" />
          <CurrentMissionClear>
            <div>Week Mission</div>
            <div>
              Left : <b>{props.remainMission}</b>
            </div>
          </CurrentMissionClear>
        </EachIconContainer>
        <ReaminDayCss>
          {typeof today === "string" ? (
            <div>{today}</div>
          ) : (
            <div>{today}days left</div>
          )}
        </ReaminDayCss>
      </MissionIconContainer>
    </MissionContainer>
  );
};
export default Mission;

const MissionContainer = styled.div`
  background: white;
  height: 10.5rem;
  border-radius: 1.8rem;
  margin: 0 auto;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
`;

const MissionIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const EachIconContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

const CurrentMissionClear = styled.div`
  font-weight: 200;
  div:first-child {
    font-size: 1.4rem;
  }

  div:last-child {
    font-size: 2rem;
  }
`;

const ReaminDayCss = styled.div`
  width: 4.7rem;
  height: 2.3rem;
  background: #62a167;
  border-radius: 0.8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
