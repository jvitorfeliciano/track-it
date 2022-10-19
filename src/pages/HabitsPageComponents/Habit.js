import styled from "styled-components";
import DayHabit from "./DayHabit";
import {BsTrash} from "react-icons/bs"

export default function Habit({name, days}) {
const daysHabitVector = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <HabitContainer>
      <h2>{name}</h2>
      {daysHabitVector.map((element,i)=>(<DayHabit index={i+1} key={i} day={element} days={days}/>))}
      <BsTrash/>
    </HabitContainer>
  );
}
const HabitContainer = styled.div`
  width: 340px;
  height: 91px;
  margin-bottom: 10px;
  background: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding-left:15px;
  padding-bottom: 18px;
  position: relative;
  h2 {
    margin-top:13px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  svg{
    position: absolute;
    top:11px;
    right:11px;
  }
`;
