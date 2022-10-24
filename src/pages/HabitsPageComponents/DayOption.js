import styled from "styled-components";

export default function DayOption({
  day,
  index,
  daysSelected,
  setDaysSelected,
  isSelected,
  isLoading,
}) {
  function handleDayButton(day) {
    if (isSelected === false) {
      setDaysSelected([...daysSelected, day]);
    } else {
      const aux = daysSelected.filter((element) => element !== day);
      setDaysSelected(aux);
    }
  }

  return (
    <DayButton
      data-identifier="week-day-btn"
      teste={isLoading}
      disabled={isLoading}
      isSelected={isSelected}
      onClick={() => handleDayButton(index)}
    >
      {day}
    </DayButton>
  );
}

const DayButton = styled.button`
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
