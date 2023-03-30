import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface Props {
  setModalShow: Dispatch<SetStateAction<boolean>>;
}
const Header = (props: Props) => {
  const showModal = () => {
    props.setModalShow(true);
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/images/pngegg.png" alt="사진임" width={40} height={40} />
        <span>OURTH</span>
      </LogoContainer>
      <div onClick={showModal}>
        <Image src="/images/menu.png" width={30} height={30} alt="메뉴바" />
      </div>
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
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #f6f6f6;
  div:last-child {
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 0.6rem;
  }
  span {
    font-size: 1.9rem;
  }
`;
