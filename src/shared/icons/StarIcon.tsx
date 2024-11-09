import React from "react";
interface Props {
  className: string;
}
function StarIcon({ className }: Props) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 68.59 67.9"
      className={className}
    >
      <g id="Layer_2">
        <path
          d="M34.251,67.9c0-18.748,15.585-33.95,34.339-33.95l0,0C49.846,33.95,34.251,18.745,34.251,0l0,0
		c0,18.745-15.504,33.954-34.251,33.954C18.748,33.954,34.251,49.152,34.251,67.9z"
        ></path>
      </g>
      <g id="Layer_1"></g>
    </svg>
  );
}

export default StarIcon;
