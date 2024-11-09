import { useEffect, useState } from "react";
import CloseIcon from "../../shared/icons/CloseIcon";
import CartIcon from "../../shared/icons/CartIcon";
import AcountIcon from "../../shared/icons/AcountIcon";
import ArrowDown from "../../shared/icons/ArrowDown";
import SearchIcon, { SearchIconBold } from "../../shared/icons/SearchIcon";
import StarIcon from "../../shared/icons/StarIcon";
import ProductList, { ProductSort } from "./components/ProductList";
import EmailIcon from "../../shared/icons/EmailIcon";
import TwitterIcon from "../../shared/icons/TwitterIcon";
import FacebookIcon from "../../shared/icons/FacebookIcon";
import InstagramIcon from "../../shared/icons/InstagramIcon";
import GithubIcon from "../../shared/icons/GithubIcon";
import VisaIcon from "../../shared/icons/VisaIcon";
import MasterCardIcon from "../../shared/icons/MasterCardIcon";
import PaypalIcon from "../../shared/icons/PaypalIcon";
import ApplePayIcon from "../../shared/icons/ApplePay";
import GooglePayAction from "../../shared/icons/GooglePayIcon";
import HamburgerIcon from "../../shared/icons/HamburgerIcon";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(true);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const fetchProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen max-w-full bg-white relative">
      {/*Sales Banner*/}
      {showBanner && (
        <div className="bg-black max-w-full h-[34px] sm:h-[38px] text-[12px] leading-[16.2px] sm:text-[14px] sm:leading-[18.9px] text-white font-[Satoshi] flex justify-center  items-center sticky top-0 z-10">
          <span className="">
            Sign up and get 20% off your first order.
            <a href="/" className=" underline">
              Sign Up Now
            </a>
          </span>
          <CloseIcon
            setShowBanner={setShowBanner}
            className="hidden lg:block w-[20px] h-[20px] relative left-[33%] cursor-pointer"
          />
        </div>
      )}

      {/*Top Section*/}
      <div className=" lg:ml-[10px]  lg:px-[30px] xl:px-[60px]  bg-[#F2F0F1]  relative ">
        {/*Hamburger Menu for Smaller Devices*/}
        {showHamburgerMenu && (
          <ul className="min-h-[200px] min-w-[40%] absolute top-[5%] p-[10px] rounded-[20px] flex flex-col  bg-white text-black transition-all ">
            <a
              href="/"
              className="p-[10px] rounded-[20px] flex items-center gap-[2px] hover:bg-black hover:text-white transition-all "
            >
              Shop
              <ArrowDown className="w-[20px] h-[20px] " />
            </a>
            <a
              href="/"
              className="p-[10px] rounded-[20px] hover:bg-black hover:text-white transition-all ease-linear"
            >
              On Sale
            </a>
            <a
              href="/"
              className="p-[10px] rounded-[20px] hover:bg-black hover:text-white transition-all ease-linear"
            >
              New Arrivals
            </a>
            <a
              href="/"
              className="p-[10px] rounded-[20px] hover:bg-black hover:text-white transition-all ease-linear"
            >
              Brands
            </a>
          </ul>
        )}
        {/*Header - Search Bar*/}
        <div className="w-full h-[48px]  py-[30px] lg:py-[50px] px-[15px]  lg:px-0 flex justify-between items-center  lg:gap-[40px] bg-white lg:bg-transparent">
          <div className="flex items-baseline gap-3">
            <HamburgerIcon
              className="block lg:hidden w-[18.75px] h-[14.25px] cursor-pointer"
              handleClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
            />
            <a
              href="/"
              className="text-[25.2px] lg:text-[40px] leading-[30.24px] lg:leading-[38.4px] font-[Integral-FC]"
            >
              SHOP.CO
            </a>
          </div>
          <ul className="hidden lg:min-w-[350px] lg:flex justify-around  items-center text-[16px] leading-[21.6px ] gap-[24px] font-[Satoshi]">
            <li className="flex items-center gap-[2px]">
              <a href="/" className="flex items-center gap-[4px]">
                Shop
                <ArrowDown className="w-[20px] h-[20px] " />
              </a>
            </li>
            <a href="/">On Sale</a>
            <a href="/">New Arrivals</a>
            <a href="/">Brands</a>
          </ul>
          <div className="hidden w-[577px] lg:flex items-center gap-[12px] py-[12px] px-[16px] ">
            <button className="cursor-pointer">
              <SearchIcon className="w-[24px] h-[24px] font-extrabold" />
            </button>
            <input
              type="text"
              className="max-w-[151px] h-[22px] outline-none bg-inherit text-black font-[Satoshi] overflow-auto"
              placeholder="Search for products..."
            />
          </div>
          <div className="lg:w-[20.5%] flex lg:justify-end items-center  gap-[7px] lg:gap-[14px]">
            <a href="/">
              <SearchIconBold className="block lg:hidden w-[20.27px] lg:w-[24px] h-[20.27px] lg:h-[24px] " />
            </a>
            <a href="/">
              <CartIcon className="w-[20.27px] lg:w-[24px] h-[20.27px] lg:h-[24px] " />
            </a>
            <a href="/">
              <AcountIcon className="w-[20.27px] lg:w-[24px] h-[20.27px] lg:h-[24px] " />
            </a>
          </div>
        </div>

        {/*Top Section - Main Content*/}
        <div className="pt-[40px] flex  flex-col lg:flex-row ">
          <div className="lg:w-[50%] px-[15px] flex flex-col gap-[20px] ">
            <p className="sm:max-lg:w-[70%] text-[36px] lg:text-[54px] xl:text-[64px] leading-[34px] lg:leading-[64px] font-[Integral-FC]  ">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </p>
            <span className="sm:max-lg:w-[70%] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] text-[#00000099] font-[Satoshi] ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <a
              href="#newArrivals"
              className="sm:w-[40%] align-left  py-[15px] px-[54px] border-black border-[1px] rounded-[62px] bg-black text-white text-center font-[Satoshi] hover:bg-white hover:text-black"
            >
              Shop Now
            </a>
            <div className=" sm:max-lg:w-[80%] lg-w-full  lg:mt-[25px] mb-[20px] flex  flex-wrap justify-center sm:max-lg:justify-start  gap-5 xl:flex-nowrap lg:justify-normal lg:gap-[32px]   ">
              <div className="pr-[20px] flex flex-col border-r-[1px] border-gray-300 ">
                <span className=" text-[24px] leading-[32.4px] lg:text-[40px] lg:leading-[54px] font-[Satoshi-Bold]">
                  200+
                </span>
                <span className="text-[#00000099] text-[12px] leading-[22px] lg:text-[16px] lg:leading-[22px]  font-[Satoshi] ">
                  International Brands
                </span>
              </div>
              <div className="pr-[10px] flex flex-col min-[440px]:border-r-[1px] min-[430px]:border-gray-300 ">
                <span className=" text-[24px] leading-[32.4px] lg:text-[40px] lg:leading-[54px] font-[Satoshi-Bold]">
                  2,000+
                </span>
                <span className="text-[#00000099] text-[12px] leading-[22px] lg:text-[16px] lg:leading-[22px]  font-[Satoshi] ">
                  High Quality Products
                </span>
              </div>
              <div className="flex flex-col  ">
                <span className=" text-[24px] leading-[32.4px] lg:text-[40px] lg:leading-[54px] font-[Satoshi-Bold]">
                  30,000+
                </span>
                <span className="text-[#00000099] text-[12px] leading-[22px] lg:text-[16px] lg:leading-[22px]  font-[Satoshi] ">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          {/*Couple Image*/}
          <div className="lg:w-[50%]">
            <div className="relative w-[100%] min-h-[400px] lg:min-h-full  bg-[length:390px_600px] lg:bg-[length:600px_1000px] lg:bg-[-50px_-130px] bg-center  bg-no-repeat   bg-[url('../public/couple.jpeg')] ">
              <StarIcon className="w-[44px] lg:w-[56px] h-[41.65px] lg:h-[50px] absolute top-[20%] left-[3%] sm:top-[40%] sm:left-[15%] md:top[50%] md:left-[20%] lg:left-[5%]  z-[1]" />
              <StarIcon className="w-[76px] lg:w-[104px] h-[71.95px] lg:h-[92px] absolute top-0 lg:top-[10%] right-[2%] sm:right-[15%]  md:right-[20%] lg:right-[3%] xl:right-[20%] z-[1]" />
            </div>
          </div>
        </div>
      </div>

      {/*Main Section*/}

      {/*New Arrivals Section*/}
      <ProductList title={ProductSort.NEW_ARRIVALS} products={products} />

      {/*Top Selling Section*/}
      <ProductList title={ProductSort.TOP_SELLING} products={products} />

      {/*Dress Styles Section */}
      <div className="min-h-[850px] mx-[10px] py-[30px] lg:py-[70px] md:mx-[80px] lg:mx-[60px] lg:px-[10px] bg-[#F0F0F0] rounded-[40px]">
        <p className=" text-[32px] leading-[36px] lg:text-[48px] lg:leading-[57.6px] text-center px-[5px] mt-[30px] font-[Integral-FC]  ">
          BROWSE BY DRESS STYLE
        </p>

        <div className="mt-[30px] lg:mt-[70px] mx-[20px]  lg:mx-[44px] flex flex-col gap-3 lg:gap-6 ">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 ">
            <div className="relative bg-white  h-[190px] lg:h-[289px] min-w-[30%] rounded-[20px]">
              <div className=" w-full h-full scale-x-[-1] bg-[length:572px_383px] lg:bg-[length:500px_783px] bg-[-110px_-80px] lg:bg-[-120px_-180px]  bg-no-repeat  rounded-[20px] bg-[url('../public/casual.png')]"></div>
              <span className="absolute z-[1] top-[25px]  left-[24px] lg:left-[36px] text-[24px] leading-[32.4px] lg:text-[36px] lg:leading-[48.6px] font-[Satoshi-Bold] ">
                Casual
              </span>
            </div>
            <div className="relative bg-white h-[190px] lg:h-[289px] min-w-[70%] rounded-[20px]">
              <div className=" rounded-[20px] w-full h-full  bg-[-17px_-80px] min-[580px]:bg-[300px_-80px] lg:bg-[120px_-120px] xl:bg-[420px_-120px] bg-[length:709px_470px] lg:bg-[length:800px_700px] bg-no-repeat  bg-[url('../public/formal.png')]"></div>
              <span className="absolute z-[1] top-[25px] left-[24px] lg:left-[36px] text-[24px] leading-[32.4px] lg:text-[36px] lg:leading-[48.6px] font-[Satoshi-Bold] ">
                Formal
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6  ">
            <div className="relative bg-white h-[190px] lg:h-[289px] min-w-[70%] rounded-[20px]">
              <div className=" w-full h-full  bg-[20px_-82px]  min-[580px]:bg-[300px_-80px] lg:bg-[100px_-160px] xl:bg-[400px_-120px] bg-[length:389px_311px] lg:bg-[length:500px_600px]   rounded-[20px] bg-no-repeat   bg-[url('../public/party.png')]"></div>
              <span className="absolute z-[1] top-[25px] left-[24px] lg:left-[36px] text-[24px] leading-[32.4px] lg:text-[36px] lg:leading-[48.6px] font-[Satoshi-Bold] ">
                Party
              </span>
            </div>
            <div className="relative bg-white h-[190px] lg:h-[289px] min-w-[30%] rounded-[20px]">
              <div className=" w-full h-full rounded-[20px]  bg-[60px_-90px] min-[580px]:bg-[350px_-80px] lg:bg-[40px_-150px] xl:bg-[170px_-120px] bg-[length:285px_425px] lg:bg-[length:250px_700px] bg-no-repeat  bg-[url('../public/gym.png')]"></div>
              <span className="absolute z-[1] top-[25px] left-[24px] lg:left-[36px] text-[24px] leading-[32.4px] lg:text-[36px] lg:leading-[48.6px] font-[Satoshi-Bold] ">
                Gym
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*Footer Section */}
      <div className=" mt-[250px] lg:mr-[9px] px-[20px] lg:px-[50px] py-[110px]  pb-[70px]   relative bg-[#F0F0F0] ">
        {/*Subscribe Section */}
        <div className=" min-h-[293px] px-[20px] lg:px-[64px] py-[36px] absolute top-[-170px] right-[3%] left-[3%] bg-black rounded-[20px] flex flex-col lg:flex-row gap-6 lg:justify-between items-center">
          <p className=" lg:max-w-[40%] text-[32px] leading-[35px] lg:text-[40px] lg:leading-[45px] text-center lg:text-left text-white font-[Integral-FC] ">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className=" flex flex-col justify-center gap-2  ">
            <div className=" flex gap-2 items-center py-[12px] px-[16px] bg-white rounded-[62px]">
              <EmailIcon className="w-[24px] h-[24px] " />
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none text-[14px] lg:text-[16px] leading-[18.9px] lg:leading-[21.6px] text-black font-[Satoshi] "
              />
            </div>
            <button className="py-[12px] px-[16px] bg-white rounded-[62px] text-[14px] lg:text-[16px] leading-[18.9px] lg:leading-[21.6px] text-center font-[Satoshi-Bold]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/*Info section */}
        <div className=" mt-[80px]  pb-[50px] border-b-2 border-[#0000001A] flex flex-col gap-6 lg:justify-between ">
          <div className=" flex flex-col  lg:gap-[25px] ">
            <p className=" text-[28.85px] leading-[34.62px] lg:text-[34.45px] lg:leading-[40.15px] font-[Integral-FC]   ">
              SHOP.CO
            </p>
            <p className="text-[12px] leading-[20px] lg:text-[14px] lg:leading-[22px] text-[#00000099] font-[Satoshi] ">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="max-w-[70%] flex items-center gap-2 mt-4">
              <TwitterIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033] bg-white rounded-2xl cursor-pointer" />
              <FacebookIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033] bg-white rounded-2xl cursor-pointer" />
              <InstagramIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033]  bg-white rounded-2xl cursor-pointer" />
              <GithubIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033]  bg-white rounded-2xl cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
              <li className="text-[14px] leading-[18px] lg:text-[16px]  tracking-[3px] font-[Satoshi-Bold] text-black mb-2">
                COMPANY
              </li>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                About
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Features
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Work
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Career
              </a>
            </ul>
            <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
              <li className="text-[14px] leading-[18px] lg:text-[16px] tracking-[3px] font-[Satoshi-Bold] text-black mb-2">
                HELP
              </li>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Customer Support
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Delivery Details
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Terms & Conditions
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Privacy Policy
              </a>
            </ul>
            <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
              <li className="text-[14px] leading-[18px] lg:text-[16px] tracking-[3px] font-[Satoshi-Bold] text-black mb-2">
                FAQ
              </li>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                About
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Features
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Work
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Career
              </a>
            </ul>
            <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
              <li className="text-[14px] leading-[18px] lg:text-[16px] tracking-[3px] font-[Satoshi-Bold] text-black mb-2">
                RESOURCES
              </li>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                About
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Features
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Work
              </a>
              <a
                href="/"
                className="text-[#00000099] text-[14px] leading-[16px] lg:text-[16px] lg:leading[19px]"
              >
                Career
              </a>
            </ul>
          </div>
        </div>

        <div className="mt-[20px] flex flex-col items-center gap-2 md:flex-row md:justify-between  ">
          <p className="text-[14px] leading-[18.9px] text-[#00000099] font-[Satoshi]   ">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="min-w-[17%]  flex justify-between gap-1 lg:gap-2 ">
            <VisaIcon className="w-[46px] h-[30px] bg-white" />
            <MasterCardIcon className="w-[46px] h-[30px]  bg-white" />
            <PaypalIcon className="w-[46px] h-[30px]  bg-white" />
            <ApplePayIcon className="w-[46px] h-[30px]  bg-white" />
            <GooglePayAction className="w-[46px] h-[30px]  bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
