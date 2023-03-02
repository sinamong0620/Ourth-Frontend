import styled from "styled-components";
import Image from "next/image";
const Footer = () => {
  return (
    <FotoerContainer>
      <div>
        <Image src="/images/home.png" alt="홈" width={30} height={30} />
        <div>홈</div>
      </div>

      <div>
        <Image src="/images/checked.png" alt="미션" width={30} height={30} />
        <div>미션</div>
      </div>
      <div>
        <Image
          src="/images/competition.png"
          alt="랭킹"
          width={30}
          height={30}
        />
        <div>랭킹</div>
      </div>
      <div>
        <Image
          src="/images/group-users.png"
          alt="커뮤니티"
          width={30}
          height={30}
        />
        <div>커뮤니티</div>
      </div>
      <div>
        <Image src="/images/idea.png" alt="팁" width={30} height={30} />
        <div>팁</div>
      </div>
    </FotoerContainer>
  );
};
export default Footer;

const FotoerContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding-top: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div > div {
    font-size: 0.5rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;
