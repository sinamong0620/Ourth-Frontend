import styled from "styled-components";
export default function test() {
  const LogoutFunc = () => {
    localStorage.clear();
    console.log("로그아웃됨");
  };
  return (
    <>
      <StickyDivContainer>
        <div>
          <StickyDiv color="green">
            <button onClick={LogoutFunc}>로그아웃</button>
          </StickyDiv>
        </div>
        <div>
          <StickyDiv color="blue"></StickyDiv>
        </div>
        <div>
          <StickyDiv color="black"></StickyDiv>
        </div>
        <div>
          <StickyDiv color="yellow"></StickyDiv>
        </div>
      </StickyDivContainer>
    </>
  );
}

const StickyDivContainer = styled.div``;

const StickyDiv = styled.div`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.color};
`;
