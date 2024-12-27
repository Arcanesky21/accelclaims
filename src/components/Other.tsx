import React from 'react';

const Other: React.FC = () => {
    return (
        <>
        <section className="bg-motor bg-cover bg-center w-screen">
          <div className="h-[38rem] max-w-[70rem] w-full m-auto text-[#fff] flex items-center">
            <div className="max-w-[45rem] space-y-1">
              <h1 className="text-[3.3rem] font-bold leading-[4rem]">About Us</h1>
              <p className="text-xl font-medium">
                ACI is the premier complex claims solution source in acute care.
                We have a rich history of offering a better process.
              </p>
            </div>
          </div>
        </section>
        <section className="m-auto h-[50rem] flex justify-center bg-[#f7f7f7]">
          <div className="flex max-w-[70rem] w-full justify-evenly gap-10 items-center">
            <div className="mb-8">
              <img
                src="https://accelclaims.com/wp-content/uploads/2019/08/mva_partner.jpg"
                className="h-[35rem] rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-[24rem] flex flex-col space-y-6">
              <h1>svg here</h1>
              <h1>We Believe in Great Relationships</h1>
              <p>
                We believe that a great relationship is one of the most important
                components of our business. Building relationships with all
                parties involved significantly increases our ability to manage
                accounts more effectively and with greater efficiency. By
                leveraging these relationships, our client hospitals will be able
                to realize maximum reimbursement on these specific types of
                accounts.
              </p>
            </div>
          </div>
        </section>
        <section className="m-auto flex flex-col justify-center bg-[#f7f7f7] space-y-11 mb-10">
          <div className="text-center w-full flex flex-col ">
            <h1 className="font-bold text-[2rem]">Full-Service Claims Management</h1>
          </div>
          <div className="grid m-auto grid-cols-3 gap-10">
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
          <div className="flex h-full max-w-[70rem] m-auto items-center ">
            <div className="flex m-auto flex-col">
              <h1>Ready to Accelerate Your Claims?</h1>
              <p>Get Started with ACI Today</p>
            </div>
            <button className="text-white border font-bold text-lg rounded-lg bg-[#13a48e] p-4 w-[20rem] ">
              Contact Us
            </button>
          </div>
        </section>
      </>
    );
};

export default Other;