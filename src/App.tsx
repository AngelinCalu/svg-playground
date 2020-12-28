import React from "react";
import Circle from "./app/shapes/circle";
import Line from "./app/shapes/line";
import Rectangle from "./app/shapes/rectangle";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="mx-auto">
        <Circle />
        <Rectangle />
        <Line />
      </div>
    </div>
  );
};

export default App;
