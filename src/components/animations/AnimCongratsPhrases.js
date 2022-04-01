import React from "react";
import styled, { keyframes } from "styled-components";

let base = 40;
let duration = 100;

const kfr_scale = keyframes`
0%{
transform: scale(0);
}
100%{
transform: scale(2);
}
`;

const StyledSVG = styled.svg`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "60px"};
  text {
    font: italic 1.5rem "Luckiest Guy", cursive;
    stroke: black;
  }
  .bg {
    fill: white;
    transform-origin: center;
    animation: ${kfr_scale} ${duration}ms both;
  }
  .bg > text {
    stroke: white;
    stroke-width: 8px;
  }
  .first {
    fill: ${(props) => props.color1 || "#ffa3bc"};
    transform-origin: center;
    animation: ${kfr_scale} ${duration}ms both;
    animation-delay: ${base}ms;
  }
  .second {
    fill: ${(props) => props.color2 || "#4ba04b"};
    transform-origin: center;
    animation: ${kfr_scale} ${duration}ms both;
    animation-delay: ${base + 50}ms;
  }
  .second > text {
    transform: translateY(-3px) translateX(-1px);
  }
  .third {
    fill: ${(props) => props.color3 || "#76c8f7"};
    transform-origin: center;
    animation: ${kfr_scale} ${duration}ms both;
    animation-delay: ${base + 100}ms;
  }
  .third > text {
    transform: translateY(-6px) translateX(-2px);
  }
  .fourth {
    fill: ${(props) => props.color4 || "#fcc334"};
    transform-origin: center;
    animation: ${kfr_scale} ${duration}ms both;
    animation-delay: ${base + 150}ms;
  }
  .fourth > text {
    transform: translateY(-9px) translateX(-3px);
  }
  polygon {
    fill: white;
    stroke: black;
  }
  .star1 {
    transform: translateX(20px) translateY(-15px);
  }
  .star2 {
    transform: translateX(35px) translateY(25px);
  }
`;
const AnimCongratsPhrases = (props) => {
  const arr = props.text.split(" ");

  return (
    <StyledSVG
      viewBox="30 -15 100 110"
      color1={props.color1}
      color2={props.color2}
      color3={props.color3}
      color4={props.color4}
      width={props.width}
      height={props.height}
    >
      <g className="bg">
        <text x="10" y="50">
          {arr[0]}
        </text>
        <text x="20" y="70">
          {arr.length > 1 && arr[1]}
        </text>
      </g>
      <g className="first">
        <text x="10" y="50">
          {arr[0]}
        </text>
        <text x="20" y="70">
          {arr.length > 1 && arr[1]}
        </text>
      </g>
      <g className="second">
        <text x="10" y="50">
          {arr[0]}
        </text>
        <text x="20" y="70">
          {arr.length > 1 && arr[1]}
        </text>
      </g>
      <g className="third">
        <text x="10" y="50">
          {arr[0]}
        </text>
        <text x="20" y="70">
          {arr.length > 1 && arr[1]}
        </text>
      </g>
      <g className="fourth">
        <text x="10" y="50">
          {arr[0]}
        </text>
        <text x="20" y="70">
          {arr.length > 1 && arr[1]}
        </text>
      </g>
      <polygon
        className="star1"
        points="11.34 0 14.84 7.1 22.68 8.24 17.01 13.76 18.35 21.57 11.34 17.88 4.33 21.57 5.67 13.76 0 8.24 7.83 7.1 11.34 0"
      />
      <polygon
        className="star2"
        points="11.34 0 14.84 7.1 22.68 8.24 17.01 13.76 18.35 21.57 11.34 17.88 4.33 21.57 5.67 13.76 0 8.24 7.83 7.1 11.34 0"
      />
    </StyledSVG>
  );
};

export default AnimCongratsPhrases;
