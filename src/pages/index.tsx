import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  return (
    <MainStyleContainer>
      <h1>지구의 남은</h1>
      <h1>수명은 얼마일까요?</h1>
      <Link href="/login">
        <button>지구야 기다려!!</button>
      </Link>
    </MainStyleContainer>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;
const MainStyle = styled(motion.div)`
  background-color: black;
  max-width: 480px;
  min-height: 100vh;

  button {
    height: 3rem;
    border-radius: 1.3rem;
    border: none;
    font-size: 0.9rem;
    width: 100%;
    background: #62a167;
    color: white;
    margin-bottom: 1rem;
  }
  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }

  h1 {
    color: white;
  }
`;
