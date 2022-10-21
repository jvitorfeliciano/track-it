import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import LoginDesign from "../components/LogoDesign";

export default function SignUpPage() {
  const [signUpForm, setSignUpform] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const navigate = useNavigate();

  function getSignUpInfos(e) {
    console.log(e.target.value);
    setSignUpform({ ...signUpForm, [e.target.name]: e.target.value });
  }

  function handleSignUpForm(e) {
    e.preventDefault();
    setLoadingSignUp(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, signUpForm);
    promise.then((resp) => {
      navigate("/");
      console.log(resp.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setLoadingSignUp(false);
    });
  }
  return (
    <SignUpPageContainer>
      <LoginDesign />
      <SignUpForm onSubmit={handleSignUpForm} isLoadingSignUp={loadingSignUp}>
        <input
          disabled={loadingSignUp}
          onChange={getSignUpInfos}
          name="email"
          type="email"
          placeholder="email"
          required
        />
        <input
          disabled={loadingSignUp}
          onChange={getSignUpInfos}
          name="password"
          type="password"
          placeholder="senha"
          required
        />
        <input
          disabled={loadingSignUp}
          onChange={getSignUpInfos}
          name="name"
          type="text"
          placeholder="nome"
          required
        />
        <input
          disabled={loadingSignUp}
          onChange={getSignUpInfos}
          name="image"
          type="url"
          placeholder="foto"
          required
        />
        <button
          disabled={loadingSignUp}
          onChange={getSignUpInfos}
          type="submit"
        >
          {loadingSignUp ? <Loading /> : "Cadastrar"}
        </button>
      </SignUpForm>
      <Link to="/">
        <span>Já tem uma conta?Faça Login!</span>
      </Link>
    </SignUpPageContainer>
  );
}

const SignUpPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-top: 4px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }
`;

const SignUpForm = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    margin-bottom: 6px;
    padding-left: 11px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    opacity: ${props=> props.isLoadingSignUp===true? "0.7":1};
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #ffffff;
  }
`;
