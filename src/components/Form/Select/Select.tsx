"use client";
import React, { FC } from "react";
import { Controller, FieldValues, FieldPath } from "react-hook-form";
import ReactSelect, { components } from "react-select";
import { ErrorMessage } from "../Error/ErrorMessage";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Label } from "../Label/Label"; // Import LabelProps if you have defined it in the Label component

interface SelectProps {
  control: any; // Replace 'any' with the specific type for your 'control' prop
  options?: any[]; // Replace 'any[]' with the specific type for your 'options' prop
  isMulti?: boolean;
  name: FieldPath<FieldValues>; // Use FieldPath<FieldValues> for name
  error?: string;
  label?: string;
  placeholder?: string;
}

const CustomDropdownIndicator: React.FC<any> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="text-black">
        {props.selectProps.menuIsOpen ? (
          <ArrowUp2 variant="Bold" className="w-5 h-5" />
        ) : (
          <ArrowDown2 variant="Bold" className="w-5 h-5" />
        )}
      </div>
    </components.DropdownIndicator>
  );
};

const style: object = {
  control: (base: React.CSSProperties, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    backgroundColor: "#fff",
    boxShadow: state.isFocused ? 0 : 0,
    paddingLeft: 4,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export const Select: FC<SelectProps> = ({
  control,
  options = [],
  isMulti,
  name,
  error,
  label,
  placeholder,
}) => {
  return (
    <div className="relative">
      {label && <Label label={label} />}
      <div className="mt-1">
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ReactSelect
              placeholder={placeholder}
              {...field}
              styles={style}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              options={options}
              isMulti={isMulti}
              className="text-sm  bg-white  font-inter  py-2  border border-gray-300 rounded-xl text-gray-600"
            />
          )}
        />
      </div>
      {error && <ErrorMessage msg={error} />}
    </div>
  );
};
