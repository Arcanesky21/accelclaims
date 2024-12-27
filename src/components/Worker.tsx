import React from "react";

const Worker: React.FC = () => {
  return (
    <>
      <section className="bg-worker bg-cover w-screen">
        <div className="h-[42rem] max-w-[70rem] w-full m-auto text-[#fff] flex items-center">
          <div className="max-w-[45rem] space-y-1">
            <h1 className="text-[3.3rem] font-bold leading-[4rem]">
              Accelerate Your Workers’ Compensation Claims
            </h1>
            <p className="text-xl font-medium">
              With the AccelClaims Workflow Process™, our clients realize more
              reimbursement with greater patient satisfaction.
            </p>
          </div>
        </div>
      </section>
      <section className="m-auto  h-[50rem] flex justify-center bg-white">
        <div className="flex w-full gap-[4rem] justify-center items-center">
          <div className="mb-8">
            <img
              src="https://accelclaims.com/wp-content/uploads/2019/08/comp_partner_3.jpg"
              className="h-[35rem] rounded-lg"
              alt=""
            />
          </div>
          <div className=" flex flex-col space-y-6">
            <h1 className=" max-w-[40rem]  font-bold text-[2.5rem]">
              We Are Your Complex Claims Partner
            </h1>
            <p className="max-w-[40rem] font-medium text-lg text-[#333]">
              Our staff streamlines the billing process by working with patients
              to quickly and accurately obtain any necessary information
              regarding work-related injuries.
            </p>
          </div>
        </div>
      </section>
      <section className="m-auto flex flex-col justify-center h-[60rem] bg-[#f7f7f7] space-y-11 mb-10">
        <div className="text-center w-full flex flex-col ">
          <h1 className="font-bold text-[2rem]">
            Full-Service, On-site Claims Management
          </h1>
        </div>
        <div className="grid m-auto grid-cols-3 gap-y-[3rem] gap-x-[3rem] ">
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              We Minimize Your Self-pay and Bad Debt
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Our clients realize significant reimbursement increases which
              effectively reduce selfpay and bad debt.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Correct Patient Classification
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Our staff is trained to identify account classification on the
              front end, which means that the hospital receives faster payment
              and fewer self-pay accounts.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              State-of-the-Art Technology and Processes
            </h1>
            <p className="font-medium text-[#333] text-lg">
              ACI utilizes proprietary processes which include AccelClaims
              Search, pricing estimation, and electronic billing service.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Proper Insurance Information
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Our statistics indicate when we meet with a patient in person, we
              are five times more likely to receive accurate information.
              Healthcare providers often struggle with the many state-specific
              guidelines and regulations associated with Workers’ Compensation.
              Our highly trained staff will work through the cumbersome and
              tedious task of complying with your state Worker’s Compensation
              regulations to get accounts paid accurately and in a timely
              manner.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Active Payment Monitoring
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Our specialized teams work to ensure the payments are accurate
              utilizing the applicable state-mandated payment methodology/fee
              schedule.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Develop Goodwill with Patients
            </h1>
            <p className="font-medium text-[#333] text-lg">
              ACI’s staff works to increase the patient’s understanding of this
              complicated process, so they know what to expect during this
              challenging time. Our experience shows that patients are more
              likely to cooperate once they understand how the process works and
              their role in the process.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-[20rem] border border-t-transparent bg-white p-5">
        <div className="flex h-full justify-evenly  w-full items-center ">
          <div className="flex flex-col">
            <h1 className="text-[1.8rem] font-medium text-[#13a48e] ">
              Ready to Accelerate Your Claims?
            </h1>
            <p className="text-[2.5rem] font-bold">
              Get Started with ACI Today
            </p>
          </div>
          <button className="text-white border font-bold text-lg rounded-lg bg-[#13a48e] p-4 w-[20rem] ">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Worker;
