import React, { useState } from "react";

type Props = {
  handleChange: (va: string) => void;
  placeholder?: string;
  value?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  disabled?: boolean;
};

export const CustomInput: React.FC<Props> = ({
  handleChange,
  placeholder = "Enter the value",
  type = "text",
  disabled,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    handleChange(newValue);
  };

  return (
    <input
      disabled={disabled}
      value={inputValue}
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};
