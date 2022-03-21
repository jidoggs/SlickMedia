import React from "react";
import styled from "styled-components";
import image from "../static/heroImage.jpg";
const StyledHero = styled.section`
  /* background-image: url(props.); */
  width: 100vw;
  height: 550px;
  background-size: cover;
    @media (max-width: 834px) {
      display:flex;
    justify-content: center;
    align-items: center;
  }
    @media (max-width: 425px) {
      height: 257px;
  }

`;
const StyledText = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 94px;
  letter-spacing: -0.05em;
  color: #ffffff;
  padding-top: 109px;
  padding-left: 77px;
  width:480px;
  display: flex;

  @media (max-width: 834px) {
    text-align:center;
    padding:0
  }
  @media (max-width: 425px) {
    width: 273px;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.05em;

  }
`;

function Hero({ text }) {
  return (
    <StyledHero style={{ backgroundImage: `url(${image})` }}>
      <StyledText>{text}</StyledText>
    </StyledHero>
  );
}

export default Hero;
