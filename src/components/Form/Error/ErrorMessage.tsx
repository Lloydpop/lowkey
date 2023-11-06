"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
interface ErrorProps {
  msg?: string;
}
export const ErrorMessage: React.FC<ErrorProps> = ({ msg }) => {
  return (
    <small className="text-sm text-red-600 flex items-center mt-0 absolute">
      <ExclamationCircleIcon className="h-4 w-4 fill-transparent mt-0.5 mr-1" />
      {msg}
    </small>
  );
};
