import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import LoginDesign from "../components/LogoDesign";
import MyContext from "../Mycontext";

export default function LoginPage() {
  const { setUserInfo } = useContext(MyContext);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loadingLogin, setLoadingLogin] = useState(false);

  function getLoginFormInfo(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  function handleLoginForm(e) {
    e.preventDefault();
    setLoadingLogin(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, loginForm);

    promise.then((resp) => {
      setLoadingLogin(false);
      setUserInfo(resp.data);
      navigate("/hoje");
    });

    promise.catch((err) => {
      setLoadingLogin(false);
      alert(err.response.data.message);
    });
  }
  return (
    <LoginPageContainer>
      <LoginDesign />
      <LoginForm onSubmit={handleLoginForm} isLoading={loadingLogin}>
        <input
          data-identifier="input-email"
          disabled={loadingLogin}
          onChange={getLoginFormInfo}
          name="email"
          type="email"
          required
          placeholder="email"
        />
        <input
          data-identifier="input-password"
          disabled={loadingLogin}
          onChange={getLoginFormInfo}
          name="password"
          type="password"
          required
          placeholder="senha"
        />
        <button data-identifier="login-btn" disabled={loadingLogin} type="submit">
          {loadingLogin ? <Loading /> : "Entrar"}
        </button>
      </LoginForm>
      <Link to="/cadastro" data-identifier="sign-up-action">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.main`
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

const LoginForm = styled.form`
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
    &:focus{
      color:black;
    }
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
    opacity: ${(props) => (props.isLoading === true ? "0.7" : "1")};
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #ffffff;
  }
`;
