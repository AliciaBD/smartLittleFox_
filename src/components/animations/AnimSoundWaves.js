import React from "react";
import styled, { keyframes } from "styled-components";

const kScale = keyframes`
  0%{
    transform: scale(0);
    
  }
  80%{
    transform: scale(1.2);
    
  }
  100%{
    transform: scale(1);
  }
`;

const delay = 100;
const time = 500;

const DivLines = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  > div {
    margin-right: 2px;
    border-left: 4px solid white;
    animation: ${kScale} ${time}ms both ease-in-out;
  }
  div:nth-child(1) {
    height: 0.6rem;
  }
  div:nth-child(2) {
    height: 1.2rem;
    animation-delay: ${delay}ms;
  }
  div:nth-child(3) {
    height: 1.7rem;
    animation-delay: ${delay + 50}ms;
  }
  div:nth-child(4) {
    height: 2rem;
    animation-delay: ${delay + 60}ms;
  }
  div:nth-child(5) {
    height: 1.3rem;
    animation-delay: ${delay + 70}ms;
  }
  div:nth-child(6) {
    height: 1.7rem;
    animation-delay: ${delay + 80}ms;
  }
  div:nth-child(7) {
    height: 0.6rem;
    margin: 0px;
    animation-delay: ${delay}ms;
  }
`;

//same than buttonNext
const Wrapper = styled.div`
  padding: 5px 2rem;
  background: ${(props) =>
    props.page != undefined
      ? props.theme[props.page].buttons[props.type].normal
      : `#6495ED`};
  border-radius: 20px;
  border: 3px solid transparent;
  border-right-color: rgba(255, 255, 255, 0.71);
  border-top-color: rgba(255, 255, 255, 0.71);
  color: white;
  font-family: "Acme", sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 1px 2px #696969;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px
    ${(props) =>
      props.page != undefined
        ? props.theme[props.page].buttons[props.type].dark
        : `#778899`};
`;

const AnimSoundWaves = ({ page, type }) => {
  return (
    <Wrapper page={page} type={type}>
      <DivLines>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DivLines>
    </Wrapper>
  );
};

export default AnimSoundWaves;
