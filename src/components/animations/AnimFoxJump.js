import React from "react";
import styled from "styled-components";
import { AnimTextScale } from "./AnimText";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  > div {
    position: absolute;
    top: min(270px);
  }
  #rainbow {
    width: 75%;
  }
  #foxJump {
    position: absolute;
    height: 50%;
  }
`;

export const AnimFoxJump = (props) => (
  <Container>
    <img id="rainbow" src={"https://i.imgur.com/Q7WxcxU.png"} alt="" />
    <img id="foxJump" src={"https://i.imgur.com/pYZtH4X.gif"} alt="" />
    <div>
      <AnimTextScale stroke="white" color="#BAA5EC">
        Great!
      </AnimTextScale>
      {props.sectionFinished && (
        <AnimTextScale stroke="white" color="#FF4F47">
          You finish this lesson!
        </AnimTextScale>
      )}
    </div>
  </Container>
);

export default AnimFoxJump;
