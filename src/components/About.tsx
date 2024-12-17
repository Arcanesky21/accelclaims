import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="bg-about bg-cover bg-center w-screen">
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
      <section className="m-auto h-[30rem] flex justify-center bg-[#f7f7f7]">
        <div className="flex max-w-[70rem] justify-center flex-col ">
          <div className="flex justify-center  mb-8">
            <h1 className="text-[2.5rem] font-bold items-center">
              The Accelerated Claims Story
            </h1>
          </div>
          <p className="font-semibold text-lg text-center  text-[#333]">
            Accelerated Claims was formed in 2006 to fill a void in unpaid
            accident accounts. In that short period of time, ACI has been named
            in the Inc. 5000 list of fastest growing companies in the country.
            ACI’s complex claims management focuses on motor vehicle and
            workplace accident claims of patients who present in a hospital’s
            Emergency Department. We find that our clients receive above average
            reimbursements when utilizing ACI’s services.
          </p>
        </div>
      </section>
      <section className="m-auto h-[30rem] flex justify-center bg-white">
        <div className="flex max-w-[70rem] justify-center flex-col ">
          <div className="flex justify-center  mb-8">
            <h1 className="text-[2.5rem] font-bold items-center">
              OUR PROMISE TO CLIENTS
            </h1>
          </div>
          <p className="font-semibold text-lg text-center  text-[#333]">
            We understand each hospital has unique needs. ACI will create a
            seamless solution that focuses on our customers and the patients
            they serve.
          </p>
        </div>
      </section>
      <section className="m-auto h-[50rem] flex justify-center bg-[#f7f7f7]">
        <div className="flex max-w-[70rem] w-full justify-evenly gap-10 items-center">
          <div className="mb-8">
            <img
              src="https://accelclaims.com/wp-content/uploads/2019/07/about_relationships.jpg"
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
      <section className="bg-aboutBg h-[48rem] bg-cover bg-center w-screen">
        <div className="flex max-w-[70rem] w-full justify-evenly gap-10 items-center">
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
      <section className="m-auto h-[50rem] flex justify-center bg-[#f7f7f7]">
        <div className="flex max-w-[70rem] w-full justify-evenly gap-10 items-center">
          <div className="mb-8">
            <img
              src="https://accelclaims.com/wp-content/uploads/2019/07/about_relationships.jpg"
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
      <section className="w-full border border-t-transparent bg-white p-5">
        <div className="flex max-w-[70rem] m-auto space-y-10 flex-col mt-10">
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

export default About;
