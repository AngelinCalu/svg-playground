import React from "react";

const Circle: React.FC = (): JSX.Element => {
  const radius = 50;
  const diameter = radius * 2;
  const strokeWidth = 2;
  const strokeColor = "#006699";
  const centerColor = "#cc0000";

  return (
    <div>
      {/* https://www.w3.org/TR/SVG/shapes.html#CircleElement */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${diameter * 2} ${diameter * 2}`}
        width={diameter * 2}
        height={diameter * 2}
        version="1.1"
      >
        <circle
          fill="none"
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          r={radius - 1}
          cx={diameter}
          cy={diameter}
        />
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={diameter}
          cy={diameter}
        />
      </svg>
    </div>
  );
};

export default Circle;
