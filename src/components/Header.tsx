import styled from "styled-components";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/images/pngegg.png" alt="사진임" width={60} height={60} />
      <div>OURTH</div>
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.header`
  width: 100%;
  height: 3em;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #f6f6f6;

  div {
    font-size: 1.9rem;
  }
`;
