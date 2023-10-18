import React, { useEffect } from "react";

const Sample3 = () => {
  useEffect(() => {
    console.log(document.getElementById("svg_2").getTotalLength());
  }, []);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="800"
        height="800"
        fill="black"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />

        <circle
          cx="100"
          cy="200"
          r="80"
          stroke="black"
          strokeWidth="2"
          fill="red"
        />
        <path
          strokeDasharray="3px,6px"
          //線段變虛線線段3 空格6
          strokeDashoffset="0"
          id="path"
          fill="none"
          stroke="#000"
          strokeWidth="1px"
          d="M452,293c0,0,0-61,72-44c0,0-47,117,81,57
    s5-110,10-67s-51,77.979-50,33.989"
        />
      </svg>
      <svg width="200" height="199" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect
            fill="#fff"
            id="canvas_background"
            height="201"
            width="202"
            y="-1"
            x="-1"
          />
          <g
            display="none"
            overflow="visible"
            y="0"
            x="0"
            height="100%"
            width="100%"
            id="canvasGrid"
          >
            <rect
              fill="url(#gridpattern)"
              stroke-width="0"
              y="0"
              x="0"
              height="100%"
              width="100%"
            />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <path
            stroke="#000"
            id="svg_2"
            d="m37.749999,87.099565c0,0 35.109394,-37.860794 65.639302,0.533251c30.529908,38.394045 57.243577,-1.599752 56.861953,-1.833049"
            stroke-width="1.5"
            fill="#fff"
          />
        </g>
      </svg>
      {/* <rect>、<circle>、<ellipse>、<line>和<polygon></polygon> */}
    </div>
  );
};

export default Sample3;
