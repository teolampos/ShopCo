import React, { useState } from "react";
import convertRateToStarWidths from "../../../helpers/convertRateToStarWidths";

interface Props {
  rate: number;
}

function StarsRating({ rate }: Props) {
  const [starWidths, setStarWidths] = useState<number[]>(
    convertRateToStarWidths(rate)
  );

  return (
    <div className="flex items-center gap-2 max-w-[160px]   ">
      {starWidths
        .map((starWidth) => {
          return (
            <div className={`relative w-[20px] h-[20px]`}>
              <svg
                id="star-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-[gold] w-[20px] "
              >
                <polygon points="12,2 15,8.5 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,8.5" />
              </svg>
              <div
                style={{ width: `${100 - starWidth}%` }}
                className={`${
                  starWidth >= 70 && "hidden"
                }  h-[20px] absolute top-0 right-0  bg-white `}
              ></div>
            </div>
          );
        })
        .slice(0, starWidths.length)}
    </div>
  );
}

export default StarsRating;
