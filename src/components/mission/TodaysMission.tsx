import styled from "styled-components";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

interface IProps {
  id: number;
  todo: string;
  imgurl: string;
  point: number;
  onSuccess: () => Promise<void>;
}

const TodaysMission = (props: IProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const scrollStop = () => {
    const body = document.querySelector("body") as HTMLElement;
    const scrollPosition = window.pageYOffset;

    body.style.overflow = "hidden";
    //이거 추가하면 스크롤이 안되네 ..? 왤까나..
    // body.style.pointerEvents = "none";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.right = "0";
  };

  return (
    <TodayMissionComponent>
      <div>
        <Image src={props.imgurl} width={50} height={50} alt="체크" />
        <TodaysMissionText>
          <div>{props.todo}</div>
          <div>{`${props.point}pt`}</div>
        </TodaysMissionText>
      </div>
      <button
        id={String(props.id)}
        onClick={(e) => {
          //모달 완성하고 나서 이거 옮겨주기
          setModalOpen(true);
          scrollStop();
        }}
      >
        완료
      </button>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          mId={props.id}
          onClose={props.onSuccess}
        />
      )}
    </TodayMissionComponent>
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
function useRecoilState(textState: any): [any, any] {
  throw new Error("Function not implemented.");
}
