import styled from "styled-components";
import Image from "next/image";
import axios from "axios";

interface IProps {
  id: number;
  todo: string;
  todomore: string;
  imgurl: string;
  saveRandomMission: () => {};
}

const TodaysMission = (props: IProps) => {
  const onCheckBoxChange = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const response = await axios.patch(
        "https://ourth.duckdns.org/usermission/clear",
        { id: (e.target as HTMLButtonElement).id }, //body는 두번째 인자로 넣어야함.
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
      console.log(response);
      props.saveRandomMission();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <TodayMissionComponent>
        <div>
          <Image src={props.imgurl} width={50} height={50} alt="체크" />
          <TodaysMissionText>
            <div>{props.todo}</div>
            <div>{props.todomore}</div>
          </TodaysMissionText>
        </div>
        <button
          id={String(props.id)}
          onClick={(e) => {
            onCheckBoxChange(e);
          }}
        >
          완료
        </button>
      </TodayMissionComponent>
    </>
  );
};
export default TodaysMission;

const TodayMissionComponent = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  button {
    width: 3rem;
    height: fit-content;
    padding: 0.4rem;
    border: none;
    color: white;
    background: #62a167;
    border-radius: 0.51rem;
    cursor: pointer;
  }

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
