import React, { useEffect, useState } from "react";
import CloseIcon from "./components/CloseIcon";
import CartIcon from "./components/CartIcon";
import AcountIcon from "./components/AcountIcon";
import ArrowDown from "./components/ArrowDown";
import SearchIcon from "./components/SearchIcon";
import StarIcon from "./components/StarIcon";
import ProductList, { ProductSort } from "./components/ProductList";
import EmailIcon from "./components/EmailIcon";
import TwitterIcon from "./components/TwitterIcon";
import FacebookIcon from "./components/FacebookIcon";
import InstagramIcon from "./components/InstagramIcon";
import GithubIcon from "./components/GithubIcon";
import VisaIcon from "./components/VisaIcon";
import MasterCardIcon from "./components/MasterCardIcon";
import PaypalIcon from "./components/PaypalIcon";
import ApplePayIcon from "./components/ApplePay";
import GooglePayAction from "./components/GooglePayIcon";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(true);

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
        <div className="bg-black h-[38px] max-w-full flex justify-center  items-center sticky top-0 z-10">
          <span className="text-white text-[14px] leading-[18.9px]">
            Sign up and get 20% off your first order.
            <a
              href="/"
              className="text-white text-sm  font-semibold underline leading-[18.9px]"
            >
              Sign Up Now
            </a>
          </span>
          <CloseIcon className=" w-[20px] h-[20px] relative left-[33%] cursor-pointer" />
        </div>
      )}

      {/*Top Section*/}
      <div className=" ml-[10px] px-[120px] pt-[20px] bg-[#F2F0F1]  relative ">
        <div className=" max-w-full h-[48px]  py-[40px]  flex items-center gap-[40px]">
          <a href="/" className="text-[40px] font-[Integral-FC]">
            SHOP.CO
          </a>
          <ul className="w-[400px] flex justify-around  items-center text-[16px] gap-[24px] font-[Satoshi]">
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
          <div className="min-w-[677px] flex items-center gap-[12px] py-[12px] px-[16px]  ">
            <button className="cursor-pointer">
              <SearchIcon className="w-[24px] h-[24px] font-extrabold" />
            </button>
            <input
              type="text"
              className="max-w-[151px] h-[22px] outline-none bg-inherit text-black font-[Satoshi] overflow-auto"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex items-center gap-[14px] relative left-52">
            <a href="/">
              <CartIcon className="w-[24px] h-[24px] font-extrabold " />
            </a>
            <a href="/">
              <AcountIcon className="w-[24px] h-[24px] font-extrabold" />
            </a>
          </div>
        </div>
        <div className="max-w-full flex  ">
          <div className="w-[50%] mt-[200px] flex flex-col gap-[20px]  ">
            <span className="max-w-[67%] text-[64px] font-[Integral-FC] leading-[64px] ">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </span>
            <span className="max-w-[67%] text-[16px] text-[#00000099] font-[Satoshi]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <button className="w-[210px] h-[52px] py-[15px] px-[54px] border-black border-[1px] rounded-[62px] bg-black text-white font-[Satoshi] hover:bg-white hover:text-black">
              Shop Now
            </button>
            <div className="w-[80%] mt-[25px] flex gap-[32px] ">
              <div className="pr-[20px] flex flex-col border-r-[1px] border-gray-300 ">
                <span className="font-[Satoshi-Bold]  text-[40px] ]">200+</span>
                <span className="text-[#00000099] font-[Satoshi] ">
                  International Brands
                </span>
              </div>
              <div className="pr-[20px] flex flex-col border-r-[1px] border-gray-300 ">
                <span className="font-[Satoshi-Bold]  text-[40px] ]">
                  2,000+
                </span>
                <span className="text-[#00000099] font-[Satoshi]">
                  High Quality Products
                </span>
              </div>
              <div className="flex flex-col  ">
                <span className="font-[Satoshi-Bold]  text-[40px] ]">
                  30,000+
                </span>
                <span className="text-[#00000099] font-[Satoshi]">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="w-[50%]  relative ">
            <StarIcon className="w-[56px] h-[50px] absolute top-[300px] left-[40px] z-[1]" />
            <StarIcon className="w-[104px] h-[92px] absolute top-[80px] right-[70px] z-[1]" />
            <div className="w-[100%] h-[680px]  bg-[0px_-150px] bg-no-repeat bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqczUMWJcf-mwUUzxeBvTwPf6BagQkr6GIJtgoh25KXW81bSWucBJdLI-ubV9~YgF-TfpTaWp3Ld4X-7eRitSXEBpnJYDi45lGE-iiCaV2Tg~FUZrMJWabeEtdHevaavo7iW1~ySuu9n5AZ8ysUQVaZng21vrHcdjeuy1F~FlpnsWHjWrCJpH6xrjPkdS5mCFZ0ngRRUnA8fXmTuNliI779YrFxzVg81N46IRQQobc2EL9RxAmmD2eEF8fgDthjcRRPzgfH66AuUWsnUsoYO5uXXlRyxemc9Me-qwB2g3Izh6k0f0FObIRIuuh9nxkma8Xg9luC3U-~WzoXz5ZxJ9Q__')] " />
          </div>
        </div>
      </div>

      {/*Main Section*/}

      {/*New Arrivals Section*/}
      <ProductList title={ProductSort.NEW_ARRIVALS} products={products} />

      {/*Top Selling Section*/}
      <ProductList title={ProductSort.TOP_SELLING} products={products} />

      {/*Browse By Dress Style Section */}
      <div className="min-h-[850px] py-[70px] mx-[100px] bg-[#F0F0F0] rounded-[40px]">
        <p className=" text-[48px] font-[Integral-FC] leading-[57.6px] text-center">
          BROWSE BY DRESS STYLE
        </p>

        <div className="mt-[70px] mx-[64px] flex flex-col gap-6 ">
          <div className="flex gap-6 ">
            <div className="relative bg-white h-[289px] min-w-[30%] rounded-[20px]">
              <div className=" w-full h-full scale-x-[-1] rounded-[20px] bg-[center_40%] bg-no-repeat  bg-[url('https://s3-alpha-sig.figma.com/img/e1b7/74ab/a32d9a769caba77c08e107a9198dcd6d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfxawzCE1m0Ok-iEqTw-ZWBgDFF9eTGy9AMq-~BHjyfTVWjYA7Awpmvc9TLJpdFvuCx8XV-1RXvKPITrrmukR5b4uCd3~3qCyzbq0R6NfMBpOcB~KvVu3JNXUoy2S5zjThpSshGnu0gMI-NHbGffRBiNDOeVtC~sGKM0NEpbZMv1UqgeL-tdRVgrX6G1c2lL0PLsW10a290j0oPZ~bTib99ukUc30Mp3mPt2gtz01IT5-Zbaz7t5OzTg589zds~yoZrmLnzn1ORw3JZpDJ-aDUkXgR79Mkd9yU4OShDXYKDlHm9L4Oe-67MsweBwPswkiqVhH3zqtjWyacb4QpOKAA__')]"></div>
              <span className="absolute z-[1] top-[25px] left-[36px]  text-[36px] font-[Satoshi-Bold] leading-[48.6px]">
                Casusal
              </span>
            </div>
            <div className="relative bg-white h-[289px] min-w-[70%] rounded-[20px]">
              <div className=" rounded-[20px] w-full h-full bg-[300px_-120px] bg-cover  bg-no-repeat  bg-[url('https://s3-alpha-sig.figma.com/img/e46e/d6ac/8bdbe2c750dcc6e834bf1d98a4a73b29?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBSFxambHDWfOmxlWi2llSah7u~sA9hPsRbXec2sLtBsNfyX7Jzt4p8Au5IFH02vTa~y2IjWh-UqpZZf7NEniPmehYTd1IdqgKZef7b9CkfqsPjcLZGU3yWcK71XyuRqxG0hGoMY0tF6QE-3X8lrDMAFARYN7wUH9XnSeJ-MKPnyOdbbwH5hEel4fgp~X3QEo-BU2-iv4pdES0lhzvNu97QaxD9kJX1qqfx3xypV-5MtGgo4hsLFoyu3wrb30G4J9UjPGoUEcQIdwgtz2WYeg~b8eF~Xf9CbSCBM~enpCQtlzhU16y6w0dUuAzhOtm~CGRBr-ic2moIZmPvqRgM6DA__')]"></div>
              <span className="absolute z-[1] top-[25px] left-[36px]  text-[36px] font-[Satoshi-Bold] leading-[48.6px]">
                Formal
              </span>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="relative bg-white h-[289px] min-w-[70%] rounded-[20px]">
              <div className=" w-full h-full bg-[400px_-150px] rounded-[20px] bg-no-repeat  bg-[url('https://s3-alpha-sig.figma.com/img/aa19/c69e/82cd85a823c989c1c8631bd976e2cbfb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~Qau4QA3dVYOOg-72mwnnQyNxmmJQQQorB1DyjX7Nvq1yqHrwkSbSdpL1uz5X6h-VPgpWKvPzF0O6rbdUP3HIsHOp4lI64s8Y0bEMCYMcE4rycadSRwfCxZtCbGJ05jkl11utj4E-39ToGH5ET-6bMGbxAcJpsnQbTLQrDiHKPQeIR-xqO-oT37V~fKkkv8ZTpkoMIWhu-VCwDmopnDbOeoEo9bCzRHHl~hseH3g5nfubcDPzvfn6xXZoHjdeuBcHdwERlNW5QoRuicY7JHeKQUU7gRYRArYNWnn2Ddsmjk8M5Uhk6bSIyfnkB~la1ZTgrRxtEiWeImPMuCXnILMA__')]"></div>
              <span className="absolute z-[1] top-[25px] left-[36px]  text-[36px] font-[Satoshi-Bold] leading-[48.6px]">
                Party
              </span>
            </div>
            <div className="relative bg-white h-[289px] min-w-[30%] rounded-[20px]">
              <div className=" w-full h-full rounded-[20px] bg-[80px_-150px] bg-cover bg-no-repeat  bg-[url('https://s3-alpha-sig.figma.com/img/fce6/58e0/c17a220fe8bfb1126626f3ab58a761ec?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFAKCvqOT9nzlA9CoyoGysAmK4gA8PeQJW0~F0SW~nRPRBLN03Y9zSDCwUdgY6joDrWvA4YhNUDhcY7aJaDXLyEHHPdzCP1bsUv19PobkcKBDHtBii0JZsGcNyy5f~6exu8MoC4XJzVe-sIw5FazEqQL2RhUXZI3~E1A20597YQ8Y9docNRQNtQjhQFfVNSHvuAfpQpakx8vErCnDX8kvIKXKJu0YYMHtybx7LndX0Vha6OpJ2OR3IuFgng5uYVLxJYvp8Tg0rc4rp-IrVaz7LI7e7Zkft4mT4G~ex0AUQCjnqUfcWPolRTUShjDGj-l8r6G7wLL9rnCzAZXdICLmA__')]"></div>
              <span className="absolute z-[1] top-[25px] left-[36px]  text-[36px] font-[Satoshi-Bold] leading-[48.6px]">
                Gym
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*Footer Section */}
      <div className=" h-[500px] mt-[100px] mr-[9px] px-[100px] relative bg-[#F0F0F0]">
        {/*Subscribe Section */}
        <div className=" h-[180px]  px-[64px] py-[36px] relative bottom-[70px] bg-black rounded-[20px] flex justify-between items-center">
          <p className=" max-w-[40%] text-[40px] text-white font-[Integral-FC] leading-[45px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className=" w-[400px] h-[130px] flex flex-col justify-center gap-2  ">
            <div className=" flex gap-2 items-center py-[12px] px-[16px] bg-white rounded-[62px]">
              <EmailIcon className="w-[24px] h-[24px] " />
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none leading-[21.6px] text-black font-[Satoshi] "
              />
            </div>
            <button className="py-[12px] px-[16px] bg-white rounded-[62px] text-center font-[Satoshi-Bold]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/*Info section */}
        <div className="h-177px pb-[50px] border-b-2 border-[#0000001A] flex justify-between">
          <div className="w-[248px] flex flex-col gap-[25px] ">
            <p className="text-[34.45px] font-[Integral-FC] leading-[22px] ">
              SHOP.CO
            </p>
            <p className="text-[14px] text-[#00000099] font-[Satoshi] leading-[22px] ">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="max-w-[70%] flex items-center gap-2">
              <TwitterIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033] bg-white rounded-2xl cursor-pointer" />
              <FacebookIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033] bg-white rounded-2xl cursor-pointer" />
              <InstagramIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033]  bg-white rounded-2xl cursor-pointer" />
              <GithubIcon className="p-2 w-[30px] h-[30px] border-[1px] border-solid border-[#00000033]  bg-white rounded-2xl cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
            <li className="leading-[18px] font-[Satoshi] text-black mb-2">
              COMPANY
            </li>
            <a href="/" className="text-[#00000099]">
              About
            </a>
            <a href="/" className="text-[#00000099]">
              Features
            </a>
            <a href="/" className="text-[#00000099]">
              Work
            </a>
            <a href="/" className="text-[#00000099]">
              Career
            </a>
          </ul>
          <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
            <li className="leading-[18px] font-[Satoshi] text-black mb-2">
              HELP
            </li>
            <a href="/">Customer Support</a>
            <a href="/">Delivery Details</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
          </ul>
          <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
            <li className="leading-[18px] font-[Satoshi] text-black mb-2">
              FAQ
            </li>
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">Work</a>
            <a href="/">Career</a>
          </ul>
          <ul className="flex flex-col gap-2 font-[Satoshi] text-[#00000099]">
            <li className="leading-[18px] font-[Satoshi] text-black mb-2">
              RESOURCES
            </li>
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">Work</a>
            <a href="/">Career</a>
          </ul>
        </div>

        <div className="mt-[20px] flex justify-between">
          <p className="text-[14px] text-[#00000099] font-[Satoshi] leading-[18.9px]  ">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="min-w-[17%]  flex justify-between gap-2 ">
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
