import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1>지구의 남은</h1>
          <h1>수명은 얼마일까요?</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button onClick={loginRouterPush}>로그인</button>
          <button onClick={JoinRouterPush}>회원가입</button>
        </motion.div>
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
  background-image: url("/images/earthanimation.gif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-color: #eaf7e1;
`;
const MainStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div:first-child {
    color: white;
    text-shadow: 0.1rem 0.1rem 0.1rem green;
    h1:first-child {
      font-size: 3.3rem;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    button {
      width: 80%;
      margin-bottom: 2rem;
      padding: 1rem;
      cursor: pointer;
      height: 40%;
      border-radius: 1rem;
      border: none;
      font-size: 1rem;
      font-weight: 500;
      background: #62a167;
      color: white;
    }
  }
`;
