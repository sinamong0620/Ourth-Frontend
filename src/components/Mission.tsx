import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";

const Mission = () => {
  const { remainMission } = useMissionList();

  return (
    <MissionContainer>
      <div>미션</div>
      <MissionIconContainer>
        <EachIconContainer>
          <Image src="/images/fire.png" width={60} height={60} alt="체크" />
          <CurrentMissionClear>
            <div>이번 주 미션</div>
            <div>
              <b>{remainMission.length}개</b> 남음
            </div>
          </CurrentMissionClear>
        </EachIconContainer>
        <ReaminDayCss>3일 남음</ReaminDayCss>
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
  padding: 1.4rem 3rem 0rem 2rem;
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
  width: 4rem;
  height: 2.3rem;
  background: #62a167;
  border-radius: 0.8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
