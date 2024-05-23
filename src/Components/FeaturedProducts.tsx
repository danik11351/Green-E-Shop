import { Rating } from "flowbite-react";
// {product images}
import GreenAppleIMG from "../assets/Proucts/Fruits/Green-Apples.svg";
import GreenAppleSmallIMG from "../assets/Proucts/Fruits/GreenApplesSmall.svg";
import ChaniseCabbageIMG from "../assets/Proucts/Veg/Chanise-Cabbage.svg";
import GreenLatuceIMG from "../assets/Proucts/Veg/Green-Lettuce.svg";
import GreenChilliIMG from "../assets/Proucts/Veg/Green-Chili.svg";
import SummerSaleBG from "../assets/SummerSaleBackGround.svg";
import CornIMG from "../assets/Proucts/Veg/Corn.svg";
import OrangeSmallIMG from "../assets/Proucts/Fruits/Indian-Orange.svg";
import LettuceSmallIMG from "../assets/Proucts/Veg/LettuceSmallIMG.svg";
// {product images}

import { HiArrowRight } from "react-icons/hi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ButtonsAppearOnHover } from "./Buttons";

function FeaturedProducts() {
  return (
    <div>
      <div id="Featured-Products-Header" className="mt-12 mb-12">
        <h1 className="font-bold text-5xl text-center mx-6">
          Featured Products
        </h1>
      </div>
      <div
        id="products"
        className="flex-col flex lg:flex-row gap-6 mx-6 lg:gap-0 lg:mx-0 justify-around"
      >
        {/* {Green Apple Card} */}
        <div
          id="Green Apple"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Apple-Img">
            <img
              src={GreenAppleIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-6 lg:ms-6">
              <div>
                <p className="text-slate-400">Green Apple</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Apple Card} */}
        {/* {Chainse Cabbage Card} */}
        <div
          id="Chanise-Cabbage"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Chanise-Cabbage-Img">
            <img
              src={ChaniseCabbageIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-6 lg:ms-6">
              <div>
                <p className="text-slate-400">Chanise Cabbage</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Chainse Cabbage Card} */}
        {/* {Green Lettuce Card} */}
        <div
          id="Green-Lettuce"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Lettuce-Img">
            <img
              src={GreenLatuceIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-6 lg:ms-6">
              <div>
                <p className="text-slate-400">Green Lettuce</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Lettuce Card} */}
        {/* {Green Chilli Card} */}
        <div
          id="Green-Chilli"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Chilli-Img">
            <img
              src={GreenChilliIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-6 lg:ms-6">
              <div>
                <p className="text-slate-400">Green Chilli</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Chilli Card} */}
        {/* {Corn Card} */}
        <div
          id="Corn"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Chilli-Img">
            <img
              src={CornIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-6 lg:ms-6">
              <div>
                <p className="text-slate-400">Corn</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Corn Card} */}
      </div>
    </div>
  );
}
function FeaturedProductsExtension() {
  return (
    <div className="mt-12 flex-col flex lg:flex-row lg:gap-12 ms-0 lg:ms-12 me-auto mx-5">
      {/* {Hot deals section} */}
      <div
        id="Hot-Deals-Container"
        className="flex-col mx-6 lg:mx-0 mt-7 lg:mt-0 mb-12"
      >
        <div>
          <h1 className="font-semibold ms-1.5 text-center lg:text-left">
            Hot Deals
          </h1>
        </div>
        {/* {apple card} */}
        <div
          id="green-apple"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-apple-img">
            <img
              src={GreenAppleSmallIMG}
              alt="green apple"
              className="me-4 mt-3"
            />
          </div>
          <div id="green-apple-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Apple</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {apple card} */}
        {/* {Orange card} */}
        <div
          id="orange"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="orange-img">
            <img src={OrangeSmallIMG} alt="orange" className="mt-6 me-3" />
          </div>
          <div id="orange-text" className="mt-5  mb-auto">
            <div>
              <p className="text-slate-400">Orange</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Orange card} */}
        {/* {Lettuce card} */}
        <div
          id="Green-Lettuce"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-lettuce-img">
            <img
              src={LettuceSmallIMG}
              alt="green apple"
              className="mt-6 me-5"
            />
          </div>
          <div id="green-lettuce-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Lettuce</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className=" group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Lettuce card} */}
      </div>
      {/* {Hot deals section} */}
      {/* {best sellers section} */}
      <div
        id="best-sellers-Container"
        className="flex-col mx-6 lg:mx-0 mt-7 lg:mt-0"
      >
        <div>
          <h1 className="font-semibold ms-1.5 text-center lg:text-left">
            Best Sellers
          </h1>
        </div>
        {/* {apple card} */}
        <div
          id="green-apple"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-apple-img">
            <img
              src={GreenAppleSmallIMG}
              alt="green apple"
              className="me-4 mt-3"
            />
          </div>
          <div id="green-apple-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Apple</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {apple card} */}
        {/* {Orange card} */}
        <div
          id="orange"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="orange-img">
            <img src={OrangeSmallIMG} alt="orange" className="me-4 mt-3" />
          </div>
          <div id="orange-text" className="mt-5  mb-auto">
            <div>
              <p className="text-slate-400">Orange</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className=" group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Orange card} */}
        {/* {Lettuce card} */}
        <div
          id="Green-Lettuce"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-lettuce-img">
            <img
              src={LettuceSmallIMG}
              alt="green apple"
              className="mt-6 me-5"
            />
          </div>
          <div id="green-lettuce-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Lettuce</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className=" group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Lettuce card} */}
      </div>
      {/* {top rated section} */}
      <div
        id="Top-Rated-Container"
        className="flex-col mx-6 lg:mx-0 mt-7 lg:mt-0"
      >
        <div>
          <h1 className="font-semibold ms-1.5 text-center lg:text-left">
            Top Rated
          </h1>
        </div>
        {/* {apple card} */}
        <div
          id="green-apple"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-apple-img">
            <img
              src={GreenAppleSmallIMG}
              alt="green apple"
              className="me-4 mt-3"
            />
          </div>
          <div id="green-apple-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Apple</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {apple card} */}
        {/* {Orange card} */}
        <div
          id="orange"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="orange-img">
            <img src={OrangeSmallIMG} alt="orange" className="me-4 mt-3" />
          </div>
          <div id="orange-text" className="mt-5  mb-auto">
            <div>
              <p className="text-slate-400">Orange</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Orange card} */}
        {/* {Lettuce card} */}
        <div
          id="Green-Lettuce"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400  lg:hover:shadow-xl"
        >
          <div id="green-lettuce-img">
            <img
              src={LettuceSmallIMG}
              alt="green apple"
              className="mt-6 me-5"
            />
          </div>
          <div id="green-lettuce-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Lettuce</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
                <div className="group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Lettuce card} */}
      </div>
      {/* {Summer sale Container} */}
      <div
        id="featured-products-summer-sale-container"
        className="mt-12 lg:mt-auto mb-auto ms-auto me-auto lg:me-24 relative"
      >
        <img src={SummerSaleBG} alt="" />
        <div className="absolute mt-16 top-0 left-0 w-full h-full flex-col items-center justify-center">
          <h2 className="text-center font-bold">Summer Sale</h2>
          <h1 className="font-bold text-green-500 my-4 text-center text-5xl">
            75% off
          </h1>
          <div className="flex">
            <div>
              <button className="justify-center items-center px-24 mt-12 lg:mt-0 lg:px-24 py-2 rounded-full mx-10 lg:mx-12 bg-white text-green-400 lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl">
                Shop
                <span className="absolute mt-1 ms-2 me-5">
                  <HiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {Summer sale Container} */}
    </div>
  );
}

export { FeaturedProducts, FeaturedProductsExtension };
