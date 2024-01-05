import { FC } from "react";
import { SVGLogo } from "../types";

const AngularLogo: FC<SVGLogo> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_98_53971)">
        <path
          d="M2.85455 16.5746L49.3736 0L97.1455 16.2799L89.4104 77.8268L49.3736 100L9.96324 78.1215L2.85455 16.5746Z"
          fill="#E23237"
        />
        <path
          d="M97.1454 16.2799L49.3736 0V100L89.4104 77.8638L97.1454 16.2799V16.2799Z"
          fill="#B52E31"
        />
        <path
          d="M49.4473 11.6761L20.4605 76.1695L31.289 75.9854L37.1087 61.4364H63.1122L69.4843 76.1695L79.8339 76.3537L49.4473 11.6761ZM49.5212 32.3391L59.3184 52.8176H40.9021L49.5212 32.3391Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default AngularLogo;
