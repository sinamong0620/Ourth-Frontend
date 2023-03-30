import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <FotoerContainer>
      <div>
        <Link href="/main">
          <Image src="/images/home.png" alt="홈" width={30} height={30} />
          <div>Home</div>
        </Link>
      </div>

      <div>
        <Link href="/mission">
          <Image src="/images/checked.png" alt="미션" width={30} height={30} />
          <div>Mission</div>
        </Link>
      </div>
      <div>
        <Link href="/ranking">
          <Image
            src="/images/competition.png"
            alt="랭킹"
            width={30}
            height={30}
          />
          <div>Ranking</div>
        </Link>
      </div>
      <div>
        <Link href="/chatgpt">
          <Image src="/images/pngegg.png" alt="Ourth" width={30} height={30} />
          <div>Ourth</div>
        </Link>
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

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div > a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div > a > div {
    font-size: 0.7rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;
