"use client";
import { ChangeEvent, FC, ReactNode } from "react";

interface CheckboxProps {
  checked?: boolean;
  id?: string;
  title?: string;
  name?: string;
  children?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  id,
  children,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="relative flex items-start cursor-pointer">
      <div className="flex h-6 items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          name={name}
          onChange={onChange}
          value={value}
          className="h-4 w-4 rounded border-[#E78020] text-primary focus:ring-primary cursor-pointer"
        />
        <div className="ml-3 text-sm leading-6 cursor-pointer">
          <label htmlFor={id} className="text-gray-600 text-sm">
            {children}
          </label>
        </div>
      </div>
    </div>
  );
};
