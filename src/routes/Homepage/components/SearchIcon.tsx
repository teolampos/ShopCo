import React from "react";

interface Props {
  className: string;
}

function SearchIcon({ className }: Props) {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="icon-111-search" fill="#000000">
          <path
            d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z"
            id="search"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export const SearchIconBold = ({ className }: Props) => {
  return (
    <svg
      width="17px"
      height="18px"
      viewBox="0 0 17 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>search</title>
      <g
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Rounded" transform="translate(-545.000000, -421.000000)">
          <g id="Action" transform="translate(100.000000, 100.000000)">
            <g
              id="-Round-/-Action-/-search"
              transform="translate(442.000000, 318.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M15.5,14 L14.71,14 L14.43,13.73 C15.63,12.33 16.25,10.42 15.91,8.39 C15.44,5.61 13.12,3.39 10.32,3.05 C6.09,2.53 2.53,6.09 3.05,10.32 C3.39,13.12 5.61,15.44 8.39,15.91 C10.42,16.25 12.33,15.63 13.73,14.43 L14,14.71 L14,15.5 L18.25,19.75 C18.66,20.16 19.33,20.16 19.74,19.75 C20.15,19.34 20.15,18.67 19.74,18.26 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z"
                  id="🔹Icon-Color"
                  fill="#1D1D1D"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SearchIcon;
