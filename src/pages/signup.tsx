import styled from "styled-components";

export default function Signup() {
  return (
    <>
      <MainStyleContainer>
        <MainStyle>야옹</MainStyle>
      </MainStyleContainer>
    </>
  );
}

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;
const MainStyle = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 0 1.5rem 0 1.5rem;
  border: 1px solid black;
`;
