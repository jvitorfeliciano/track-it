import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import MyContext from "../Mycontext";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
 const {habitsDone, porcentage}=useContext(MyContext);

  return (
    <FooterContainer>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
        <div style={{ width: 91, height: 91}}>
        <CircularProgressbar
        value={porcentage}
        text={"hoje"}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#8FC549",
          trailColor: "transparent",
          marginbottom: "50px",
          textSize:"17.976px",
          pathTransitionDuration: "0.5",
    
        })}
      />
        </div>
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
  div{
    margin-bottom: 50px;
    display: flex;
  }
`;
