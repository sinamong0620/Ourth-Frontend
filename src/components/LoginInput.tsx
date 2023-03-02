import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";

const LoginInput = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setPassWord] = useState("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };
  const onSubmitForm = async () => {
    try {
      const response = await axios.post("https://ourth.duckdns.org/login", {
        email: loginId,
        password: loginPassword,
      });
      console.log(response);
      Router.push({
        pathname: "/main",
      });
      localStorage.setItem("tokenKey", response.data.accessToken);
      localStorage.setItem("refreshKey", response.data.refreshToken);
    } catch (error) {
      alert(error);
    }
    // Router.push({
    //   pathname: "/",
    //   query: { dataid: res.data.id },
    // });
  };
  return (
    <LoginForm>
      <form>
        <input
          type="text"
          value={loginId}
          placeholder="로그인"
          onChange={onChangeId}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        />
      </form>
      <button onClick={onSubmitForm}>로그인</button>
      <IdPasswordFind>
        <Link href="/join"> 회원가입 </Link>
      </IdPasswordFind>
    </LoginForm>
  );
};
export default LoginInput;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  button {
    height: 3rem;
    border-radius: 1.3rem;
    border: none;
    font-size: 0.9rem;
    width: 100%;
    background: #62a167;
    color: white;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    input {
      height: 3rem;
      padding: 1rem;
      border: 0.1rem solid lightgray;
      border-radius: 0 0 1.5rem 1.5rem;
    }

    input:first-child {
      border-bottom: none;
      border-radius: 1.5rem 1.5rem 0 0;
    }
  }
`;

const IdPasswordFind = styled.div`
  font-size: 0.7rem;
  color: lightgray;

  a:visited,
  a:link,
  a:active {
    color: lightgray;
    text-decoration: none;
  }
`;
