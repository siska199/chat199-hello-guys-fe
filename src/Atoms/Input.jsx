import React from "react";
import { ContainerInput } from "./input.css";
import { firstCharUpperCase } from "../lib/helper";

const Input = (props) => {
  const { name, value, handleOnChange } = props;
  let type = "text";
  switch (name) {
    case "username":
      type = "text";
      break;
    case "fullname":
      type = "text";
      break;
    case "password":
      type = "password";
      break;
    default:
      break;
  }
  return (
    <ContainerInput>
      <label htmlFor="">{firstCharUpperCase(name)}</label>
      <input onChange={handleOnChange} type={type} name={name} value={value} />
    </ContainerInput>
  );
};

export default Input;
