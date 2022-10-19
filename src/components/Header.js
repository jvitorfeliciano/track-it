import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../Mycontext";

export default function Header() {
    const {userInfo} = useContext(MyContext)
    console.log(userInfo)
  return (
    <HeaderContainer>
      <span>Trackit</span>
      <figure>
        <img src={userInfo.image}/>
      </figure>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:2;
  figure {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    img{
        width:100%;
        height:51px;
        border-radius: 98.5px;
    }
  }
  span {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
`;
