import axios from "axios";
import styled from "styled-components";
import { useAtom } from "jotai";
import { refreshIntervalAtom } from "../store/intervals";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";
interface Props {
  setModalShow: Dispatch<SetStateAction<boolean>>;
}
const Modal = (props: Props) => {
  const [refreshInterval, _] = useAtom(refreshIntervalAtom);
  const closeModal = () => {
    props.setModalShow(false);
  };
  const logout = async () => {
    try {
      await axios.post(
        "https://ourth.duckdns.org/logout",
        { refreshToken: `${localStorage.getItem("refreshKey")}` }, //post는 형식이 {data,{config}} 이렇게 해야함
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
      window.localStorage.removeItem("tokenKey");
      window.localStorage.removeItem("refreshKey");

      clearInterval(refreshInterval!);
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  const achievement = () => {
    router.push("/achievement");
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={closeModal}>x</CloseButton>
        <button onClick={logout}>로그아웃</button>
        <button
          onClick={() => {
            achievement(), closeModal();
          }}
        >
          나의 업적
        </button>
      </ModalContainer>
    </ModalBackground>
  );
};
export default Modal;

const ModalContainer = styled.div`
  width: 85%;
  height: 30%;
  background: white;
  border-radius: 1rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  button {
    width: 80%;
    height: 20%;
    border-radius: 1.3rem;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    background: #62a167;
    color: white;
    cursor: pointer;
  }
`;
const ModalBackground = styled.div`
  background-color: rgba(139, 139, 139, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0.2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 800;
  cursor: pointer;
`;
