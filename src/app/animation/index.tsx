import React, { useRef, useEffect } from "react";

const Animation: React.FC = (): JSX.Element => {
  const radius = 240;
  const diameter = radius * 2;
  const strokeWidth = 2;
  const strokeColor = "#172A4D";
  const centerColor = "#cc0000";

  const circle1Path = useRef<SVGPathElement>(null);
  const circle2Path = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (circle1Path.current && circle2Path.current) {
      const length = circle1Path.current.getTotalLength();
      circle1Path.current.style.strokeDasharray = `${length} ${length}`;
      circle1Path.current.style.strokeDashoffset = String(length);

      circle2Path.current.style.strokeDasharray = `${length} ${length}`;
      circle2Path.current.style.strokeDashoffset = String(length);

      window.addEventListener("scroll", () => {
        const scrollpercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        const draw = length * scrollpercent;
        circle1Path.current!.style.strokeDashoffset = String(length - draw);
        circle2Path.current!.style.strokeDashoffset = String(length - draw);
      });
    }
  }, []);

  //   useLayoutEffect(() => {
  //     console.log("useLayoutEffect, element is = ", SVGElement.current);
  //   }, []);

  return (
    <div className="fixed mx-auto top-10 left-20 md:left-1/3">
      <svg
        // ref={SVGElement}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 
            ${diameter * 2 + radius + 2 * strokeWidth} 
            ${diameter * 2 + radius + 2 * strokeWidth}
            `}
        width={diameter}
        height={diameter}
      >
        <text
          fontFamily="Verdana, tahoma"
          fill={strokeColor}
          fontSize="4rem"
          x="50%"
          y="40"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          Angelin Calu
        </text>
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={diameter + diameter}
          cy={radius}
        />
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={radius}
          cy={radius}
        />
        <path
          ref={circle1Path}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d={`
            M ${radius + strokeWidth} ${radius + strokeWidth}
            m ${-1 * radius}, 0
            a ${radius},${radius} 0 1,0 ${radius * 2},0
            a ${radius},${radius} 0 1,0 ${radius * -2},0
            `}
        />

        <path
          ref={circle2Path}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d={`
            M ${2 * diameter + strokeWidth} ${radius + strokeWidth}
            m ${-1 * radius}, 0
            a ${radius},${radius} 0 1,0 ${radius * 2},0
            a ${radius},${radius} 0 1,0 ${radius * -2},0
            `}
        />
      </svg>
    </div>
  );
};

export default Animation;
