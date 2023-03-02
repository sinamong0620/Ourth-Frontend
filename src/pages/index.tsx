import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
export default function Home() {
  return (
    <MainStyleContainer>
      <MainStyle>
        <Image src="/images/600.jpg" height={500} width={500} alt="공사중" />
        <h1>준비중</h1>
        <Link href="/login">
          <button>지구 살리기</button>
        </Link>
      </MainStyle>
    </MainStyleContainer>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;
const MainStyle = styled.div`
  background-color: #f6f6f6;
  max-width: 480px;
  padding: 0 1.5rem 0 1.5rem;
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
`;
