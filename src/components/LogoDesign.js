import styled from "styled-components";
import logo from "../assets/logo.png";
export default function LoginDesign() {
  return (
    <>
      <Logo>
        <figure>
          <img src={logo} />
        </figure>
      </Logo>
      <Title>Trackit</Title>
    </>
  );
}

const Logo = styled.section`
  width: 180px;
  height: 116px;
  img {
    width: 100%;
    height: auto;
  }
`;
const Title = styled.h1`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 68.982px;
  line-height: 86px;
  color: #126ba5;
`;