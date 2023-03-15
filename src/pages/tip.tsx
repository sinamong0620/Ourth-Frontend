import styled from "styled-components";
import Image from "next/image";
export default function Tip() {
  return (
    <MainStyleContainer>
      <MainStyle>
        <div>
          <Image
            src="/images/recyclingwaste.png"
            width={100}
            height={100}
            alt="사진"
          />
        </div>
      </MainStyle>
    </MainStyleContainer>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
`;
const MainStyle = styled.div`
  background-color: white;
  max-width: 480px;
  min-height: 100vh;

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }

  div:first-child {
    background-color: #b2a08f;
    display: flex;
    justify-content: center;
  }
`;
