import { FC, PropsWithChildren, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import MenuModal from "../components/MenuModal";

//레이아웃 컴포넌트는 공통으로 들어가게될 Header 컴포넌트가 있고
//자식으로 오게될 { children } prop도 리턴해줍니다.

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  return (
    <MainStyleContainer>
      <MainStyle>
        <Header setModalShow={setModalShow} />
        {children}
        {modalShow && <MenuModal setModalShow={setModalShow} />}
      </MainStyle>
      <Footer />
    </MainStyleContainer>
  );
};
export default Layout;

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
  padding: 0 1.5rem 0 1.5rem;

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }
`;
