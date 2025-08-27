import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, register, error }) => {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea
          rows={5}
          className={`w-full border rounded px-3 py-2 focus:outline-none ${error ? 'border-red-500 bg-red-100' : 'border-gray-300'}`}
          {...register}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`w-full border rounded px-3 py-2 focus:outline-none ${error ? 'border-red-500 bg-red-100' : 'border-gray-300'}`}
          {...register}
        />
      )}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
