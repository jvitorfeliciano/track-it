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
  const { userInfo, habitsDone, setHabitsDone } = useContext(MyContext);
  console.log(userInfo, habitsDone);
  console.log(id, name, done, currentSequence, highestSequence);

  function handleHabitStatus(doneStatus, adress) {
    if (doneStatus === true) {
      const aux = habitsDone.filter((e) => e !== adress);
      setHabitsDone(aux);

      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${adress}/uncheck`;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const promise = axios.post(URL, "", config);
      promise.then((res) => {
        setUpdateStatus(!updateStatus);
        console.log(res.data);
      });

      promise.catch((err) => {
        alert(err.response.data.message);
      });
    } else if (doneStatus === false) {
      setHabitsDone([...habitsDone, adress]);
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${adress}/check`;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const promise = axios.post(URL, "", config);
      promise.then((res) => {
        setUpdateStatus(!updateStatus);
        console.log(res.data);
      });

      promise.catch((err) => {
        alert(err.response.data.message);
      });
    }
  }

  return (
    <HabitDailyCard
      done={done}
      changeColor={currentSequence >= highestSequence}
    >
      <div>
        <h2>{name}</h2>
        <p>
          Sequência atual: <span>{currentSequence} dias</span>{" "}
        </p>
        <p>Seu recorde: {highestSequence} dias</p>
      </div>
      <AiFillCheckSquare onClick={() => handleHabitStatus(done, id)} />
    </HabitDailyCard>
  );
}

const HabitDailyCard = styled.section`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
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
  }
  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${(props) => (props.changeColor === true ? "#8FC549" : "#bababa")};
  }
`;
