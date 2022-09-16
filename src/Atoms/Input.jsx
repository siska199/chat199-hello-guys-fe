import React from "react";
import { useState } from "react";
import { ContainerInput } from "../styles/input.css";

const Input = (props) => {
  const [notFocused, setNotFocused] = useState("true");
  const { handleOnChange, label, error, ...inputProps } = props;
  return (
    <ContainerInput>
      <label htmlFor="">{label}</label>
      <input
        onBlur={() => setNotFocused("false")}
        notfocused={notFocused}
        onChange={handleOnChange}
        {...inputProps}
        required
      />
      <span>{error}</span>
    </ContainerInput>
  );
};

export default Input;
