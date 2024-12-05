import React from "react";
import ACI_logo from "../assets/images/ACI_logo.svg";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="p-5">
        <div className="max-w-[90rem] w-full m-auto flex items-center justify-between">
          <img src={ACI_logo.src} className="w-[16rem]" alt="logo" />
          <ul className="flex max-w-4xl w-full items-center justify-evenly text-lg font-semibold">
            <li>Solutions</li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              About Us
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              Careers
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              FAQs
            </li>
            <li>
              <div className="divide-y divide-dashed">

              </div>
            </li>
            <li className="hover:text-[#13a48e] transition-colors ease-in-out duration-400">
              (876) 932-2235
            </li>

            <li>Solutions</li>
            <li>
              <button
                className="cursor-pointer text-[#fff] align-middle py-2 px-6 rounded-md bg-[#13a48e]"
              >
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
