import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext,useEffect } from "react";
import MyContext from "../Mycontext";
import axios from "axios";


export default function Footer() {
  const { userInfo, percentage, setPercentage,setHabitsVector,updateStatus } = useContext(MyContext);

  function computePorcentage(array) {
    if (array.length === 0) {
      setPercentage(0);
      return 0;
    }
    let average = Math.ceil(
      (array.filter((e) => e.done === true).length / array.length) * 100
    );
    setPercentage(average);
  }
  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((res) => {
      computePorcentage(res.data);
      setHabitsVector(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data);
    });
  }, [updateStatus]);


  return (
    <FooterContainer>
      <Link to="/habitos" data-identifier="habit-page-action">
        <span>Hábitos</span>
      </Link>
      <Link to="/hoje">
        <div style={{ width: 91, height: 91 }}>
          <CircularProgressbar
            value={percentage}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "19px",
              pathTransitionDuration: "0.5",
            })}
          />
        </div>
      </Link>
      <Link to="/historico" data-identifier="historic-page-action">
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
  div {
    margin-bottom: 50px;
  }
`;
