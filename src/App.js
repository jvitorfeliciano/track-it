import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MyContext from "./Mycontext";
import HabitsPage from "./pages/HabitsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  const [userInfo, setUserInfo]=useState({}); // estado global

  return (
    <BrowserRouter>
      <MyContext.Provider value={{userInfo, setUserInfo}} > 
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage/>}/>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

