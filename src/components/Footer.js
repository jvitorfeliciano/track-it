import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
      <button>Hoje</button>
      </Link>
      <Link to="/historico">
        <span>Histórico</span>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100vw;
  height: 70px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52b6ff;
    text-decoration: none;
  }
  button {
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    background: #52b6ff;
    border-radius: 100px;
    border: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #ffffff;
  }
`;
