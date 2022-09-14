import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../Atoms/Input";
import { handleRegister } from "../redux/features/profileSlice";
import { FormContainer } from "./auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const initialForm = {
    fullname: "",
    username: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);
  const [type, setType] = useState("register");
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    dispatch(type === "register" ? handleRegister(form) : "").then(() => {});
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
        {Object.keys(form).map((data, i) => {
          if (type !== "register" && data === "username") return null;
          return (
            <Input
              handleOnChange={handleOnChange}
              name={data}
              value={form[data]}
              key={i}
            />
          );
        })}
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
