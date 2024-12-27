import React from "react";

const Motor: React.FC = () => {
  return (
    <>
      <section className="bg-motor bg-cover bg-center w-screen">
        <div className="h-[38rem] max-w-[70rem] w-full m-auto text-[#fff] flex items-center">
          <div className="max-w-[45rem] space-y-1">
            <h1 className="text-[3.3rem] font-bold leading-[4rem]">
              Accelerate Your Motor Vehicle Accident Claims
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
              src="https://accelclaims.com/wp-content/uploads/2019/08/mva_partner.jpg"
              className="h-[35rem] rounded-lg"
              alt=""
            />
          </div>
          <div className=" flex flex-col space-y-6">
            <h1 className=" max-w-[40rem]  font-bold text-[2.5rem]">We Are Your Complex Claims Partner</h1>
            <p className="max-w-[40rem] font-medium text-lg text-[#333]">
              ACI’s account management solution helps our clients and patients
              overcome the challenges of confusing and complex motor vehicle
              accident accounts. The AccelClaims Workflow Process™ on-site model
              allows us to provide a seamless solution to meet with patients who
              present to the hospital’s emergency department.
            </p>
          </div>
        </div>
      </section>
      <section className="m-auto flex flex-col justify-center h-[60rem] bg-[#f7f7f7] space-y-11 mb-10">
        <div className="text-center w-full flex flex-col ">
          <h1 className="font-bold text-[2rem]">
            Full-Service Claims Management
          </h1>
        </div>
        <div className="grid m-auto grid-cols-3 gap-y-[3rem] gap-x-[3rem] ">
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Identify MVA Accounts and Obtain Correct Patient Classification
            </h1>
            <p className="font-medium text-[#333] text-lg">
              When our on-site staff meets with patients who present to our
              clients’ emergency department, we are more likely to receive
              accurate and timely information, which results in quicker
              reimbursement for the hospital.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Coordination of Benefits
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Obtaining insurance and accident information can be
              extraordinarily difficult. Our staff ensures coordination of all
              possible insurance benefits for the hospital and patient.
            </p>
          </div>
          <div className=" max-w-[24rem] flex flex-col space-y-6">
            <h1 className="text-[1.5rem] text-[#a60014] font-bold">
              Reallocation of Resources
            </h1>
            <p className="font-medium text-[#333] text-lg">
              Hospitals now have the ability to focus their staff to other
              critical areas of responsibility.
            </p>
          </div>
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
              State-of-the-Art Technology and Processes
            </h1>
            <p className="font-medium text-[#333] text-lg">
              ACI utilizes proprietary processes which include AccelClaims
              Search, pricing estimation and electronic billing service.
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
            <h1 className="text-[1.8rem] font-medium text-[#13a48e] ">Ready to Accelerate Your Claims?</h1>
            <p className="text-[2.5rem] font-bold">Get Started with ACI Today</p>
          </div>
          <button className="text-white border font-bold text-lg rounded-lg bg-[#13a48e] p-4 w-[20rem] ">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Motor;
