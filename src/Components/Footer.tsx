import Logo from "../assets/Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import AppleDownload from "../assets/Download-app-appstore.svg";
import GoogleDownload from "../assets/download-app-google.svg";
import ApplePay from "../assets/Payment Methods/ApplePay.svg";
import Visa from "../assets/Payment Methods/Visa.svg";
import MasterCard from "../assets/Payment Methods/Mastercard.svg";
import DiscoverCard from "../assets/Payment Methods/Discover.svg";
import SecurePayment from "../assets/Payment Methods/SecurePayment.svg";

function Footer() {
  return (
    <div
      id="footer-container"
      className="bg-gray-800 flex flex-col lg:flex-row text-center "
    >
      <div id="socials & logo" className="flex p-12 flex-col">
        <div id="logo" className="flex mb-6 ms-auto me-auto lg:ms-0 lg:me-0">
          <div>
            <img className="h-12 w-12" src={Logo} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-white text-3xl ms-3 mt-2">
              Ecobazar
            </h1>
          </div>
        </div>
        <div id="socials-text" className="ms-3 text-gray-400">
          <p>
            Morbi cursus porttitor enim lobortis
            <br /> molestie. Duis gravida turpis dui, eget
            <br /> bibendum magn.
          </p>
        </div>
        <div id="social-icons" className="flex mt-6 gap-3 ms-auto me-auto ">
          <div id="facebook">
            <FaFacebookF className="text-gray-400 w-5 h-5 hover:text-green-400 transition hover:scale-125" />
          </div>
          <div id="twitter">
            <FaTwitter className="text-gray-400 w-5 h-5 hover:text-green-400 transition hover:scale-125" />
          </div>
          <div id="pintrest">
            <FaPinterest className="text-gray-400 w-5 h-5 hover:text-green-400 transition hover:scale-125" />
          </div>
          <div id="instagram">
            <GrInstagram className="text-gray-400 w-5 h-5 hover:text-green-400 transition hover:scale-125" />
          </div>
        </div>
      </div>
      <div
        id="footer-lists"
        className="flex flex-col lg:flex-row text-center lg:text-left p-14 gap-24"
      >
        {/* {footer list "my account"} */}
        <div id="my-account-list">
          <h1 className="text-white ">My Account</h1>
          <div
            style={{
              backgroundColor: "00B207",
            }}
            className="w-1/6 mt-1 h-0.5 ms-auto me-auto lg:me-0 lg:ms-0"
          >
            <hr
              style={{
                margin: "0",
              }}
              id="green-seperator"
              className="w-0"
            />
          </div>
          <div>
            <ul className="text-gray-400">
              <li className="my-3  hover:text-white cursor-pointer">
                My Account
              </li>
              <li className="my-3  hover:text-white cursor-pointer">
                Order History
              </li>
              <li className="my-3  hover:text-white cursor-pointer">
                Shopping Cart
              </li>
              <li className="my-3  hover:text-white cursor-pointer">
                Wishlist
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* {footer list "help"} */}
        <div id="help-list">
          <h1 className="text-white ">Help</h1>
          <div
            style={{
              backgroundColor: "00B207",
            }}
            className="w-1/6 mt-1 h-0.5 ms-auto me-auto lg:me-0 lg:ms-0"
          >
            <hr
              style={{
                margin: "0",
              }}
              id="green-seperator"
              className="w-0"
            />
          </div>
          <div>
            <ul className="text-gray-400">
              <li className="my-3  hover:text-white cursor-pointer">Contact</li>
              <li className="my-3  hover:text-white cursor-pointer">FAQS</li>
              <li className="my-3  hover:text-white cursor-pointer">
                Terms & Condition
              </li>
              <li className="my-3  hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        {/* {footer list "Proxy"} */}
        <div id="Proxy-list">
          <h1 className="text-white ">Proxy</h1>
          <div
            style={{
              backgroundColor: "00B207",
            }}
            className="w-1/6 mt-1 h-0.5 ms-auto me-auto lg:me-0 lg:ms-0"
          >
            <hr
              style={{
                margin: "0",
              }}
              id="green-seperator"
              className="w-0"
            />
          </div>
          <div>
            <ul className="text-gray-400">
              <li className="my-3  hover:text-white cursor-pointer">About</li>
              <li className="my-3  hover:text-white cursor-pointer">Shop</li>
              <li className="my-3  hover:text-white cursor-pointer">Product</li>
              <li className="my-3  hover:text-white cursor-pointer">
                Track Order{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="download-mobile-apps" className="p-14">
        <div>
          <h1 className="text-white text-center">Download Mobile App</h1>
        </div>
        <div
          style={{
            backgroundColor: "00B207",
          }}
          className="w-1/6 mt-1 h-0.5 ms-auto me-auto lg:me-0 lg:ms-0"
        >
          <hr
            style={{
              margin: "0",
            }}
            id="green-seperator"
            className="w-0"
          />
        </div>
        <div
          id="download-app-container"
          className="flex gap-3 mt-6 cursor-pointer"
        >
          <div>
            <img src={AppleDownload} alt="" />
          </div>
          <div>
            <img src={GoogleDownload} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
function FooterPayments() {
  return (
    <div className="bg-gray-800 flex flex-col lg:flex-row lg:justify-between">
      <div id="credit" className="p-3 lg:ms-24">
        <p className="text-gray-400 text-center">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
      </div>
      <div
        id="payment-option"
        className="flex lg:items-end gap-0.5 lg:me-24 mb-2 ms-auto me-auto"
      >
        <div id="ApplePay">
          <img src={ApplePay} alt="" />
        </div>
        <div id="Visa">
          <img src={Visa} alt="" />
        </div>
        <div id="MasterCard">
          <img src={MasterCard} alt="" />
        </div>
        <div id="DiscoverCard">
          <img src={DiscoverCard} alt="" />
        </div>
        <div id="SecurePayment">
          <img src={SecurePayment} alt="" />
        </div>
      </div>
    </div>
  );
}
export { Footer, FooterPayments };
