import Link from "next/link";
import { Router } from "react-router";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const loginRouterPush = () => {
    router.push("/login");
  };
  const JoinRouterPush = () => {
    router.push("/join");
  };
  return (
    <MainStyleContainer>
      <MainStyle>
        <div>
          <h1>지구의 남은</h1>
          <h1>수명은 얼마일까요?</h1>
        </div>
        <div>
          <button onClick={loginRouterPush}>로그인하기</button>
          <button onClick={JoinRouterPush}>회원가입하기</button>
        </div>
      </MainStyle>
    </MainStyleContainer>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem 0 10rem 0;
`;
const MainStyle = styled.div`
  width: 100%;

  div:last-child {
    display: flex;
    flex-direction: column;

    button {
      margin-bottom: 2rem;
      padding: 1rem;
      width: 100%;
    }
  }
`;
