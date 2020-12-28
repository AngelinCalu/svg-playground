import React from "react";

// https://www.w3.org/TR/SVG/shapes.html#LineElement
const Line: React.FC = (): JSX.Element => {
  const x1 = 0;
  const y1 = 0;
  const x2 = 100;
  const y2 = 100;
  const strokeWidth = 2;
  const strokeColor = "#006699";

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${x2} ${y2}`}
        width={x2}
        height={y2}
        version="1.1"
      >
        <line
          fill="none"
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        />
      </svg>
    </div>
  );
};

export default Line;
