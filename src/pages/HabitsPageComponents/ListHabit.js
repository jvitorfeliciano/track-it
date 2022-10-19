import Habit from "./Habit"
import Loading from "../../components/Loading"
export default function ListHabit({habitsAdded}){
    if(habitsAdded===null){
      return (
        <Loading/>
      )
    }

   else {
    return(
        <>
           {habitsAdded.map((e) => <Habit name={e.name} days={e.days}/>)}
        </>
        
    )
  }
}

