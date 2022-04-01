import { useState } from "react";
import styled, { keyframes } from "styled-components";
import AnimCongratsPhrases from "../animations/AnimCongratsPhrases";
import { getRandomInt } from "../../functions/globalFunctions";
import soapBubble from "../sound/mixkit-soap-bubble-sound-2925-2.mp3";
import eggBubble from "../sound/mixkit-egg-bubble-pop-3192-2.mp3";

export const ButtonBase = styled.button`
  background: ${(props) =>
    props.page != undefined
      ? props.theme[props.page].buttons[props.type].normal
      : `#6495ED`};
  border-radius: 20px;
  border: 3px solid transparent;
  border-right-color: rgba(255, 255, 255, 0.71);
  border-top-color: rgba(255, 255, 255, 0.71);
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 1px 2px #696969;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px
    ${(props) =>
      props.page != undefined
        ? props.theme[props.page].buttons[props.type].dark
        : `#778899`};
  :hover {
    transform: scale(1.06);
    box-shadow: 0px 7px
      ${(props) =>
        props.page != undefined
          ? props.theme[props.page].buttons[props.type].dark
          : `#778899`};
  }
  :active {
    box-shadow: none;
    border: none;
    text-shadow: none;
  }
`;
export const ButtonCTA = styled(ButtonBase)`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 415px) {
    width: 90%;
  }
`;
export const ButtonPagination = styled.button`
  border-radius: 20px;
  border: 3px solid transparent;
  border-right-color: rgba(255, 255, 255, 0.71);
  border-top-color: rgba(255, 255, 255, 0.71);
  color: white;
  font-family: "Acme", sans-serif;
  letter-spacing: 1px;  
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px
    ${(props) =>
      props.page != undefined
        ? props.theme[props.page].buttons[props.type].dark
        : `#778899`};

  padding: 5px;
  font-size: 1.2rem;
  text-decoration-line: ${(props) => (props.active ? `underline` : `none`)};
  background-color: ${(props) =>
    props.active
      ? props.theme[props.page].buttons[props.type].dark
      : props.theme[props.page].buttons[props.type].normal};
  :hover {
    ${(props) => (!props.locked ? `transform: scale(1.06)` : "")};    
  }
  :active {
    ${(props) =>
      !props.locked
        ? `box-shadow: none;
            border: none;
            text-shadow: none;`
        : ``};
  } 
  }
`;
export const ButtonWord = styled(ButtonBase)`
  padding: 6px;
  margin-bottom: 5px;
  font-size: 1.3rem;
  font-weight: 600;
`;
export const ButtonOptions = styled(ButtonBase)`
  font-weight: 700;
  font-size: 2rem;
  padding: 10px 30px;
  @media screen and (max-width: 415px) {
    padding: 5px 10px;
  }
`;
export const ButtonIcon = styled(ButtonBase)`
  margin: 5px;
  padding: 8px;
  border: none;
  :hover {
    box-shadow: 0px 6px
      ${(props) =>
        props.page != undefined
          ? props.theme[props.page].buttons[props.type].dark
          : `#778899`};
  }
`;

const kfr_shake = keyframes`
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const ButtonGroup = styled.div`
  .anim_Fade {
    :focus {
      outline: none;
    }
    animation: fadeOut 300ms both;
  }
  .anim_shake {
    animation: ${kfr_shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    :focus {
      outline: none;
    }
  }
`;
export const ButtonEvaluation = (props) => {
  const { option, question, updateOptions } = props;
  const [className, setClassName] = useState("");
  const [display, setDisplay] = useState(false);
  const congrats = ["GOOD", "GREAT", "AWESOME", "SUPER", "AMAZING"];

  function play(sound) {
    var audio = new Audio(sound);
    audio.play();
  }

  const checkAnswer = () => {
    if (option === question) {
      setClassName("anim_Fade");

      setTimeout(() => {
        setDisplay(true);
      }, 300);

      setTimeout(() => {
        setClassName("");
        updateOptions(option);
      }, 1000);
      play(eggBubble);
    } else {
      play(soapBubble);
      setClassName("anim_shake");
      setTimeout(() => {
        setClassName("");
      }, 500);
    }
  };

  return (
    <ButtonGroup>
      {display ? (
        <AnimCongratsPhrases text={congrats[getRandomInt(congrats.length)]} />
      ) : (
        <ButtonOptions
          id={option}
          className={className}
          onClick={() => checkAnswer()}
          page="lesson"
          type="CTA"
        >
          {option}
        </ButtonOptions>
      )}
    </ButtonGroup>
  );
};
