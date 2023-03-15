import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function Test() {
  const router = useRouter();
  const { text, img } = router.query;
  console.log(img);
  return (
    <MainStyleContainer>
      <MainStyle>
        <Image src={img} width={1000} height={1000} />
        <h1>{text}</h1>
        <p>
          <b>1. 부피 작은 건 재활용 안돼요!</b> 칫솔, 볼펜, 인공눈물, 고무장갑,
          비닐랩 등 부피가 작은 것들은 재활용하기 어려워요. ☞ 고무장갑과 칫솔은
          일반 쓰레기!
        </p>
        <p>
          <b>2. 짝퉁 종이와 진짜 종이를 구분하세요!</b> 종이라고 해도 코팅된
          종이는 재활용이 안 돼요. 컵라면 종이, 감자 칩 통, 아이스크림 포장
          종이, 전단지 등은 종량제 봉투에 버리세요.
        </p>
        <p>
          <b>3. 일부 주방 식기들도 재활용 안 돼요!</b> 내열 유리 냄비 뚜껑과
          크리스털 유리, 거울, 사기그릇, 도자기, 화분 등은 일반 쓰레기랍니다. ☞
          주방 식기들도 분리배출 제대로!
        </p>
        <p>
          <b> 4. 짜장면 그릇은 재활용 안 돼!</b> 도자기 느낌이 나는 단단하고
          매끄러운 플라스틱 식기인 멜라민 수지는 분리배출 안 되는 쓰레기로
          분류해주세요.
        </p>
        <p>
          소비자는 제대로 분리배출하기! 기업은 만들 때부터 재활용 잘 되는 물건
          만들기! 다음 세대를 위해 우리 적극적으로 실천해봐요! [출처] 대한민국
          정책브리핑(www.korea.kr)
        </p>
      </MainStyle>
    </MainStyleContainer>
  );
}
const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
`;
const MainStyle = styled.div`
  background-color: white;
  max-width: 480px;
  padding: 0 1.5rem 0 1.5rem;
  min-height: 100vh;
  h1 {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 200;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;
