import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  mId: number;
  mission: string;
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
        <p>Write Mission feedback</p>
        <input />
        <button
          onClick={() => {
            onCheckBoxChange();
            closeModal();
          }}
        >
          complete
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

  input {
    border: 1px solid #747474;
    width: 11rem;
    height: 4rem;
    border-radius: 0.5rem;
  }

  button:first-child {
    display: flex;
    align-self: end;
    width: 1rem;
    min-width: 2rem;
    height: 2rem;
    background: red;
    border-radius: 0 1rem;
    font-size: 1.3rem;
    font-weight: 800;
    align-items: center;
    justify-content: center;
  }
  button:last-child {
    width: 4rem;
    margin-bottom: 2rem;
  }
`;
