import axios from "axios";
import Router from "next/router";
import { ChangeEventHandler, useCallback, useState } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import { universityName } from "../constants/schoolName";

export default function Join() {
  //회원가입 input 상태 저장 변수
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkpassword, setCheckpassword] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  //회원가입 유효성 검사 변수
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordTrue, setIsPasswordTrue] = useState<boolean>(false);
  const [isSchoolName, setIsScholName] = useState<boolean>(false);
  const [isUserName, setIsUserName] = useState<boolean>(false);

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
    } catch (error) {}
  };

  //input 함수들 onChange 만들기
  //useCallback을 사용하여 불필요한 rendering이 일어나지 않도록 방지한다.
  //두번째 인자에는 의존성 배열인데 의존하는 변수를 배열에 담아놓으면 그 값이 변경되기 전까진
  //그전에 사용하던 값을 계속 사용하기 때문에 불필요한 rendering을 줄일 수 있다.
  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (e.target.value !== "" && regExp.test(e.target.value)) {
      setIsEmail(false);
    } else {
      //input에 쓴 값이 아무것도 없다.
      setIsEmail(true);
    }
    //err : 이메일이 입력되지 않았습니다.
  }, []);
  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, []);
  const onPassWordCheckChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCheckpassword(e.target.value);
      if (password === e.target.value && e.target.value.length > 0) {
        setIsPasswordTrue(false);
      } else {
        setIsPasswordTrue(true);
      }
    },
    [password]
  );
  const onSchoolNameChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSchoolName(event.target.value);
      if (event.target.value !== "") {
        setIsScholName(false);
      } else {
        setIsScholName(true);
      }
    },
    []
  );
  const onUserNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value !== "") {
      setIsUserName(false);
    } else {
      setIsUserName(true);
    }
  }, []);

  return (
    <MainStyleContainer>
      <MainStyle>
        <Image src="/images/pngegg.png" alt="사진임" width={65} height={65} />
        <form>
          <LabelInputContainer>
            <LoginLabel>email</LoginLabel>
            <input
              type="text"
              value={email}
              onChange={onEmailChange}
              onBlur={onEmailChange}
              placeholder="email"
            />
            {isEmail && <NotPassWord>write your email</NotPassWord>}
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>password</LoginLabel>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              onBlur={onPasswordChange}
              placeholder="password"
            />
            {isPassword && (
              <NotPassWord>
                Please enter a password of at least 8 characters
              </NotPassWord>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <LoginLabel>check password</LoginLabel>
            <input
              type="password"
              value={checkpassword}
              onChange={onPassWordCheckChange}
              onBlur={onPassWordCheckChange}
              placeholder="check password"
            />
            {isPasswordTrue && (
              <NotPassWord>password does not match</NotPassWord>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>school</LoginLabel>
            {/* <input
              type="text"
              value={schoolName}
              onChange={onSchoolNameChange}
              onBlur={onSchoolNameChange}
              placeholder="학교"
            /> */}
            <select onChange={onSchoolNameChange}>
              {universityName.map((name: string) => (
                //value값을 이용해서 onChangeScholl에서 name을 useState에 저장할 수 있게함
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {isSchoolName && <NotPassWord>write you school name</NotPassWord>}
          </LabelInputContainer>
          <LabelInputContainer>
            <LoginLabel>name</LoginLabel>
            <input
              type="text"
              value={username}
              onChange={onUserNameChange}
              onBlur={onUserNameChange}
              placeholder="name"
            />
            {isUserName && <NotPassWord>write your name</NotPassWord>}
          </LabelInputContainer>
        </form>

        <button
          disabled={
            (isUserName &&
              isPassword &&
              isPasswordTrue &&
              isSchoolName &&
              isEmail) ||
            email.length === 0 ||
            password.length === 0 ||
            checkpassword.length === 0 ||
            schoolName.length === 0 ||
            username.length === 0
          }
          onClick={onSubmitForm}
        >
          Sign up
        </button>
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
  padding: 2.5rem;
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
    cursor: pointer;
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
  select {
    width: 100%;
    border: 0.01rem solid lightgray;
    height: 4rem;
    border-radius: 1.3rem;
    padding: 1.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("/images/down.png") no-repeat 95%;
    background-size: 1rem 1rem;
}
  }
`;

const NotPassWord = styled.div`
  margin-top: 0.51rem;
  color: red;
  font-weight: 400;
`;
