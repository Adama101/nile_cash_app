import React from "react";

import { Button, Img, List, Text } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mplus sm:gap-10 md:gap-10 gap-[338px] justify-end mx-auto pl-2.5 pt-2.5 w-full">
        <div className="flex flex-col items-end max-w-[1430px] mt-[37px] mx-auto pl-[116px] md:px-5 w-full">
          <div className="h-[555px] md:h-[627px] relative w-full">
            <div className="h-[555px] md:h-[627px] m-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[95%]">
                <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1240px] w-full">
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <Text
                        className="text-blue_gray-800 text-xl tracking-[-0.60px] w-auto"
                        size="txtMPLUS1Bold20"
                      >
                        Nile cash
                      </Text>
                    </div>
                    <div className="flex flex-row gap-8 items-center justify-center w-auto">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMPLUS1Medium16"
                      >
                        Why Us
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMPLUS1Medium16"
                      >
                        Services
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMPLUS1Medium16"
                      >
                        Our Process
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMPLUS1Medium16"
                      >
                        Loans
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center outline outline-[1px] outline-yellow-900 sm:px-5 px-8 py-3 rounded-[24px] w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-black-900 w-auto"
                      >
                        <Text size="txtMPLUS1Bold16">Sign in</Text>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start max-w-[1240px] w-full">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[604px] md:w-full">
                      <Text
                        className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-black-900 tracking-[-1.40px]"
                        size="txtMPLUS1Bold56"
                      >
                        <>
                          Get quick cash <br />
                          As an EIT!
                        </>
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[498px] md:max-w-full text-black-900 text-lg"
                        size="txtMPLUS1Regular18"
                      >
                        Click request loan below to fill the request form. Our
                        team will verify your request and dispense immediately.
                        No collateral, no hidden charges.{" "}
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[203px]"
                        rightIcon={
                          <div className="mt-px mb-1.5 ml-4 outline-light_green-50 outline-[1px] outline">
                            <Img
                              src="images/img_arrowleft.svg"
                              alt="arrow_left"
                            />
                          </div>
                        }
                        shape="circle"
                        color="yellow_900"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          Request loan
                        </div>
                      </Button>
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <div className="flex relative w-[120px]">
                          <div className="flex my-auto w-[70%]">
                            <Img
                              className="h-12 my-auto rounded-[50%] w-12"
                              src="images/img_ellipse.png"
                              alt="ellipse"
                            />
                            <Img
                              className="h-12 ml-[-12px] my-auto rounded-[50%] w-12 z-[1]"
                              src="images/img_ellipse_48x48.png"
                              alt="ellipse_One"
                            />
                          </div>
                          <Img
                            className="h-12 ml-[-12px] my-auto rounded-[50%] w-12 z-[1]"
                            src="images/img_ellipse_1.png"
                            alt="ellipse_Two"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtMPLUS1Bold16Bluegray800"
                          >
                            51+
                          </Text>
                          <Text
                            className="leading-[16.00px] text-black-900 text-xs"
                            size="txtMPLUS1Regular12"
                          >
                            <>
                              Active users at Nile house
                              <br />
                              Accra, Ogbojo
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[4%] h-[425px] object-cover right-[0] w-[55%]"
                src="images/img_clippathgroup.png"
                alt="clippathgroup"
              />
            </div>
            <Img
              className="absolute h-[492px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_group30.png"
              alt="groupThirty"
            />
          </div>
          <div className="flex flex-col mr-[54px] mt-[114px] relative w-[95%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mx-auto w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtMPLUS1Bold40"
              >
                What do we offer?
              </Text>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-[392px] sm:w-full">
                  <Button
                    className="flex h-16 items-center justify-center w-16"
                    shape="round"
                    color="teal_600"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_iconanalytics.svg"
                      alt="iconanalytics"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMPLUS1Medium24"
                    >
                      Instant Cash
                    </Text>
                    <Text
                      className="text-base text-gray-400"
                      size="txtMPLUS1Regular16"
                    >
                      <>
                        Your immediate buddy to save you <br />
                        from being broke.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-[392px] sm:w-full">
                  <Button
                    className="flex h-16 items-center justify-center w-16"
                    shape="round"
                    color="teal_600"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_iconsecurity.svg"
                      alt="iconsecurity"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMPLUS1Medium24"
                    >
                      Anominity
                    </Text>
                    <Text
                      className="max-w-[286px] md:max-w-full text-base text-gray-400"
                      size="txtMPLUS1Regular16"
                    >
                      Your data and information will be securely protected.
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-[392px] sm:w-full">
                  <Button
                    className="flex h-16 items-center justify-center w-16"
                    shape="round"
                    color="teal_600"
                    size="sm"
                    variant="fill"
                  >
                    <Img className="h-8" src="images/img_pie.svg" alt="pie" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtMPLUS1Medium24"
                    >
                      Loans
                    </Text>
                    <Text
                      className="max-w-[286px] md:max-w-full text-base text-gray-400"
                      size="txtMPLUS1Regular16"
                    >
                      Your one stop platform for short term loans
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start mb-[73px] mt-[-NaNpx] w-[604px] md:w-full z-[1]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtMPLUS1Bold40"
              >
                <>
                  Design to fit your credit
                  <br />
                  budget.
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[424px] md:max-w-full text-base text-gray-400"
                size="txtPoppinsRegular16"
              >
                You have the freedom to request for short term loans, ensuring a
                truly unique experience that makes you feel extraordinary
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[187px]"
                rightIcon={
                  <div className="ml-4 outline-light_green-50 outline-[1px] outline">
                    <Img src="images/img_arrowleft.svg" alt="arrow_left" />
                  </div>
                }
                shape="circle"
                color="yellow_900"
                size="sm"
                variant="fill"
              >
                <div className="font-medium font-mplus text-base text-left">
                  Contact us
                </div>
              </Button>
            </div>
            <Img
              className="h-[572px] ml-auto mr-[121px] mt-[-NaNpx] object-cover w-[41%] z-[1]"
              src="images/img_wavybuddieschoosing.png"
              alt="wavybuddieschoo"
            />
            <Img
              className="h-[139px] ml-[342px] mt-[-41.05px] object-cover w-[16%] z-[1]"
              src="defaultNoData.png"
              alt="clippathgroup_One"
            />
          </div>
          <div className="flex flex-col gap-6 h-[164px] md:h-auto items-start justify-start mr-[98px] mt-[145px] w-[604px] md:w-full">
            <Text
              className="max-w-[604px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtMPLUS1Bold40"
            >
              The Perfect Credit system for your personal finances
            </Text>
            <Img className="h-6 w-6" src="images/img_frame.svg" alt="frame" />
          </div>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[145px] items-center max-w-[1430px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1240px] w-full"
              orientation="horizontal"
            >
              <div className="bg-teal-600 flex sm:flex-1 flex-col gap-8 items-start justify-start sm:px-5 px-6 py-12 rounded-[32px] w-[392px] sm:w-full">
                <Button
                  className="flex h-14 items-center justify-center w-14"
                  shape="circle"
                  color="blue_gray_800"
                  size="sm"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_frame.svg" alt="frame" />
                </Button>
                <Text
                  className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  <>
                    &quot;This application has helped me in so many ways,
                    particularly with moments&quot;
                  </>
                </Text>
                <div className="flex flex-row font-mplus gap-2 items-start justify-center w-auto">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse.png"
                    alt="ellipse"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-800 tracking-[-0.32px] w-auto"
                      size="txtMPLUS1Medium16Bluegray800"
                    >
                      Bernard Sackey
                    </Text>
                    <Text
                      className="text-gray-400 text-xs w-auto"
                      size="txtMPLUS1Regular12Gray400"
                    >
                      Mest EIT 2024
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-teal-600 flex sm:flex-1 flex-col font-mplus gap-8 items-start justify-start sm:px-5 px-6 py-12 rounded-[32px] w-[392px] sm:w-full">
                <Button
                  className="flex h-14 items-center justify-center w-14"
                  shape="circle"
                  color="blue_gray_800"
                  size="sm"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_frame.svg" alt="frame" />
                </Button>
                <Text
                  className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-white-A700"
                  size="txtMPLUS1Regular16WhiteA700"
                >
                  <span className="text-white-A700 font-mplus text-left font-normal">
                    <>&quot;It&#39;s is exactly </>
                  </span>
                  <span className="text-white-A700 font-mplus text-left font-normal">
                    what
                  </span>
                  <span className="text-white-A700 font-mplus text-left font-normal">
                    <>
                      {" "}
                      I&#39;ve been lacking especially living with EIT’s.&quot;
                    </>
                  </span>
                </Text>
                <div className="flex flex-row gap-2 items-start justify-center w-auto">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse_48x48.png"
                    alt="ellipse"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-800 tracking-[-0.32px] w-auto"
                      size="txtMPLUS1Medium16Bluegray800"
                    >
                      Rawk Akani
                    </Text>
                    <Text
                      className="text-gray-400 text-xs w-auto"
                      size="txtMPLUS1Regular12Gray400"
                    >
                      Mest EIT, 2024
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-teal-600 flex sm:flex-1 flex-col font-poppins gap-8 items-start justify-start sm:px-5 px-6 py-12 rounded-[32px] w-[392px] sm:w-full">
                <div className="bg-blue_gray-800 h-14 rounded-[50%] w-14"></div>
                <Text
                  className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  <>
                    &quot;I am really satisfied with Nile cash. I&#39;m good to
                    go. It really saves me time &quot;
                  </>
                </Text>
                <div className="flex flex-row font-mplus gap-2 items-start justify-center w-auto">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse_1.png"
                    alt="ellipse"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-800 tracking-[-0.32px] w-auto"
                      size="txtMPLUS1Medium16Bluegray800"
                    >
                      Courtney Letchaw
                    </Text>
                    <Text
                      className="text-gray-400 text-xs w-auto"
                      size="txtMPLUS1Regular12Gray400"
                    >
                      Mest EIT,2024
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="font-mplus h-[1016px] sm:h-[1020px] md:h-[719px] relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[341px] justify-start w-full">
                <div className="flex flex-col items-start justify-start max-w-[1240px] md:ml-[0] ml-[129px] w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="leading-[56.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.48px] w-full"
                        size="txtPoppinsBold48"
                      >
                        Easy Way to manage your finances with the instant loan
                      </Text>
                      <Text
                        className="text-gray-400 text-lg tracking-[-0.54px]"
                        size="txtMPLUS1Regular18Gray400"
                      >
                        Easy to use mobile app that support on android and ios.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start w-auto">
                      <div className="bg-teal-600 flex flex-col items-start justify-start p-4 rounded-[16px] w-auto">
                        <Img
                          className="h-8 w-[122px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                      <div className="bg-teal-600 flex flex-col items-start justify-start p-4 rounded-[16px] w-auto">
                        <Img
                          className="h-8 w-[138px]"
                          src="images/img_vector_white_a700.svg"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="bg-teal-600 flex items-center justify-center w-full">
                  <div className="flex flex-col md:gap-10 gap-20 items-start justify-start mb-[35px] ml-[100px] mr-[90px] mt-[59px] w-auto">
                    <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2.5 h-44 md:h-auto items-start justify-start w-[392px] sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-center w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_reply.svg"
                            alt="reply_One"
                          />
                          <Text
                            className="text-blue_gray-800 text-xl tracking-[-0.60px] w-auto"
                            size="txtMPLUS1Bold20"
                          >
                            Nile cash
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] text-base text-white-A700 tracking-[-0.48px]"
                          size="txtMPLUS1Regular16WhiteA700"
                        >
                          <>
                            Discover the perfect way of receiving <br />
                            sharp cash
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[816px] w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-[180px]">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtMPLUS1Bold16Bluegray800"
                          >
                            About us
                          </Text>
                          <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Investors
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Features
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Book a demo
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Security{" "}
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtMPLUS1Bold16Bluegray800"
                          >
                            Products
                          </Text>
                          <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Credits Cards
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Gift Cards
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Savings accounts
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  NFT
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-[180px]">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtMPLUS1Bold16Bluegray800"
                          >
                            Useful Links
                          </Text>
                          <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Free rewards
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Documentation
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Affiliate program
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-[180px]">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtMPLUS1Bold16Bluegray800"
                          >
                            Social
                          </Text>
                          <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Changelog
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  License
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  Site Maps
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtMPLUS1Regular16WhiteA700">
                                  News
                                </Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1240px] w-full">
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMPLUS1Regular12WhiteA700"
                      >
                        copyright 2023 DoraDesign All Rights Reserved
                      </Text>
                      <div className="font-poppins h-[17px] md:h-[18px] relative w-[24%] sm:w-full">
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-white-A700 text-xs w-max"
                          size="txtPoppinsRegular12"
                        >
                          This page uses cookies. See cookies details here{" "}
                        </Text>
                        <div className="absolute bg-white-A700 bottom-[12%] h-px right-[0] w-[10%]"></div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <Img
              className="absolute h-[576px] object-cover right-[1%] top-[13%] w-[64%]"
              src="images/img_wavybuddiesout.png"
              alt="wavybuddiesout"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
