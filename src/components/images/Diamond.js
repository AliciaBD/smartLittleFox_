import React from "react";
import styled from "styled-components";

const StyledDiamond = styled.svg`
  margin-right: 8px;
  position: relative;
  top: 0px;
  width: 3rem;

  .diamond {
    fill: none;
    stroke: white;
    stroke-miterlimit: 10;
    stroke-width: 16px;
  }
  .sparkle {
    fill: white;
    animation: fadeIn 1.8s linear 3;
  }
  .sparkle.s1 {
    animation-delay: 0.3s;
  }
  .sparkle.s2 {
    animation-delay: 0.8s;
  }
  .sparkle.s3 {
    animation-delay: 1.6s;
  }
`;

const Diamond = () => (
  <StyledDiamond
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1399.85 1101.92"
  >
    <title>diamond</title>
    <path
      className="diamond"
      d="M495.77,302.39,282.28,444.05a1,1,0,0,0-.45.77l-5.94,93.05a1,1,0,0,0,.29.77l553,555a1,1,0,0,0,1.41,0l561-553a1,1,0,0,0,.3-.75l-4-93a1,1,0,0,0-.45-.79L1166,300.39l-.2-.1L1004,240.39a1,1,0,0,0-.34-.06l-337.64-2a1,1,0,0,0-.36.06L496,302.29Z"
    />
    <path
      className="diamond"
      d="M494.87,300.33l148.78,73.89a1,1,0,0,0,.46.11l375.55-6a1,1,0,0,0,.39-.09l143.81-63.92"
    />
    <path
      className="diamond"
      d="M1015.87,370.33l87.92,199.81a1,1,0,0,1,.08.4V668a1,1,0,0,1-.16.54L836.7,1085a1,1,0,0,1-1.68,0L560,666.57a1,1,0,0,1-.16-.53l-2-99.51a1,1,0,0,1,.07-.39L635.3,373.73a1,1,0,0,1,1.63-.33L833.87,570.33"
    />
    <path
      className="diamond"
      d="M275.87,446.33l279.8,123.91a1,1,0,0,0,.41.09l543.59-4a1,1,0,0,0,.37-.07l293.82-119.93"
    />
    <path
      className="diamond"
      d="M271.87,532.33l287.79,133.9a1,1,0,0,0,.43.09l543.58-6a1,1,0,0,0,.38-.08l285.82-119.92"
    />
    <path
      className="diamond"
      d="M1173.87,306.33l90.64,179.32a1,1,0,0,1-1.34,1.35L1028.52,370.65a1,1,0,0,0-1.16.2L833.87,570.33"
    />
    <path
      className="diamond"
      d="M633.87,372.33,398.67,498.82a1,1,0,0,1-1.37-1.33l96.57-190.16"
    />
    <path
      className="sparkle s1"
      d="M208.75,190.09c0,7,20.73,13,51,15.9A28,28,0,0,1,285,231c3,29.84,9.07,50.31,16.12,50.31S314.31,260.8,317.29,231a28,28,0,0,1,25.29-25c30.23-2.94,51-9,51-15.9s-20.76-13-51-15.94a28,28,0,0,1-25.29-25c-3-29.85-9.1-50.32-16.15-50.32S288,119.35,285,149.2a28,28,0,0,1-25.29,25C229.49,177.09,208.75,183.14,208.75,190.09Z"
    />
    <path
      className="sparkle s2"
      d="M1159.14,906.28c0,7,20.73,13,51,15.9a28,28,0,0,1,25.3,25c3,29.84,9.07,50.31,16.12,50.31s13.18-20.47,16.15-50.32a28,28,0,0,1,25.29-25c30.23-2.94,51-9,51-15.9s-20.76-13-51-15.94a28,28,0,0,1-25.29-25c-3-29.85-9.1-50.32-16.15-50.32s-13.14,20.47-16.11,50.32a28,28,0,0,1-25.29,25C1179.88,893.28,1159.14,899.32,1159.14,906.28Z"
    />
    <path
      className="sparkle s3"
      d="M77.65,586.36c0,4.92,14.46,9.17,35.56,11.24a19.62,19.62,0,0,1,17.64,17.64c2.07,21.09,6.32,35.56,11.24,35.56s9.19-14.47,11.27-35.56A19.62,19.62,0,0,1,171,597.6c21.09-2.08,35.56-6.34,35.56-11.24S192.08,577.18,171,575.1a19.62,19.62,0,0,1-17.64-17.64c-2.08-21.1-6.35-35.56-11.27-35.56s-9.16,14.47-11.24,35.56a19.62,19.62,0,0,1-17.64,17.64C92.12,577.17,77.65,581.45,77.65,586.36Z"
    />
    <path
      className="sparkle s4"
      d="M1205.42,64.47c0,4.92,14.46,9.17,35.56,11.24a19.62,19.62,0,0,1,17.64,17.64c2.07,21.09,6.32,35.56,11.24,35.56s9.19-14.47,11.27-35.56a19.62,19.62,0,0,1,17.64-17.64c21.09-2.08,35.56-6.34,35.56-11.24s-14.48-9.19-35.56-11.26a19.62,19.62,0,0,1-17.64-17.64C1279.06,14.47,1274.78,0,1269.87,0s-9.16,14.47-11.24,35.56A19.62,19.62,0,0,1,1241,53.2C1219.89,55.28,1205.42,59.55,1205.42,64.47Z"
    />
  </StyledDiamond>
);

export default Diamond;
