import React, { useEffect, useRef } from "react";

interface Props {
  className: string;
  setShowBanner: any;
}
const CloseIcon = ({ className, setShowBanner }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0,0,256,256"
      className={className}
      onClick={() => setShowBanner(false)}
    >
      <g
        fill="#ffffff"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;
