import Logo from "../assets/Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div id="footer-container" className="bg-gray-800">
      <div id="socials & logo" className="flex p-12 flex-col">
        <div id="logo" className="flex mb-6">
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
        <div id="social-icons">
          <div id="facebook">
            <
          </div>
        </div>
      </div>
    </div>
  );
}
export { Footer };
