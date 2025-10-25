import React from "react";

interface Props {
  message: string;
}

export const Error: React.FC<Props> = ({ message }) => {
  return <p>{message}</p>;
};
