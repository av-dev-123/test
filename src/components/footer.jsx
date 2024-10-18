import { Link } from "react-router-dom";
import Footerlogo from "../assets/images/footer-logo.png";
import Instagram from '../assets/images/Insta.png'
import Facebook from '../assets/images/Fb.png'
const Footer = () => {
  return (
    <>
      <footer className=" bg-gradient-to-b from-primary to-primary-dark px-5 py-7">
        <div className="max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="flex flex-wrap flex-col md:flex-row  gap-2 justify-center md:justify-between items-center">
            <div>
              <img src={Footerlogo} alt="img" />
            </div>
            <ul className="flex flex-col text-center md:flex-row font-medium lg:space-x-8 ">
              <li>
                <Link
                  to={""}
                  className="block py-2 pr-4 pl-3 text-sm text-white hover:text-gray-200 font-normal lg:p-0"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block py-2 pr-4 pl-3 text-sm text-white hover:text-gray-200 font-normal lg:p-0"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block py-2 pr-4 pl-3 text-sm text-white hover:text-gray-200 font-normal lg:p-0"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col text-center md:flex-row font-medium  lg:space-x-8 ">
              <li>
                <Link
                  to={""}
                  className="flex items-center gap-2 py-2 pr-4 pl-3 text-sm text-white hover:text-gray-200 font-normal lg:p-0"
                >
                    
                    <img src={Instagram} alt="img"/>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="flex items-center gap-2 py-2 pr-4 pl-3 text-sm text-white hover:text-gray-200 font-normal lg:p-0"
                >
                     <img src={Facebook} alt="img"/>
                  Facebook
                </Link>
              </li>
            </ul>
            <p className="text-white text-sm">Copyright © 2024, SuppMetrics</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
