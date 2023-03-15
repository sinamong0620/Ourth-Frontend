import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainStyleContainer>
      <MainStyle>
        <Header />
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
`;
