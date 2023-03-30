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
