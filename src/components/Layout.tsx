import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
//레이아웃 컴포넌트는 공통으로 들어가게될 Header 컴포넌트가 있고
//자식으로 오게될 { children } prop도 리턴해줍니다.

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainStyleContainer>
      <MainStyle>
        <Header />
        {children}
        <Footer />
      </MainStyle>
    </MainStyleContainer>
  );
};
export default Layout;

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
`;
const MainStyle = styled.div`
  background-color: #f6f6f6;
  max-width: 480px;
  padding: 0 1.5rem 0 1.5rem;

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }
`;
