import styled from "styled-components";
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
  const daysHabitVector = ["D", "S", "T", "Q", "Q", "S", "S"];
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
        <DayHabitButton type="button" isSelected={days.includes(i)}>
          {element}
        </DayHabitButton> // posso mapear e retornar um styled components
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
const DayHabitButton = styled.button`
  color: ${(props) => (props.isSelected === true ? "#FFFFFF" : "#dbdbdb")};
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.isSelected === true ? "#CFCFCF" : "#ffffff")};
  border: ${(props) =>
    props.isSelected === true ? "none" : "1px solid #d5d5d5"};
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 8px;
`;
