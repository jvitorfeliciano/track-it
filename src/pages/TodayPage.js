import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../Mycontext";
import DailyHabit from "./TodayPageComponents.js/DailyHabit";
import dayjs from "dayjs";

export default function TodayPage() {
  const { userInfo } = useContext(MyContext);
  const [habitsVector, setHabitsVector] = useState([]);
  console.log(dayjs(), dayjs().format("dddd"), dayjs().format("DD/MM"));
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
      console.log(res.data);
      setHabitsVector(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  function translateName() {
    switch (dayjs().format("dddd")) {
      case "Sunday":
        return "Segunda";
      case "Monday":
        return "Domingo";
      case "Tuesday":
        return "Terça";
      case "Wednesday":
        return "Quarta";
      case "Thursday":
        return "Quinta";
      case "Friday":
        return "Sexta";
      case "Saturday":
        return "Sábado";
      default:
        break;
    }
  }
  return (
    <div>
      <Header />
      <TodayPageContainer>
        <Date>
          <h2>
            {translateName()}, {dayjs().format("DD/MM")}
          </h2>
          <p>67% dos hábito concluídos</p>
        </Date>
        {habitsVector.map((e, i) => (
          <DailyHabit
            key={i}
            name={e.name}
            done={e.done}
            currentSequence={e.currentSequence}
            highestSequence={e.highestSequence}
            id={e.id}
          />
        ))}
      </TodayPageContainer>
      <Footer />
    </div>
  );
}

const TodayPageContainer = styled.main`
  margin: 80px 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
`;
const Date = styled.section`
  width: 340px;
  margin-top: 28px;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
    margin-bottom: 28px;
  }
`;
