import { useState, useEffect } from "react";
import styled from "styled-components";
interface IProps {
  text: string;
  start: number;
  end: number;
}
const Main = ({ text, start, end }: IProps) => {
  const [opacity, setOpacity] = useState<number>(0);
  const [value, setValue] = useState<boolean>(false);
  useEffect(() => {
    //add eventlistener to window
    const scrollExecute = (e: any) => {
      const { scrollY } = window;
      if (start < scrollY && scrollY < end - 500) {
        // 보이기 시작
        var temp = scrollY - start;
        setOpacity(temp / 500);
      }
      // 두 번째 if문 : 다 보일 때(opacity 1)부터 안보일 때(opacity 0)까지
      else if (scrollY > end - 500 && scrollY < end) {
        // 안보이기 시작
        var temp = end - scrollY;
        setOpacity(temp / 500);
      }
      // 만약 스크롤을 너무 빨리해서 opacity값이 0으로 안될 경우를 대비해서
      // 500 ~ 1500을 보여주는데 450이거나 1550으로 50값 오차를 두고
      // 넘어가려하면 깔끔하게 opacity를 0으로 만들고 지나감
      else if (scrollY <= start - 50) {
        // 시작
        setOpacity(0);
      } else if (scrollY <= end + 50 && scrollY > end) {
        // 끝
        setOpacity(0);
      } else if (scrollY < start - 50 || scrollY > end + 50) {
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", scrollExecute, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", scrollExecute);
    };
  });

  return <TextPosition style={{ opacity }}>{text}</TextPosition>;
};
export default Main;

const TextPosition = styled.h1`
  position: absolute;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: center;
`;
