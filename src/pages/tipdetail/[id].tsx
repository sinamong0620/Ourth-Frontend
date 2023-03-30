import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import TipLayout from "../../components/TipLayout";
import { ReactElement } from "react";

export default function Test() {
  const router = useRouter();
  const { text, imgurl } = router.query;

  const recycle = (
    <div>
      <p>
        <b>1. Small items can&#39;t be recycled!</b>
      </p>
      - Toothbrushes, pens, artificial tears, rubber gloves, cling wrap, and
      other small items are difficult to recycle. ☞ Rubber gloves and
      toothbrushes are considered general waste!
      <br></br>
      <p>
        <b>2.Distinguish between fake and real paper!</b>
      </p>
      - Even if it&#39;s paper, coated paper cannot be recycled. Throw away cup
      noodle paper, potato chip bags, ice cream packaging paper, flyers, and
      other items in the general waste bag. <br></br>
      <p>
        <b>3. Some kitchenware can&#39;t be recycled!</b>
      </p>
      - Heat-resistant glass pot lids and crystal glass, mirrors, fake dishes,
      ceramics, flower pots, and other items are considered general waste. ☞
      Properly separate kitchenware for recycling!<br></br>
      <p>
        <b>4. Jjajangmyeon (black bean noodle) bowls can&#39;t be recycled!</b>
      </p>
      - Melamine resin plastic dishes that are solid, smooth, and resemble
      ceramics cannot be sorted for recycling. Consumers, please properly
      separate your waste! Companies, please make recyclable products from the
      beginning! Let&#39;s actively practice for the next generation!
    </div>
  );
  const vegan = (
    <div>
      <p>
        <b>1.부피 작은 건 재활용 안돼요!</b>
      </p>
      칫솔, 볼펜, 인공눈물, 고무장갑, 비닐랩 등 부피가 작은 것들은 재활용하기
      어려워요. ☞ 고무장갑과 칫솔은 일반 쓰레기! <br></br>
      <p>
        <b>2. 짝퉁 종이와 진짜 종이를 구분하세요!</b>
      </p>
      종이라고 해도 코팅된 종이는 재활용이 안 돼요. 컵라면 종이, 감자 칩 통,
      아이스크림 포장 종이, 전단지 등은 종량제 봉투에 버리세요. <br></br>
      <p>
        <b>3. 일부 주방 식기들도 재활용 안 돼요!</b>
      </p>
      내열 유리 냄비 뚜껑과 크리스털 유리, 거울, 사기그릇, 도자기, 화분
      등은 일반쓰레기랍니다. ☞ 주방 식기들도 분리배출 제대로! <br></br>
      <p>
        <b>4. 짜장면 그릇은 재활용 안돼!</b>
      </p>
      도자기 느낌이 나는 단단하고 매끄러운 플라스틱 식기인 멜라민 수지는
      분리배출 안 되는 쓰레기로 분류해주세요. 소비자는 제대로 분리배출하기!
      기업은 만들 때부터 재활용 잘 되는 물건 만들기! 다음 세대를 위해 우리
      적극적으로 실천해봐요! [출처] 대한민국 정책브리핑(www.korea.kr)
    </div>
  );
  const enterprise = (
    <div>
      <p>
        <b>1.부피 작은 건 재활용 안돼요!</b>
      </p>
      칫솔, 볼펜, 인공눈물, 고무장갑, 비닐랩 등 부피가 작은 것들은 재활용하기
      어려워요. ☞ 고무장갑과 칫솔은 일반 쓰레기! <br></br>
      <p>
        <b>2. 짝퉁 종이와 진짜 종이를 구분하세요!</b>
      </p>
      종이라고 해도 코팅된 종이는 재활용이 안 돼요. 컵라면 종이, 감자 칩 통,
      아이스크림 포장 종이, 전단지 등은 종량제 봉투에 버리세요. <br></br>
      <p>
        <b>3. 일부 주방 식기들도 재활용 안 돼요!</b>
      </p>
      내열 유리 냄비 뚜껑과 크리스털 유리, 거울, 사기그릇, 도자기, 화분
      등은 일반쓰레기랍니다. ☞ 주방 식기들도 분리배출 제대로! <br></br>
      <p>
        <b>4. 짜장면 그릇은 재활용 안돼!</b>
      </p>
      도자기 느낌이 나는 단단하고 매끄러운 플라스틱 식기인 멜라민 수지는
      분리배출 안 되는 쓰레기로 분류해주세요. 소비자는 제대로 분리배출하기!
      기업은 만들 때부터 재활용 잘 되는 물건 만들기! 다음 세대를 위해 우리
      적극적으로 실천해봐요! [출처] 대한민국 정책브리핑(www.korea.kr)
    </div>
  );

  return (
    <TipContainer>
      {imgurl && (
        <Image src={`${imgurl}`} width={1000} height={1000} alt="팁사진" />
      )}
      <TextWrapper>
        <h1>{text}</h1>
        {recycle}
      </TextWrapper>
    </TipContainer>
  );
}
Test.getLayout = function getLayout(page: ReactElement) {
  return <TipLayout>{page}</TipLayout>;
};

const TipContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    margin: 1rem 0rem;
  }
  p {
    margin: 1rem 0rem;
  }

  div > p {
    font-size: 1.3rem;
    background: white;
    padding: 1rem;
    border-radius: 1rem;
  }
`;
const TextWrapper = styled.div`
  padding: 0rem 1.5rem;
  margin-bottom: 2rem;
`;
