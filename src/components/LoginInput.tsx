import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import refreshInterval from "../utils/auth/refreshInterval";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { refreshIntervalAtom } from "../store/intervals";

const LoginInput = () => {
  const router = useRouter();
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setPassWord] = useState("");
  const [_, setRefreshInterval] = useAtom(refreshIntervalAtom);

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

      localStorage.setItem("tokenKey", response.data.data.accessToken);
      localStorage.setItem("refreshKey", response.data.data.drefreshToken);

      router.push({
        pathname: "/main",
      });

      const interval = setInterval(() => refreshInterval(router), 1740000);
      setRefreshInterval(interval);
    } catch (error) {
      //typescript에서는 error가 unknown으로 떠서 이렇게 처리를 해주어야 한다.
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
        // Do something with this error...
      } else {
        alert(error);
      }
    }
  };

  return (
    <LoginForm>
      <form>
        <input
          type="text"
          value={loginId}
          placeholder="email"
          onChange={onChangeId}
        />
        <input
          type="password"
          placeholder="password"
          onChange={onChangePassword}
        />
      </form>
      <button onClick={onSubmitForm}>sign in</button>
      <IdPasswordFind>
        <Link href="/join"> sign up </Link>
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
    cursor: pointer;
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
