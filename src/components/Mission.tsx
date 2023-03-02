import styled from "styled-components";
import Image from "next/image";
import useMissionList from "../hooks/useMissionList";

const Mission = () => {
  const { randomMission, saveRandomMission, userInfo } = useMissionList();

  return (
    <MissionContainer>
      <div>미션</div>
      <MissionIconContainer>
        <EachIconContainer>
          <div>
            <Image src="/images/accept.png" width={47} height={47} alt="체크" />
          </div>
          <div>1개</div>
          <div>오늘</div>
        </EachIconContainer>
        <EachIconContainer>
          <Image src="/images/insignia.png" width={53} height={53} alt="체크" />
          <div>1개</div>
          <div>뱃지</div>
        </EachIconContainer>
        <EachIconContainer>
          <Image src="/images/fire.png" width={52} height={52} alt="체크" />
          <div>1일</div>
          <div>연속</div>
        </EachIconContainer>
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
  justify-content: space-around;
  margin-top: 0.3rem;
`;

const EachIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div:nth-child(2) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: 530;
  }

  div:last-child {
    font-size: 0.9rem;
    font-weight: 100;
  }
`;
