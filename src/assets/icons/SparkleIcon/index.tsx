import { FC } from 'react';

const SparkleIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="33"
      viewBox="0 0 33 33"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.211 0.241726C15.211 0.241726 16.5238 8.42413 20.1377 11.6781C23.7516 14.9321 32.0264 15.3824 32.0264 15.3824C32.0264 15.3824 23.844 16.6953 20.5901 20.3092C17.3361 23.9231 16.8857 32.1979 16.8857 32.1979C16.8857 32.1979 15.5729 24.0155 11.959 20.7615C8.34509 17.5075 0.0702854 17.0572 0.0702854 17.0572C0.0702854 17.0572 8.25269 15.7443 11.5067 12.1304C14.7606 8.51654 15.211 0.241726 15.211 0.241726Z"
        fill="url(#paint0_linear_228_541)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_228_541"
          x1="0.0676927"
          x2="32.0238"
          y1="17.0077"
          y2="15.333"
        >
          <stop offset="0.140625" stopColor="#800EEB" />
          <stop offset="0.447917" stopColor="#EE2A7B" />
          <stop offset="0.71875" stopColor="#FA8D34" />
          <stop offset="1" stopColor="#FFA84B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SparkleIcon;
