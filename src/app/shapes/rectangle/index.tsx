import React from "react";

const Rectangle: React.FC = (): JSX.Element => {
  const width = 100;
  const height = 200;
  const strokeWidth = 2;
  const strokeColor = "#006699";
  const borderRadius = 20;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width + 4 * strokeWidth} ${height + 4 * strokeWidth}`}
        width={width + 2 * strokeWidth}
        height={height + 2 * strokeWidth}
        version="1.1"
      >
        <rect
          fill="none"
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          width={width + 2 * strokeWidth}
          height={height + 2 * strokeWidth}
          x={strokeWidth}
          y={strokeWidth}
          rx={borderRadius}
          ry={borderRadius}
        />
      </svg>
    </div>
  );
};

export default Rectangle;
