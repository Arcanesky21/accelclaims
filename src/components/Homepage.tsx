import React from "react";

const Homepage: React.FC = () => {
  return (
    <main>
      <section className="bg-hero bg-cover bg-center w-screen ">
        <div className="h-[34rem] max-w-[70rem] w-full m-auto text-[#fff] flex items-center">
          <div className="max-w-[41rem] space-y-1">
            <h1 className="text-[3.3rem] font-bold leading-[4rem]">
              The Premier Solution Source for complex claims
            </h1>
            <p className="text-xl font-medium">Accelerated Claims, Inc. provides hospitals with reimbursement expertise for complex claims.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
