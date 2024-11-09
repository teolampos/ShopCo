import React, { useState } from "react";
import StarsRating from "./StarsRating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface Product {
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
      className={` pt-[50px] pb-[40px] mt-[20px] mx-[10px] lg:mx-[100px] min-h-[500px] flex flex-col items-center ${
        title === ProductSort.NEW_ARRIVALS && "border-b-2"
      }  border-[#0000001A]`}
    >
      <p className="text-center  text-[32px] leading-[38.4px] lg:text-[48px] lg:leading-[57.6px] font-[Integral-FC]  ">
        {title}
      </p>

      <Swiper
        slidesPerView={1.7}
        spaceBetween={20}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          1036: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        className="mt-[20px] max-w-full flex "
      >
        {products
          .map((product) => {
            return (
              <SwiperSlide
                key={product.id}
                className="flex flex-col gap-1 cursor-pointer  "
              >
                <div className="w-full h-[200px] lg:h-[298px] lg:p-[50px] bg-[#F0EEED] rounded-[20px] flex justify-center  self-center">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] self-center rounded-[20px] "
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
                <span className="text-[20px] leading-[27px] lg:text-[24px] lg:leading-[32.4px] font-[Satoshi-Bold]">
                  ${product.price}
                </span>
                <button className="min-w-full mt-2 text-white font-[Satoshi]   bg-black px-[16px] py-[12px] rounded-[62px] outline-none border-[1px] border-black hover:bg-white hover:text-black transition ease-linear duration-150">
                  Apply
                </button>
              </SwiperSlide>
            );
          })
          .slice(0, viewAll ? products.length - 1 : 4)}
      </Swiper>
      {/*The .slice methdod above is used to display only some of the products, unless the user wants to view all of them by clicking "View  All" */}

      <button
        className="mt-[70px] py-[16px] px-[54px] max-md:min-w-full text-[14px] leading-[18.9px] lg:text-[16px] lg:leading-[21.6px]  text-black font-[Satoshi] border-[1px] border-[#0000001A] rounded-[62px] hover:bg-[#0000001A] transition ease-linear duration-150"
        onClick={() => setViewAll(!viewAll)}
      >
        {viewAll ? "Show Less" : "View All"}
      </button>
    </div>
  );
}
export default ProductList;
