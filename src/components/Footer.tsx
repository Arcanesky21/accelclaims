import React from "react";
import ACI_logo from "../assets/images/ACI_logo.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex max-w-[90rem] w-full m-auto justify-between items-center">
        {/* <div className="flex flex-col">
          <img src={ACI_logo.src} className="w-[16rem]" alt="logo" />
          <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex flex-col ">
          <p className="mb-5">Legal</p>
          <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-5">Legal</p>
          <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-5">Legal</p>
          <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-5">Legal</p>
          <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
          <p>All Rights Reserved.</p>
        </div> */}
        <div className="grid grid-cols-5 space-x-6 space-y-6 items-center content-center justify-between py-5">
          <div className="flex flex-col">
            <img src={ACI_logo.src} className="w-[16rem]" alt="logo" />
            <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4">Legal</p>
            <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4">Legal</p>
            <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4">Legal</p>
            <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4">Legal</p>
            <p> &copy; {new Date().getFullYear()} Accelerated Claims, Inc.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
