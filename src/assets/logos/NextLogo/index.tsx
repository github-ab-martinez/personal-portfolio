import { FC } from 'react';

import { SVGLogo } from '../types';

const NextLogo: FC<SVGLogo> = ({ darkMode, size }) => {
  return darkMode ? (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_98_53971)">
        <path
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
          fill="white"
        />
        <path
          d="M83.06 87.5114L38.4122 30H30V69.9834H36.7298V38.5464L77.7773 91.5806C79.6294 90.3409 81.394 88.9808 83.06 87.5114Z"
          fill="url(#paint0_linear_98_53971)"
        />
        <path
          d="M70.5558 30H63.8891V70H70.5558V30Z"
          fill="url(#paint1_linear_98_53971)"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_98_53971"
          x1="60.5555"
          x2="80.2778"
          y1="64.7223"
          y2="89.1666"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_98_53971"
          x1="67.2225"
          x2="67.1108"
          y1="30"
          y2="59.3751"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>NexJS Logo</title>
      <g clipPath="url(#clip0_301_357)">
        <path
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
          fill="black"
        />
        <path
          d="M83.06 87.5114L38.4122 30H30V69.9834H36.7298V38.5464L77.7773 91.5806C79.6294 90.3409 81.394 88.9808 83.06 87.5114Z"
          fill="url(#paint0_linear_301_357)"
        />
        <path
          d="M70.5558 30H63.8892V70H70.5558V30Z"
          fill="url(#paint1_linear_301_357)"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_301_357"
          x1="60.5555"
          x2="80.2778"
          y1="64.7223"
          y2="89.1666"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_301_357"
          x1="67.2225"
          x2="67.1109"
          y1="30"
          y2="59.3751"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextLogo;
