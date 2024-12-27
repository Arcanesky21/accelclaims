import React from "react";
import ACI_logo from "../../public/assets/images/ACI_logo.svg";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="p-5 fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-[90rem] w-full m-auto flex items-center justify-between">
          <img src={ACI_logo.src} className="w-[16rem]" alt="logo" />
          <ul className="flex max-w-4xl w-full items-center justify-evenly text-lg font-semibold">
            <li>
              <div className="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-default"
                  type="button"
                  className="hs-dropdown-toggle hover text-lg py-3 px-4 inline-flex items-center font-semibold gap-x-2 rounded-lg"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  Solutions
                  <svg
                    className="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2  after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-default"
                >
                  <div className="p-1 space-y-0.5">
                    <a
                      className="flex hover:text-[#13a48e] items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                      href="/Motor"
                    >
                      Motor Vehicle Accident
                    </a>
                    <a
                      className="flex hover:text-[#13a48e] items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                      href="/Worker"
                    >
                      Workers’ Compensation
                    </a>
                    <a
                      className="flex hover:text-[#13a48e] items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                      href="/Other"
                    >
                      Other Services
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              <a href="/About"> About Us</a>
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              Careers
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              <a href="/Faq"> FAQs</a>
            </li>
            <li>
              <div className="divide-y divide-dashed"></div>
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              (876) 932-2235
            </li>

            <li>Solutions</li>
            <li>
              <button className="cursor-pointer text-[#fff] align-middle py-2 px-6 rounded-md bg-[#13a48e]">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
