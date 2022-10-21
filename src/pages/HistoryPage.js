import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HistoryPage(){

    return(
     <>
        <Header/>
      
        <HistoryPageContainer>
        <MessageHistory>
            <h2>
                Histórico
            </h2>
            <p>
               Em breve você poderá ver o histórico dos seus hábitos aqui! 
            </p>
        </MessageHistory>
        </HistoryPageContainer>
        
        <Footer/>
     </>
    
    )
}

const HistoryPageContainer = styled.main`
  margin: 80px 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
`;

const MessageHistory = styled.section`
  width: 340px;
  margin-top: 28px;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 28px;
  }
`