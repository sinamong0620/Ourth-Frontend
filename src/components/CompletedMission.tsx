import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
const CompletedMission = () => {
  return (
    <>
      <div>완료</div>
      <TodayMissionComponent>
        <div>
          <Image src="/images/poo.png" width={50} height={50} alt="체크" />
          <TodaysMissionText>
            <div>똥 덜싸기</div>
            <div>똥 좀 덜 쌉니다</div>
          </TodaysMissionText>
        </div>
      </TodayMissionComponent>
    </>
  );
};
export default CompletedMission;

const TodayMissionComponent = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  opacity: 0.6;

  > div {
    display: flex;
    align-items: center;
  }
`;

const TodaysMissionText = styled.div`
  margin-left: 1rem;

  div:first-child {
    font-size: 1.5rem;
    font-weight: 400;
  }
  :last-child {
    font-size: 0.9rem;
    font-weight: 100;
  }
`;
