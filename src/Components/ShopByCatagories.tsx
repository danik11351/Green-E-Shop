import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// {Catagory images}
import VegCatagoryIcon from "../assets/Catagory-icons/Vegetables.svg";
import FruitCatagoryIcon from "../assets/Catagory-icons/FreshFruit.svg";
import FishCatagoryIcon from "../assets/Catagory-icons/Fish.svg";
import MeatCatagoryIcon from "../assets/Catagory-icons/Meat.svg";
import DrinksCatagoryIcon from "../assets/Catagory-icons/Water and Drinks.svg";
import SnacksCatagoryIcon from "../assets/Catagory-icons/Snacks.svg";
// {Catagory images}
function ShopByCatagories() {
  return (
    <div
      className="hidden lg:block p-12"
      style={{
        backgroundColor: "rgba(242, 245, 243, 1)",
      }}
    >
      <div
        id="shop-by-catagories-header"
        className="flex mx-26 justify-between p-12 align-baseline"
      >
        <div>
          <h1 className="font-bold text-3xl">Shop by Top Categories</h1>
        </div>
        <div>
          <button className="flex mt-1.5">
            <p className="text-green-400">View all</p>
            <span>
              <HiOutlineArrowNarrowRight className="mt-1 ms-1 text-green-400" />
            </span>
          </button>
        </div>
      </div>
      <div id="catagories" className="flex mx-6 justify-around">
        {/* {Veg Catagory} */}
        <div
          id="veg-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="veg-catagory-icon">
            <img className="ms-auto me-auto" src={VegCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Vegetables
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Veg Catagory} */}
        {/* {Fruit Catagory} */}
        <div
          id="fruit-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="fruit-catagory-icon">
            <img className="ms-auto me-auto" src={FruitCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Fresh Fruit
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">137 Products</p>
            </div>
          </div>
        </div>
        {/* {Fruit Catagory} */}
        {/* {Fish Catagory} */}
        <div
          id="Fish-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Fish-catagory-icon">
            <img className="ms-auto me-auto" src={FishCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Fish
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">34 Products</p>
            </div>
          </div>
        </div>
        {/* {Fish Catagory} */}
        {/* {Meat Catagory} */}
        <div
          id="Meat-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Meat-catagory-icon">
            <img className="ms-auto me-auto" src={MeatCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Meat
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Meat Catagory} */}
        {/* {Water&Drinks Catagory} */}
        <div
          id="Water-and-drinks-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Water-and-drinks-catagory-icon">
            <img className="ms-auto me-auto" src={DrinksCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Water and Drinks
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">48 Products</p>
            </div>
          </div>
        </div>
        {/* {Water&Drinks Catagory} */}
        {/* {Snacks Catagory} */}
        <div
          id="Snacks-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Snacks-catagory-icon">
            <img className="ms-auto me-auto" src={SnacksCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Snacks
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Snacks Catagory} */}
      </div>
      <div></div>
    </div>
  );
}
export { ShopByCatagories };
