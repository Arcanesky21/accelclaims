import React from "react";
import ACI_logo from "../../public/assets/images/ACI_logo.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex max-w-[90rem] w-full m-auto justify-between items-center">
        <div className="grid w-full p-5 grid-cols-5 space-x-6 text-[#696969] font-semibold space-y-2 items-start content-center justify-between ">
          <div className="flex flex-col space-y-4 ">
            <img src={ACI_logo.src} className="w-[16rem]" alt="logo" />
            <div>
              <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <h3 className="mb-4 text-[#333] ">Solutions</h3>
            <a href="#" className="hover:underline">
              Motor Vehicle Accident
            </a>
            <a href="#" className="hover:underline">
              Workers' Compensation
            </a>
            <a href="#" className="hover:underline">
              Other Services
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="mb-4 text-[#333] font-semibold">Company</p>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <a href="#" className="hover:underline">
              FAQs
            </a>
            <a href="#" className="hover:underline">
              Submit Policy Info
            </a>
            <a href="#" className="hover:underline">
              Contract
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="mb-4 text-[#333] font-semibold">Contact</p>
            <a href="#" className="hover:underline">
              877-932-2235
            </a>
            <a href="#" className="hover:underline">
              Info@accelclaims.com
            </a>
            <a href="#" className="hover:underline">
              P.O Box 2315
            </a>
            <a href="#" className="hover:underline">
              Kennesaw, GA 30144
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="mb-4 text-[#333] font-semibold">Legal</p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
