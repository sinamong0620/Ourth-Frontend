import axios from "axios";
import Router from "next/router";
import { useState } from "react";
import { ChangeEvent, MouseEventHandler } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [username, setUsername] = useState("");
  const [passwordTrue, setpasswordTrue] = useState<boolean>(false);

  const onSubmitForm = async () => {
    try {
      const response = await axios.post("https://ourth.duckdns.org/join", {
        email: email,
        password: password,
        checkedPassword: checkpassword,
        schoolName: schoolName,
        username: username,
      });

      Router.push({
        pathname: "/login",
      });
    } catch (error) {
      alert(error);
    }
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onPassWordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckpassword(e.target.value);
    console.log(e.target.value);
  };

  const onMounsDownEvent = () => {
    if (password !== checkpassword) {
      setpasswordTrue(true);
    } else {
      setpasswordTrue(false);
    }
  };
  const onSchoolNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSchoolName(e.target.value);
    console.log(e.target.value);
  };
  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  return (
    <MainStyleContainer>
      <MainStyle>
        <Image src="/images/pngegg.png" alt="사진임" width={65} height={65} />
        <form>
          <LabelInputContainer>
            <LoginLabel>이메일</LoginLabel>
            <input
              type="text"
              value={email}
              onChange={onEmailChange}
              placeholder="이메일"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>비밀번호</LoginLabel>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="비밀번호"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>비밀번호 확인</LoginLabel>
            <input
              type="password"
              value={checkpassword}
              onChange={onPassWordCheckChange}
              onBlur={onMounsDownEvent}
              placeholder="비밀번호 확인"
            />
            {passwordTrue ? (
              <NotPassWord>비밀번호가 맞지 않습니다</NotPassWord>
            ) : (
              <div></div>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>학교</LoginLabel>
            <input
              type="text"
              value={schoolName}
              onChange={onSchoolNameChange}
              placeholder="학교"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <LoginLabel>이름</LoginLabel>
            <input
              type="text"
              value={username}
              onChange={onUserNameChange}
              placeholder="이름"
            />
          </LabelInputContainer>
        </form>
        <button onClick={onSubmitForm}>회원가입</button>
      </MainStyle>
    </MainStyleContainer>
  );
}
const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;
const MainStyle = styled.div`
  min-height: 100vh;
  background-color: white;
  max-width: 480px;
  padding: 0 3.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
  }
  input {
    width: 100%;
    border: 0.01rem solid lightgray;
    height: 4rem;
    border-radius: 1.3rem;
    padding: 1.5rem;

    div div:last-of-type {
      margin-top: 1rem;
    }
  }

  button {
    border: none;
    color: white;
    background: #62a167;
    width: 100%;
    height: 4rem;
    border-radius: 1.4rem;
  }
`;

const LoginLabel = styled.div`
  font-weight: 100;
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 0.2rem;
`;

const LabelInputContainer = styled.div`
  margin-bottom: 2rem; //이거는 input을 감싸는 div 속성에 넣자
`;

const NotPassWord = styled.div`
  margin-top: 0.51rem;
  color: red;
  font-weight: 400;
`;
