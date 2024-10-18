import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <nav className=" border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl xl:max-w-6xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img src={Logo} className="h-auto w-auto" alt="Flowbite Logo" />
            </a>
            <div className="flex items-center lg:order-2">
              <div className="hidden lg:flex items-center gap-x-6">
                <Link
                  to={""}
                  className="text-black hover:text-gray-700 font-medium mr-2 text-sm"
                >
                  Login
                </Link>
                <Link
                  to={""}
                  className="text-black hover:text-gray-700 font-medium mr-2 text-sm"
                >
                  Signup
                </Link>
                <button
                  className="text-white bg-primary  font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-3 "
                >
                  Get started
                </button>
              </div>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Rankings
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="block lg:hidden">
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Login
                  </Link>
                </li>
                <li className="block lg:hidden">
                  <Link
                    to={""}
                    className="block py-2 pr-4 pl-3 text-sm text-black hover:text-gray-700 lg:p-0"
                  >
                    Signup
                  </Link>
                </li>
                <li className="block lg:hidden">
                <button
                  className="text-white bg-primary  font-medium rounded-full  px-4 lg:px-5 py-2 lg:py-3 "
                >
                  Get started
                </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
