import React, { useState } from "react";
import Button from "../../component/Button/Button";
import Input from "../../component/Input/Input";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [currState, setCurrState] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleState = () => {
    setCurrState(!currState);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };

  return (
    <div className="login-form">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h2>{currState ? "Login" : "Register"}</h2>

        {currState ? "" : <Input type={"text"} placeholder={"User Name"} />}
        <Input type={"email"} placeholder={"E-mail"} />
        <Input type={"text"} placeholder={"Password"} />
        {currState ? (
          ""
        ) : (
          <Input type={"text"} placeholder={"Confirm Password"} />
        )}

        {currState ? (
          <a onClick={handleNavigate} href="#">
            Forgot Password
          </a>
        ) : (
          ""
        )}

        <div className="login-condition">
          <Input type={"checkbox"} className={"checkbox"} />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        <Button type={"submit"} label={currState ? "Login" : "Register"} />
        {currState ? (
          <p className="txt">
            Create a new account? <span onClick={handleState}>Click here</span>
          </p>
        ) : (
          <p className="txt">
            Already have an account?
            <span onClick={handleState}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
