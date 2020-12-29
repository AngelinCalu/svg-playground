import React from "react";
// import Circle from "./app/shapes/circle";
// import Line from "./app/shapes/line";
// import Rectangle from "./app/shapes/rectangle";
import Animation from "./app/animation";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex items-center">
      <div className="mx-auto">
        {/* <Circle />
        <Rectangle />
        <Line /> */}

        <Animation />
      </div>
    </div>
  );
};

export default App;
