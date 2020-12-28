import React from "react";
import Circle from "./app/shapes/circle";
import Rectangle from "./app/shapes/rectangle";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="mx-auto">
        <Circle />
        <Rectangle />
      </div>
    </div>
  );
};

export default App;
