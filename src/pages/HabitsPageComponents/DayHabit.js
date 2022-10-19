import styled from "styled-components";

export default function DayHabit({day, days, index}) {
    const isSelected = true
  return (
    <DayHabitButton
        type="button"
      isSelected={days.includes(index)}
    >
      {day}
    </DayHabitButton>
  );
}

const DayHabitButton = styled.button`
  color: ${(props) => (props.isSelected === true ? "#FFFFFF;" : "#dbdbdb")};
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
