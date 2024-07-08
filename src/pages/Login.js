import React, { useState } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const registerForm = () => {
    return (
      <>
        <Input type='text' required focusColor='[#e83417]'>Firstname</Input>
        <Input type='text' required focusColor='[#e83417]'>Lastname</Input>
        <Input type='email'required focusColor='[#e83417]'>Email</Input>
      </>
    );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const registerToggle = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col p-8 rounded-xl shadow-[0_15px_40px_1px_rgba(0,0,0,0.3)] items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold content-none">
            {isRegister ? "Register" : "Login"}
          </h1>
          {isRegister ? (
            <p
              className="relative left-24 bottom-7 text-[#e83417] font-semibold cursor-pointer"
              onClick={registerToggle}
            >
              Go Back
            </p>
          ) : null}
        </div>
        <div className="flex flex-col">
          {isRegister ? registerForm() : null}
          <Input type='text' required focusColor='[#e83417]' >Username</Input>
          <Input type='password' required focusColor='[#e83417]'>Password</Input>
          
        </div>
        <div className="mt-6">
          {!isRegister ? <Buttons mode="light">Login</Buttons> : null}
          {!isRegister ? (
            <Buttons className="ml-6" mode="dark" onClick={registerToggle}>
              Sign Up
            </Buttons>
          ) : null}
          {isRegister ? (
            <Buttons className="ml-6" mode="dark">
              Register
            </Buttons>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
