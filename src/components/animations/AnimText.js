import React from "react";
import styled, { keyframes } from "styled-components";

const kfr_scale = keyframes`
0%{
transform: scale(0);
}
100%{
transform: scale(1);
}
`;

const Container = styled.div`
  font-family: "Luckiest Guy", cursive;
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  color: ${(props) => props.color};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.stroke};
  animation: ${kfr_scale} ${(props) => props.timeAnimation}ms both;
`;

//could be later a list of animation types for the text
export const AnimTextScale = (props) => {
  return (
    <Container
      timeAnimation={props.timeAnimation || `500`}
      stroke={props.stroke || "unset"}
      color={props.color || "black"}
    >
      {props.children}
    </Container>
  );
};
