import React, { useEffect, useState } from "react";
import StarsRating from "./StarsRating";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum ProductSort {
  NEW_ARRIVALS = "NEW ARRIVALS",
  TOP_SELLING = "TOP SELLING",
}

interface Props {
  title: ProductSort;
  products: Product[];
}
function ProductList({ title, products }: Props) {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div
      className={`py-[80px] mx-[100px] min-h-[500px] flex flex-col items-center  ${
        title === ProductSort.NEW_ARRIVALS && "border-b-2"
      }  border-[#0000001A]`}
    >
      <p className="text-center text-[48px] font-[Integral-FC] leading-[57.6px] ">
        {title}
      </p>
      <ul className="mt-[50px]  grid grid-cols-4 justify- gap-[40px] ">
        {products
          .map((product) => {
            return (
              <li
                key={product.id}
                className="flex flex-col   gap-1 cursor-pointer"
              >
                <div className="w-[300px] h-[300px] p-[50px] bg-[#F0EEED] rounded-[20px] flex justify-center items-center self-center">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-[250px] h-[250px] self-center rounded-[20px] "
                  />
                </div>
                <span className="max-w-[90%] truncate text-[20px] font-[Satoshi-Bold] leading-[27px] ">
                  {product.title}
                </span>
                <div className="flex gap-2">
                  <StarsRating rate={product.rating.rate} />
                  <span className="text-[14px] font-[Satoshi]">
                    {product.rating.rate}
                    <span
                      className="text-[#00000099]
"
                    >
                      /5
                    </span>
                  </span>
                </div>
                <span className="text-[24px] font-[Satoshi-Bold] leading-[32px]">
                  ${product.price}
                </span>
                <button className="min-w-full mt-2 text-white font-[Satoshi]   bg-black px-[16px] py-[12px] rounded-[62px] outline-none border-[1px] border-black hover:bg-white hover:text-black transition ease-linear duration-150">
                  Apply
                </button>
              </li>
            );
          })
          .slice(0, viewAll ? products.length - 1 : 4)}
        {/*The .slice methdod above is used to display only some of the products, unless the user wants to view all of them by clicking "View  All" */}
      </ul>

      <button
        className="mt-[70px] py-[16px] px-[54px] rounded-[62px] text-black font-[Satoshi] border-[1px] border-[#0000001A] hover:bg-[#0000001A] transition ease-linear duration-150"
        onClick={() => setViewAll(!viewAll)}
      >
        {viewAll ? "Show Less" : "View All"}
      </button>
    </div>
  );
}
export default ProductList;
