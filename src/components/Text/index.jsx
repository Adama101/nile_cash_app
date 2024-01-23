import React from "react";

const sizeClasses = {
  txtMPLUS1Medium16: "font-medium font-mplus",
  txtPoppinsBold48: "font-bold font-poppins",
  txtMPLUS1Regular12: "font-mplus font-normal",
  txtMPLUS1Regular12WhiteA700: "font-mplus font-normal",
  txtMPLUS1Medium24: "font-medium font-mplus",
  txtMPLUS1Regular16: "font-mplus font-normal",
  txtMPLUS1Regular18Gray400: "font-mplus font-normal",
  txtMPLUS1Regular16WhiteA700: "font-mplus font-normal",
  txtMPLUS1Regular12Gray400: "font-mplus font-normal",
  txtMPLUS1Medium16Bluegray800: "font-medium font-mplus",
  txtMPLUS1Regular18: "font-mplus font-normal",
  txtMPLUS1Bold40: "font-bold font-mplus",
  txtMPLUS1Bold20: "font-bold font-mplus",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtMPLUS1Bold56: "font-bold font-mplus",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtMPLUS1Bold16: "font-bold font-mplus",
  txtMPLUS1Bold16Bluegray800: "font-bold font-mplus",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
