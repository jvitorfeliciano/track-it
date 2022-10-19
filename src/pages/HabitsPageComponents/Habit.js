import styled from "styled-components";
import DayHabit from "./DayHabit";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import MyContext from "../../Mycontext";
import axios from "axios";
export default function Habit({
  name,
  days,
  updateListHabit,
  setUpdateListHabit,
  id,
}) {
  const daysHabitVector = ["S", "T", "Q", "Q", "S", "S", "D"];
  const { userInfo } = useContext(MyContext);

  function deleteHabit(adress) {
    const deleted = window.confirm("Quer mesmo deletar este hábito?");
    if (deleted) {
      console.log(deleted);
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${adress} `;
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const promise = axios.delete(URL, config);
      promise.then((resp) => {
        console.log(resp.data);
        setUpdateListHabit(!updateListHabit);
      });

      promise.catch((err) => {
        console.log(err.response);
      });
    }
  }

  return (
    <HabitContainer>
      <h2>{name}</h2>
      {daysHabitVector.map((element, i) => (
        <DayHabit index={i + 1} key={i} day={element} days={days} />
      ))}
      <BsTrash onClick={() => deleteHabit(id)} />
    </HabitContainer>
  );
}
const HabitContainer = styled.div`
  width: 340px;
  height: 91px;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  padding-left: 15px;
  padding-bottom: 18px;
  position: relative;
  h2 {
    margin-top: 13px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  svg {
    position: absolute;
    top: 11px;
    right: 11px;
  }
`;
