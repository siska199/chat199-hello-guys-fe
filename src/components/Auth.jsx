import React, { useState } from "react";
import Input from "../Atoms/Input";
import { FormContainer } from "./auth.css";

const Auth = () => {
  const [type, setType] = useState("register");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChangeType = () => {
    setType((prev) => {
      return type === "register" ? "login" : "register";
    });
  };
  return (
    <FormContainer>
      <h1>
        {type === "register" ? (
          <>
            {" "}
            <span>Join</span> <span>With Us?</span> <span> Register</span>{" "}
            <span> now!</span>{" "}
          </>
        ) : (
          <>
            <span>Login In</span> <span>Now !</span>
          </>
        )}
      </h1>
      <form action="">
        {type === "register" && <Input name="Full Name" type="text" />}
        <Input name="Username" type="text" />
        <Input name="Password" type="password" />
        <button onClick={(e) => handleSubmit(e)}>Register</button>
        <p>
          {type === "register" ? (
            <>Already have an account? login </>
          ) : (
            <>Haven't have an account? regiter </>
          )}
          <span onClick={() => handleChangeType()}>here</span>{" "}
        </p>
      </form>
    </FormContainer>
  );
};

export default Auth;
