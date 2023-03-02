import styled from "styled-components";
import Image from "next/image";
import LoginInput from "../components/LoginInput";

export default function Login() {
  return (
    <LoginScreen>
      <Image src="/images/pngegg.png" alt="사진임" width={65} height={65} />
      <LoginInput />
      <EmptyDiv />
    </LoginScreen>
  );
}

const LoginScreen = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 1.5rem 1.5rem 1.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 1rem;
  }
`;

const EmptyDiv = styled.div`
  height: 13rem;
`;
