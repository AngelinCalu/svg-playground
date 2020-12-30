import React, { useRef, useEffect } from "react";

import Coding from "./coding.png";
import Shipbuilding from "./shipbuilding.png";

interface Point2D {
  x: number;
  y: number;
}

const Animation: React.FC = (): JSX.Element => {
  const radius = 240;
  const diameter = radius * 2;
  const strokeWidth = 3;
  const thinStrokeWidth = 1;
  const strokeColor = "#172A4D";
  const centerColor = "#cc0000";

  // Origin for Right Circle
  const OR: Point2D = {
    x: diameter * 2,
    y: radius + radius / 2,
  };

  // Origin for Left Circle
  const OL: Point2D = {
    x: radius,
    y: radius + radius / 2,
  };

  const P1L: Point2D = {
    x: strokeWidth,
    y: radius + radius / 2,
  };

  const P1R: Point2D = {
    x: diameter + radius + strokeWidth,
    y: radius + radius / 2,
  };

  const notationOffset = 16;

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
    <div className="fixed mx-auto top-10 left-20 md:left-1/4">
      <svg
        // ref={SVGElement}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 
            ${diameter * 2 + radius + 2 * strokeWidth} 
            ${diameter * 2 + radius + 2 * strokeWidth}
            `}
        width={radius * 3}
        height={radius * 3}
      >
        <text
          fill={strokeColor}
          fontFamily="'Carter One', cursive"
          fontSize="4.5rem"
          x="50%"
          y="40"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          Angelin Calu
        </text>

        <text
          fill={strokeColor}
          x={OR.x + notationOffset}
          y={OR.y + notationOffset}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          OR
        </text>

        <text
          fill={strokeColor}
          x={OL.x + notationOffset}
          y={OL.y + notationOffset}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          OL
        </text>

        {/* Center of the right circle */}
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={OR.x}
          cy={OR.y}
        />

        <text
          fill={strokeColor}
          x={P1L.x + notationOffset}
          y={P1L.y + notationOffset}
          textAnchor="middle"
        >
          P1L
        </text>

        <text
          fill={strokeColor}
          x={P1R.x + notationOffset}
          y={P1R.y + notationOffset}
          textAnchor="middle"
        >
          P1R
        </text>

        {/* Center of the left circle */}
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={OL.x}
          cy={OL.y}
        />

        {/* Starting point for drawing left circle */}
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={P1L.x}
          cy={P1L.y}
        />

        {/* Starting point for drawing second circle */}
        <circle
          fill={centerColor}
          strokeWidth={0}
          r={strokeWidth}
          cx={P1R.x}
          cy={P1R.y}
        />

        <path
          id="circleLeft"
          ref={circle1Path}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d={`
            M ${radius + strokeWidth} ${radius + radius / 2 + strokeWidth}
            m ${-1 * radius}, 0
            a ${radius},${radius} 0 1,0 ${radius * 2},0
            a ${radius},${radius} 0 1,0 ${radius * -2},0
            `}
        />

        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={thinStrokeWidth}
          d={`
            M ${radius + strokeWidth} ${radius + radius / 2}
            L ${strokeWidth} ${radius + radius / 2}
            `}
        />

        <path
          fill="none"
          stroke={strokeColor}
          strokeWidth={thinStrokeWidth}
          d={`
            M ${diameter * 2 + strokeWidth} ${radius + radius / 2}
            L ${radius * 3 + strokeWidth} ${radius + radius / 2}
            `}
        />

        <path
          id="circleRight"
          ref={circle2Path}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d={`
            M ${2 * diameter + strokeWidth} ${radius + radius / 2 + strokeWidth}
            m ${-1 * radius}, 0
            a ${radius},${radius} 0 1,0 ${radius * 2},0
            a ${radius},${radius} 0 1,0 ${radius * -2},0
            `}
        />

        <defs>
          <mask id="circleLeftPath" clipPathUnits="userSpaceOnUse">
            <circle cx={OL.x} cy={OL.y} r={radius} />
          </mask>
          <mask id="circleRightPath" clipPathUnits="userSpaceOnUse">
            <circle cx={OL.x} cy={OL.y} r={radius} />
          </mask>
        </defs>

        <image
          xlinkHref={Coding}
          mask="url(#circleLeftPath)"
          preserveAspectRatio="xMidYMid slice"
        ></image>

        <image
          xlinkHref={Shipbuilding}
          mask="url(#circleRighPath)"
          preserveAspectRatio="xMidYMid slice"
        ></image>
      </svg>
    </div>
  );
};

export default Animation;
