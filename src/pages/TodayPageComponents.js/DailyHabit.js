import styled from "styled-components";
import { AiFillCheckSquare, AiOutlineExpandAlt } from "react-icons/ai";
import { useContext } from "react";
import MyContext from "../../Mycontext";
import axios from "axios";

export default function DailyHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  setUpdateStatus,
  updateStatus,
}) {
  const { userInfo } = useContext(MyContext);

  function handleHabitStatus(doneStatus, adress) {
    if (doneStatus === true) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${adress}/uncheck`;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const promise = axios.post(URL, {}, config);
      promise.then((res) => {
        setUpdateStatus(!updateStatus);
      });

      promise.catch((err) => {
        alert(err.response.data.message);
      });
    } else if (doneStatus === false) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${adress}/check`;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const promise = axios.post(URL, {}, config);
      promise.then((res) => {
        setUpdateStatus(!updateStatus);
      });

      promise.catch((err) => {
        alert(err.response.data.message);
      });
    }
  }

  return (
    <>
      <HabitDailyCard
        data-identifier="today-infos"
        done={done}
        changeColor={currentSequence >= highestSequence && done === true}
      >
        <div>
          <div>{name}</div>
          <p>
            Sequência atual: <span>{currentSequence} dias</span>
            <br></br>
            Seu recorde: <span>{highestSequence} dias</span>
          </p>
        </div>
        <AiFillCheckSquare
          onClick={() => handleHabitStatus(done, id)}
          data-identifier="done-habit-btn"
        />
      </HabitDailyCard>
    </>
  );
}

const HabitDailyCard = styled.section`
  width: 340px;
  height:auto;
  word-break: break-all;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width:250px;
    word-break:break-all;
    height:auto;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  svg {
    font-size: 69px;

    color: ${(props) => (props.done === true ? "#8FC549" : "#ebebeb")};

    border-radius: 5px;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    span {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 12.976px;
      line-height: 16px;
    }
    span:first-child {
      color: ${(props) => (props.done === true ? "#8FC549" : " #666666")};
    }

    span:last-child {
      color: ${(props) =>
        props.changeColor === true ? "#8FC549" : " #666666"};
    }
  }
`;
