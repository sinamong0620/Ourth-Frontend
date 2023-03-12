import { useState } from "react";

const useScroll = (start: number, end: number) => {
  const [text, setText] = useState<string>("야옹");
  //해당 컴포넌트의 범위에 들어오게 되면
  //opacity 변하게 하기

  //.1 해당 컴포넌트의 시작점과 끝점 알아오기(엥? 근데 컴포넌트의 시작과 끝점이 없는데?)

  //.2 시작점과 끝점의 범위 안에 들어오면 opacity 나타나게 하기

  //리턴 값은 뭐로 해야해?..
  return { start, end };
};
export default useScroll;
//useScroll로 시작시점과 끝지점 계산만 해주자
