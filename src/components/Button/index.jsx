import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[24px]",
  circle: "rounded-[50%]",
};
const variants = {
  outline: { black_900: "border border-black-900 border-solid" },
  fill: {
    blue_gray_800: "bg-blue_gray-800",
    yellow_900: "bg-yellow-900 text-lime-100",
    teal_600: "bg-teal-600",
  },
};
const sizes = { xs: "p-1.5", sm: "p-4", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "blue_gray_800",
    "yellow_900",
    "teal_600",
  ]),
};

export { Button };
