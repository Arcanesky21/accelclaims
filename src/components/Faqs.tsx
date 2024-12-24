import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FAQs: React.FC = () => {
  return (
    <>
      <section className=" w-screen bg-white">
        <div className=" max-w-[75rem] w-full m-auto text-[#fff] flex flex-col h-full ">
          <h1 className="text-[#a60014] mt-20 text-5xl font-bold">
            Accelerated Claims FAQs
          </h1>
          <div className="max-w-[75rem] w-full mt-5">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  Why would I need ACI when we do a good job on our own?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                If you find that your data indicates that you are performing at
                or below the national average of 23% in reimbursement to gross
                charges on MVAs, then there likely is opportunity to increase
                your MVA revenue. ACI often averages in excess of 30% and
                sometimes as high as 60%.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  What is required to implement your program?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Implementation is seamless and done with minimal effort on the
                part of the hospital. Primarily, we need a small area for our
                on-site staff in proximity to the ED, and ACI will provide the
                Implementation Project Manager who will guide the hospital
                through the process. We are able to go live within 60 days of
                contract execution.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  We are not a trauma center. Do we see enough MVAs and
                  work-related injuries to justify the program?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Most MVAs and work-related injuries do not go to trauma centers.
                The typical MVA or Workers’ Compensation patient is driven in by
                themselves or family, and their injuries are soft-tissue in
                nature – not serious injuries. If your ED sees 30,000 visits or
                more annually, ACI will be able to apply its expertise in order
                to drive MVA and Workers’ Compensation reimbursement for your
                hospital.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  Does ACI handle any other type of Third Party Liability
                  accounts?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Yes. ACI handles multiple types of TPLs. This includes MVAs,
                Workers’ Compensation (WC), and General Liability accounts.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full h-[25rem] border border-t-transparent bg-white p-5">
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

export default FAQs;
