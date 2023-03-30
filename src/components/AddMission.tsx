import styled from "styled-components";
import Image from "next/image";

const AddMission = () => {
  return (
    <MissionContainer>
      <div>Mission</div>
      <MissionIconContainer>
        <EachIconContainer>
          <Image src="/images/fire.png" width={60} height={60} alt="체크" />
          <CurrentMissionClear>
            <div>Lets go protect the Ourth!</div>
            <div>
              <b>Get a mission</b>
            </div>
          </CurrentMissionClear>
        </EachIconContainer>
      </MissionIconContainer>
    </MissionContainer>
  );
};
export default AddMission;

const MissionContainer = styled.div`
  background: white;
  height: 10.5rem;
  border-radius: 1.8rem;
  margin: 0 auto;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
  text-align: left;
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
    font-size: 1.1rem;
  }

  div:last-child {
    font-size: 2rem;
  }
`;
