
"use client";
import React, { ReactNode, MouseEvent } from "react";
import classnames from "classnames";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;

  disabled?: boolean;
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "button",
    children,
    onClick,
    variant = "primary",
    disabled,
    isFullWidth = false,
  } = props;

  return (
    <button
      className={classnames(
        `flex justify-center border border-transparent px-4 py-3 rounded-sm  text-[17px] items-center font-doppin
         shadow-sm 
         disabled:cursor-not-allowed`,
        {
          "bg-primary text-white disabled:opacity-50 py-4 ":
            variant === "primary",
          "bg-primary text-white disabled:opacity-50 text-sm":
            variant === "primary2",
          "bg-secondary text-primary border-indigo border-2":
            variant === "secondary",
          "bg-red-600 text-white hover:bg-red-500 ": variant === "danger",
          "bg-green-600 text-white hover:bg-green-500": variant === "success",
          "bg-transparent text-primary !border-primary !rounded-[30px] text-[18px] pl-5 pr-1 !py-2 ":
            variant === "outline",
          "bg-gray-700 text-white": variant === "black",
          "bg-transparent !border-0 shadow-none": variant === "transparent",
          "w-full": isFullWidth,
        }
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {disabled ? "..." : children}
    </button>
  );
};
