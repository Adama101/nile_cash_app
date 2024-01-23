import React from "react";

import { Button, Img, Input } from "components";
import RequestLoanCheckboxesdark from "components/RequestLoanCheckboxesdark";

const RequestLoanPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mada items-center justify-end mx-auto pt-8 w-full">
        <div className="flex flex-col md:gap-10 gap-[484px] items-end justify-end w-full">
          <div className="flex flex-col gap-14 items-start justify-start md:px-5 w-[92%] md:w-full">
            <Img
              className="h-9 w-[1240px]"
              src="images/img_navbar.svg"
              alt="navbar"
            />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start md:mt-0 mt-[73px] w-[36%] md:w-full">
                <Img
                  className="h-[52px] ml-1 md:ml-[0]"
                  src="images/img_requestloan.svg"
                  alt="requestloan"
                />
                <Img
                  className="h-[65px]"
                  src="images/img_discoverthepower.svg"
                  alt="discoverthepowe"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[91px] md:mt-0 mt-[81px] w-[26%] md:w-full">
                <div className="flex flex-col items-start justify-center rounded-[20px] w-[327px] sm:w-full">
                  <Input
                    name="inputfield"
                    placeholder="Enter your name"
                    className="font-light p-0 placeholder:text-black-900_dd text-base text-left tracking-[0.15px] w-full"
                    wrapClassName="w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center mt-1 rounded-[20px] w-[327px] sm:w-full">
                  <Input
                    name="inputfieldone"
                    placeholder="Enter your email"
                    className="font-light p-0 placeholder:text-black-900_dd text-base text-left tracking-[0.15px] w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center mt-1 w-[327px] sm:w-full">
                  <Input
                    name="inputfieldtwo"
                    placeholder="Phone number"
                    className="font-light p-0 placeholder:text-black-900_dd text-base text-left tracking-[0.15px] w-full"
                    wrapClassName="w-full"
                    type="number"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center mt-3 w-[327px] sm:w-full">
                  <Input
                    name="language"
                    placeholder="Amount  200 ghc max."
                    className="font-light p-0 placeholder:text-black-900_dd text-base text-left tracking-[0.15px] w-full"
                    wrapClassName="w-full"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-center mt-3 w-[327px] sm:w-full">
                  <Input
                    name="inputfieldthree"
                    placeholder="Receiving Method"
                    className="font-light p-0 placeholder:text-black-900_dd text-base text-left tracking-[0.15px] w-full"
                    wrapClassName="w-full"
                  ></Input>
                </div>
                <div className="font-mplus h-[108px] mt-3 relative w-full">
                  <div className="flex mb-[-3px] w-[65%] z-[1]">
                    <RequestLoanCheckboxesdark className="flex flex-col items-center justify-center my-auto pr-1 py-1 w-auto" />
                    <Img
                      className="h-[11px] mb-4 ml-[-8.77px] mt-auto z-[1]"
                      src="images/img_agreetotermsand.svg"
                      alt="agreetotermsand"
                    />
                  </div>
                  
                  //Link this button to send request once form is filled.
                  
                  <Button
                    className="!text-white-A700 cursor-pointer min-w-[327px] mt-auto mx-auto rounded-[20px] text-base text-center tracking-[0.15px]"
                    color="yellow_900"
                    size="md"
                    variant="fill"
                  >
                    Request Money
                  </Button>
                </div>
              </div>
              <Img
                className="h-[492px] md:h-auto md:ml-[0] ml-[223px] object-cover"
                src="images/img_group30.png"
                alt="groupten"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start w-full">
            <Img
              className="h-[371px] md:h-auto object-cover"
              src="images/img_footer.png"
              alt="footer"
            />
            <Img
              className="h-[371px]"
              src="images/img_footer_teal_600.svg"
              alt="footerone"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestLoanPage;
