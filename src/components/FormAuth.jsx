import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../Atoms/Input";
import { handleLogin, handleRegister } from "../redux/features/profileSlice";
import { FormContainer } from "./formAuth.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { inputsFormAuth } from "../lib/helper";

const FormAuth = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const initialForm = {
    fullname: "",
    username: "",
    password: "",
  };
  const errorMsg = useSelector((state) => state.profile.value.error);
  console.log("error msg ui: ", errorMsg);
  const [form, setForm] = useState(initialForm);
  const [type, setType] = useState("register");
  const disabledLogin =
    form.fullname && form.username && form.password ? false : true;
  const disabledRegister = form.username && form.password ? false : true;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputsInvalid = document.querySelectorAll("input:invalid");
    console.log(inputsInvalid.length);
    if (inputsInvalid.length === 0) {
      dispatch(
        type === "register" ? handleRegister(form) : handleLogin(form)
      ).then((data) => {
        console.log("data inside", data);
        if (data.payload.error) {
          NotificationManager.error(data.payload.error, "Error", 4000);
        } else {
          type === "register" && navigate("choose-avatar");
        }
      });
    } else {
      inputsInvalid.forEach((inputElm) => {
        inputElm.classList.add("input-shake");
        setTimeout(() => {
          inputElm.classList.remove("input-shake");
        }, 1500);
      });
    }
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
        {inputsFormAuth.map((data, i) => {
          if (type !== "register" && data.name === "fullname") return null;
          return (
            <Input
              key={i}
              handleOnChange={handleOnChange}
              value={form[data.name]}
              {...data}
            />
          );
        })}
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={type === "register" ? disabledRegister : disabledLogin}
        >
          {type === "register" ? "Register" : "Login"}
        </button>
        <p>
          {type === "register" ? (
            <>Already have an account? login </>
          ) : (
            <>Haven't have an account? regiter </>
          )}
          <span onClick={() => handleChangeType()}>here</span>{" "}
        </p>
      </form>
      <NotificationContainer />
    </FormContainer>
  );
};

export default FormAuth;
