import React from "react";
import { ContainerInput } from "./input.css";

const Input = (props) => {
  const { name, type } = props;

  return (
    <ContainerInput>
      <label htmlFor="">{name}</label>
      <input type={type} name={name} />
    </ContainerInput>
  );
};

export default Input;
