import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  mId: number;
  onClose?: () => Promise<void>;
}
const Modal = (props: IProps) => {
  const onCheckBoxChange = async () => {
    try {
      const response = await axios.patch(
        "https://ourth.duckdns.org/usermission/clear",
        { id: props.mId }, //body는 두번째 인자로 넣어야함.
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
      if (props.onClose) {
        await props.onClose();
      }
    } catch (error) {
      alert(error);
    }
  };
  const closeModal = () => {
    const body = document.querySelector("body") as HTMLElement;
    props.setModalOpen(false);
    body.style.removeProperty("overflow");
    // body.style.removeProperty("pointer-events");
    body.style.removeProperty("position");
    body.style.removeProperty("top");
    body.style.removeProperty("left");
    body.style.removeProperty("right");
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <button onClick={closeModal}>x</button>
        <p>모달입니다.</p>

        <button
          onClick={() => {
            onCheckBoxChange();
            closeModal();
          }}
        >
          미션 완료
        </button>
      </ModalContainer>
    </ModalBackground>
  );
};
export default Modal;

const ModalBackground = styled.div`
  background-color: rgba(139, 139, 139, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: display;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 85%;
  height: 30%;
  background: white;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  button:first-child {
    align-self: end;
    width: 1.5rem;
    height: 1.5rem;
  }
  button:last-child {
    width: 4rem;
    margin-bottom: 2rem;
  }
`;
