"use client";
import { forwardRef, useState, ChangeEvent } from "react";
import { Label } from "../Label/Label";
import { ErrorMessage } from "../Error/ErrorMessage";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/20/solid";
interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  search?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = "text",
    name,
    id,
    placeholder,
    onChange,
    label,
    error,
    value,
    defaultValue,
    disabled,
    search = false,
  } = props;

  const [inputType, setInputType] = useState<string>(type);

  return (
    <div>
      {label && <Label id={id} label={label} />}
      <div className="mt-1 relative">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          defaultValue={defaultValue}
          disabled={disabled}
          type={inputType}
          className={`block w-full  font-inter   border-b border-gray-300 appearance-none  placeholder:text-[15px]  ${
            search === true
          } shadow-sm   sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary focus:outline-none focus:ring-primary`}
          onChange={onChange}
          value={value}
        />
        {type === "password" && (
          <>
            {inputType === "password" ? (
              <button
                className="absolute bottom-1/3 right-3"
                onClick={() => setInputType("text")}
                type="button"
              >
                <EyeIcon className=" w-5 h-5" />
              </button>
            ) : (
              <button
                className="absolute bottom-1/3 right-3"
                onClick={() => setInputType("password")}
                type="button"
              >
                <EyeSlashIcon className=" w-5 h-5" />
              </button>
            )}
          </>
        )}
        {error && <ErrorMessage msg={error} />}
      </div>
    </div>
  );
});

Input.displayName = "Input";
