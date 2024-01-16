import { FC } from 'react';

import { SVGLogo } from '../types';

const GitLogo: FC<SVGLogo> = ({ size }) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_98_53971)">
        <path
          d="M98.1142 45.5453L54.4532 1.88672C51.9404 -0.627728 47.8622 -0.627728 45.3462 1.88672L36.2798 10.9531L47.781 22.4543C50.4536 21.5512 53.5185 22.157 55.6489 24.2875C57.7896 26.4316 58.3911 29.5227 57.4661 32.2039L68.5501 43.2883C71.2318 42.3645 74.3259 42.9621 76.4677 45.1074C79.4611 48.0996 79.4611 52.9492 76.4677 55.9434C73.4736 58.9379 68.6239 58.9379 65.6282 55.9434C63.3767 53.6895 62.8204 50.3828 63.9603 47.609L53.6236 37.2723L53.6224 64.4742C54.3717 64.8447 55.0561 65.3341 55.6489 65.9234C58.6423 68.9156 58.6423 73.7656 55.6489 76.7621C52.6548 79.7551 47.8029 79.7551 44.813 76.7621C41.8197 73.7656 41.8197 68.916 44.813 65.9238C45.5303 65.2061 46.3828 64.6378 47.3212 64.2516V36.7961C46.3815 36.4125 45.5285 35.8438 44.813 35.1238C42.545 32.859 41.9997 29.5313 43.1618 26.7465L31.8243 15.4078L1.88684 45.3434C-0.628784 47.8602 -0.628784 51.9387 1.88684 54.4535L45.5486 98.1129C48.0622 100.628 52.1396 100.628 54.6564 98.1129L98.1138 54.6563C100.629 52.1406 100.629 48.0598 98.1138 45.5453"
          fill="#DE4C36"
        />
      </g>
    </svg>
  );
};

export default GitLogo;
