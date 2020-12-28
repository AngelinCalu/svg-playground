import React from "react";

const App: React.FC = (): JSX.Element => {
  const radius = 50;
  const viewBox = 100;
  const strokeWidth = 2;
  const strokeColor = "#006699";

  return (
    <div className="w-full h-screen flex items-center">
      <div className="mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
          width={viewBox * 2}
          height={viewBox * 2}
          version="1"
        >
          <circle
            fill="none"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            r={radius - 1}
            cx={viewBox}
            cy={viewBox}
          />
        </svg>
      </div>
    </div>
  );
};

export default App;
