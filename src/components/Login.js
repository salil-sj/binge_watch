import React, { useRef, useState } from "react";
import { emailValidation, passwordValidation } from "../utils/validator";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignin);
  };

  const handleButtonLoginOrSignupButton = () => {
    setIsEmailError(!emailValidation(email.current.value));
    setIsPasswordError(!passwordValidation(password.current.value));
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className=" h-1/3 w-auto   mt-10 border rounded-xl border-gray-100 shadow-lg">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          className="mx-auto my-2 mt-4 p-4 mb-4"
        />

        {!isSignin ? (
          <div>
            <div className="mx-4  flex-col mb-4 ">
              <label className="font-bold     p-1 text-lg justify-start">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full mx-auto p-2 bg-white border border-gray-200 rounded-lg"
              />
            </div>

            <div className="mx-4  flex-col mb-4 ">
              <label className="font-bold     p-1 text-lg justify-start">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mx-auto p-2 bg-white border border-gray-200 rounded-lg"
              />
            </div>
          </div>
        ) : null}

        <div className="mx-4  flex-col ">
          <label className="font-bold     p-1 text-lg justify-start">
            Email
          </label>
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className={`w-full mx-auto p-2 bg-white border border-gray-200 rounded-lg ${
              isEmailError ? "border-red-500 bg-red-50" : ""
            }`}
          />
          {isEmailError ? (
            <h1 className="text-red-500 text-sm font-bold p-1">
              {" "}
              Please enter a valid email address{" "}
            </h1>
          ) : null}
        </div>
        <div className="mx-4 mt-4 flex-col ">
          <label className="font-bold  text-lg  p-1 "> Password</label>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className={`w-full mx-auto p-2 bg-white border border-gray-200 rounded-lg ${
              isPasswordError ? "border-red-500 bg-red-50" : ""
            }`}
          />
          {isPasswordError ? (
            <h1 className="text-red-500 text-sm font-bold p-1">
              {" "}
              Please enter a valid Password{" "}
            </h1>
          ) : null}
        </div>
        <div className=" mt-8 mx-4 mb-10">
          <button
            className=" bg-yellow-400  p-2 rounded-lg w-full font-bold hover:bg-yellow-500"
            onClick={handleButtonLoginOrSignupButton}
          >
            {isSignin ? "SignIn" : "SignUp"}
          </button>

          <div className="mt-3">
            <h1 className=" ">By continuing, you agree to the - </h1>
            <h1 className=" text-blue-700 ">
              Amazon Conditions of Use and Privacy Notice.{" "}
            </h1>
          </div>
        </div>
      </div>

      <h1 className=" mt-3">
        {" "}
        {isSignin ? "New to Amazon?" : "Already Have an Account ?"}{" "}
      </h1>
      <button
        className=" mt-2 bg-gray-100   p-2 rounded-lg  font-bold hover:bg-blue-50 hover:border hover:border-blue-400"
        onClick={toggleIsSignIn}
      >
        {isSignin
          ? "Create your Amazon Account"
          : "Login to your Amazon Account"}
      </button>
    </form>
  );
};

export default Login;
