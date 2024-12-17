import React from "react";
import car from "../../public/assets/aci_mva_red-2.svg";
import worker from "../../public/assets/aci_comp_red.svg";
import other from "../../public/assets/aci_general_red_2.svg";

const Homepage: React.FC = () => {
  return (
    <>
      <section className="bg-hero bg-cover bg-center w-screen">
        <div className="h-[34rem] max-w-[70rem] w-full m-auto text-[#fff] flex items-center">
          <div className="max-w-[45rem] space-y-1">
            <h1 className="text-[3.3rem] font-bold leading-[4rem]">
              The Premier Solution Source for complex claims
            </h1>
            <p className="text-xl font-medium">
              Accelerated Claims, Inc. provides hospitals with reimbursement
              expertise for complex claims.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[70rem] w-full m-auto ">
        <div className="flex justify-center flex-col mt-16">
          <div className="flex justify-center mt-14 mb-8">
            <h1 className="text-[2.5rem] font-bold items-center">
              Technology solutions with a Human Approach
            </h1>
            <span className="mt-4">&reg;</span>
          </div>
          <p className="font-semibold text-lg text-[#333]">
            We optimize complex claims reimbursement by coupling healthcare
            experts with industry leading technology to drive results. Our focus
            is accident and injury patients that present in the treating
            facility. We provide full service claims management for Motor
            Vehicle Accident and Workers’ Compensation accounts. Our team
            understands that accidents are always sudden and traumatic events
            and take a benevolent, proactive approach to revenue recovery.
          </p>
        </div>
        {/* <div className="grid grid-cols-3 p-5 gap-4">
      <div className="border border-md">
        <img src={car.src} alt="car svg"></img>
        <p></p>
      </div>
    </div> */}

        <div className="grid grid-cols-3 my-10 gap-14">
          <a href="#" className="border rounded-lg bg-white">
            <div className="m-10 flex flex-col space-y-6 font-bold text-[#a60014] text-lg items-center">
              <img src={car.src} className="w-[5rem]" alt="car svg"></img>
              <p>Motor Vehichle Accident</p>
            </div>
          </a>
          <a href="#" className="border rounded-lg bg-white">
            <div className="m-10 flex flex-col space-y-6 font-bold text-[#a60014] text-lg items-center">
              <img src={worker.src} className="w-[5rem]" alt="car svg"></img>
              <p>Workers Compensation</p>
            </div>
          </a>
          <a href="#" className="border rounded-lg bg-white">
            <div className="m-10 flex flex-col space-y-6 font-bold text-[#a60014] text-lg items-center">
              <img src={other.src} className="w-[5rem]" alt="car svg"></img>
              <p>Other Services</p>
            </div>
          </a>
        </div>
      </section>
      <section className="max-w-[70rem] w-full m-auto ">
        <div className="flex space-y-6 flex-col">
          <h1 className="font-bold text-[2.5rem] text-center">ACI Offer</h1>
          <p className="font-medium text-[#333] text-[1.3rem] ">
            We provide a complete, single-source complex claims management
            solution that will result in significant revenue recovery
            opportunity for providers. Your patients avoid collections while you
            enjoy decreased aged AR and bad debt. Our clients also enjoy
            benefits such as:
          </p>
          <ol className="font-semibold list-disc text-lg text-[#747474] p-5">
            <li>
              Optional on-site staff to manage accident accounts resulting in
              improved capture
            </li>
            <li>Access to the best technology in the industry</li>
            <li>Electronic claim submission with attachments</li>
            <li>Comprehensive reporting packages including monthly KPI</li>
            <li>
              Dedicated project manager for managing implementation process
            </li>
            <li>Dedicated lien management team</li>
          </ol>
        </div>
      </section>
      <section className="max-w-[70rem] mb-[10rem] w-full m-auto">
        <div className="flex space-y-10 flex-col mt-10">
          <h1 className="font-bold text-[2.5rem] text-center">
            Complex Claim Technology
          </h1>
          <p className=" text-[#333] text-[1.3rem] ">
            ACI utilizes the best technology in the industry to optimize claims
            identification and processing that results in quicker, better
            financial outcomes for providers.
          </p>
          <button className="text-white border font-bold text-lg rounded-lg bg-[#a60014] p-4 w-[20rem] m-auto">
            Get Free Assessment
          </button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
