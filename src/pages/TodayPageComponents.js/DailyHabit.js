import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";

export default function DailyHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
}) {
  console.log(id, name, done, currentSequence, highestSequence);
  return (
    <HabitDailyCard done={done}>
      <div>
        <h2>{name}</h2>
        <p>Sequência atual: {currentSequence} dias</p>
        <p>Seu recorde: {currentSequence} dias</p>
      </div>
      <AiFillCheckSquare />
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

    color:${props=>props.done===true?"#8FC549":"#ebebeb"};

    border-radius: 5px;
  }
`;
