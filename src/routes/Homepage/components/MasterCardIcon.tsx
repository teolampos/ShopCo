import React from "react";
interface Props {
  className: string;
}
function MasterCardIcon({ className }: Props) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="white"
      ></path>
      <path
        d="M38.3789 24.1156C38.3789 29.0386 34.3956 33.0294 29.482 33.0294C24.5684 33.0294 20.5851 29.0386 20.5851 24.1156C20.5851 19.1927 24.5684 15.2019 29.482 15.2019C34.3956 15.2019 38.3789 19.1927 38.3789 24.1156Z"
        fill="#F79F1A"
      ></path>
      <path
        d="M27.4032 24.1156C27.4032 29.0386 23.42 33.0294 18.5063 33.0294C13.5927 33.0294 9.60944 29.0386 9.60944 24.1156C9.60944 19.1927 13.5927 15.2019 18.5063 15.2019C23.42 15.2019 27.4032 19.1927 27.4032 24.1156Z"
        fill="#EA001B"
      ></path>
      <path
        d="M23.9942 17.0986C21.9183 18.7304 20.5858 21.2662 20.5858 24.1148C20.5858 26.9633 21.9183 29.501 23.9942 31.1328C26.07 29.501 27.4026 26.9633 27.4026 24.1148C27.4026 21.2662 26.07 18.7304 23.9942 17.0986Z"
        fill="#FF5F01"
      ></path>
    </svg>
  );
}

export default MasterCardIcon;
