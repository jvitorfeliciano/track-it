import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
/* import ListHabit from "./HabitsPageComponents/ListHabit"; */
import Loading from "../components/Loading";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import Day from "./HabitsPageComponents/Day";
import Habit from "./HabitsPageComponents/Habit";
import axios from "axios";
import MyContext from "../Mycontext";

export default function HabitsPage() {
  const { userInfo } = useContext(MyContext);
  const daysVector = ["S", "T", "Q", "Q", "S", "S", "D"];
  const [showFormHabit, setShowFormHabit] = useState(false);
  const [habitInput, setHabitInput] = useState("");
  const [daysSelected, setDaysSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [habitsAdded, setHabitsAdded] = useState([]);
  const [updateListHabit, setUpdateListHabit] =useState(true);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((resp) => {
      setHabitsAdded(resp.data);
      console.log(resp.data) // quando o usuário não tem  hábitos cadastrados, o servidor retorna uma array vazia;
    });

    promise.catch((err)=>{
      console.log(err.response)
    })
  }, [updateListHabit]); // controlar o useEffect para renderizar o get sempre que eu adicionar mais um hábito;

  function changeFormHabitStatus() {
    if (showFormHabit === false) {
      setShowFormHabit(true);
    }
  }
  function handleCancelFormHabit() {
    setShowFormHabit(false);
  }

  function handleSaveFormHabit() {
    if (habitInput === "") {
      alert("Digite um hábito");
      return;
    }
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const aux = daysSelected.sort((a, b) => a - b);

    const body = {
      name: habitInput,
      days: aux,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const promise = axios.post(URL, body, config);
    promise.then((resp) => {
      setIsLoading(false);
      setHabitInput("");
      setDaysSelected([]);
      setShowFormHabit(false);
      setUpdateListHabit(!updateListHabit);
    });
    promise.catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
  }
  return (
    <>
      <Header />
      <HabitsPageContainer>
        <section>
          <h2>Meus hábitos</h2>
          <BsFillPlusSquareFill onClick={changeFormHabitStatus} />
        </section>

        {showFormHabit && (
          <AddTaskForm>
            <input
              disabled={isLoading}
              value={habitInput}
              onChange={(e) => setHabitInput(e.target.value)}
              placeholder="nome do hábito"
            />
            <WeekButtons>
              {daysVector.map((e, i) => (
                <Day
                  key={i}
                  day={e}
                  index={i}
                  daysSelected={daysSelected}
                  isLoading={isLoading}
                  isSelected={daysSelected.includes(i + 1)}
                  setDaysSelected={setDaysSelected}
                />
              ))}
            </WeekButtons>
            <CancelOrSave>
              <button
                disabled={isLoading}
                type="button"
                onClick={handleCancelFormHabit}
              >
                Cancelar
              </button>
              <button
                disabled={isLoading}
                type="button"
                onClick={handleSaveFormHabit}
              >
                {isLoading === true ? <Loading /> : "Salvar"}
              </button>
            </CancelOrSave>
          </AddTaskForm>
        )}

       {habitsAdded.length!==0 &&(
          <>
          {habitsAdded.map((e,i) => <Habit key={i} name={e.name} id={e.id} days={e.days} updateListHabit={updateListHabit} setUpdateListHabit ={setUpdateListHabit}/>)}
       </>
       
       )}

        {(habitsAdded.length === 0) && (
          <Message>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Message>
        )}
      </HabitsPageContainer>
      <Footer />
    </>
  );
}

const HabitsPageContainer = styled.main`
  margin: 80px 0;
  width: 100vw;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  section {
    margin-top: 26px;
    width: 340px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    svg {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      color: #52b6ff;
      background: #ffffff;
      border-radius: 4.63636px;
    }
    h2 {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      color: #126ba5;
    }
  }
`;
const Message = styled.p`
  width: 340px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;

const AddTaskForm = styled.div`
  width: 340px;
  height: 180px;
  margin-bottom:18px;
  background: #ffffff;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  position: relative;
  input {
    margin-top: 18px;
    width: 303px;
    height: 45px;
    padding-left: 11px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;
const WeekButtons = styled.div`
  width: 303px;
`;

const CancelOrSave = styled.div`
  position: relative;
  bottom: -30px;
  right: -55px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    text-align: center;
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:first-child {
    margin-right: 23px;
    color: #52b6ff;
    background: #ffffff;
  }
  button:nth-child(2) {
    background: #52b6ff;
    color: #ffffff;
  }
`;
