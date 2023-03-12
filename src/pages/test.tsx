import styled from "styled-components";
import Main from "../components/main/Main";
import Link from "next/link";
export default function Test() {
  return (
    <>
      <MainStyleContainer>
        <video src="/videos/video.mp4" muted autoPlay loop playsInline />

        <ScrollHeight>
          <MainTextContainer>
            <Main text="지구의 수명" start={500} end={1500} />
            <Main text="고작 100년" start={2000} end={3000} />
            <Main text="고작 50년" start={3500} end={4500} />
            <Main text="고작 20년" start={5000} end={6000} />
            <Main text="밖에 남지 않았습니다." start={6500} end={7500} />
            <Main text="지구를 도와주세요." start={8000} end={9000} />
            <Main text="지구를 도와주세요." start={8000} end={9000} />
            <Link href="/login">
              <button>지구야 기다려!!</button>
            </Link>
          </MainTextContainer>
        </ScrollHeight>
      </MainStyleContainer>
    </>
  );
}
const MainStyleContainer = styled.div`
  video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }
`;
const ScrollHeight = styled.div`
  height: 700rem;
`;
const MainTextContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;

  button {
    position: absolute;
    top: 90%;
  }
`;
