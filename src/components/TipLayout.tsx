import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import styled from "styled-components";

const TipLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainStyleContainer>
      <MainStyle>{children}</MainStyle>
      <Footer />
    </MainStyleContainer>
  );
};
export default TipLayout;

const MainStyleContainer = styled.div`
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: left;
  background: #f6f6f6;
  position: relative;
`;
const MainStyle = styled.div`
  background-color: #f6f6f6;
  min-height: 100vh;

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }
`;
