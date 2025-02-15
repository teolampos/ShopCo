import React from "react";

interface Props {
  className: string;
}
function AcountIcon({ className }: Props) {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Outlined" transform="translate(-544.000000, -156.000000)">
          <g id="Action" transform="translate(100.000000, 100.000000)">
            <g
              id="Outlined-/-Action-/-account_circle"
              transform="translate(442.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M7.07,18.28 C7.5,17.38 10.12,16.5 12,16.5 C13.88,16.5 16.51,17.38 16.93,18.28 C15.57,19.36 13.86,20 12,20 C10.14,20 8.43,19.36 7.07,18.28 Z M18.36,16.83 C16.93,15.09 13.46,14.5 12,14.5 C10.54,14.5 7.07,15.09 5.64,16.83 C4.62,15.49 4,13.82 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,13.82 19.38,15.49 18.36,16.83 Z M12,6 C10.06,6 8.5,7.56 8.5,9.5 C8.5,11.44 10.06,13 12,13 C13.94,13 15.5,11.44 15.5,9.5 C15.5,7.56 13.94,6 12,6 Z M12,11 C11.17,11 10.5,10.33 10.5,9.5 C10.5,8.67 11.17,8 12,8 C12.83,8 13.5,8.67 13.5,9.5 C13.5,10.33 12.83,11 12,11 Z"
                  id="🔹-Icon-Color"
                  fill="#1D1D1D"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default AcountIcon;
