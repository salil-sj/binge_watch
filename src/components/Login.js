import React, { useRef, useState } from "react";
import { emailValidation, passwordValidation } from "../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth, getLoginError } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignin, setIsSignIn] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignin);
  };

  const handleButtonLoginOrSignupButton = () => {
    setLoadingState(true);
    const isPwdValid = passwordValidation(password.current.value);
    const isEmailValid = emailValidation(email.current.value); // returns true if email is valid

    setIsEmailError(!isEmailValid);
    setIsPasswordError(!isPwdValid);

    if (!isPwdValid || !isEmailValid) {
      setLoadingState(false);
      return;
    }

    if (isSignin) {
      //Sign in:
      signIn();
    } else {
      signUp();
    }
  };

  const signIn = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setUserDetails(user));
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoadingState(false);
        setAuthError(getLoginError(errorCode + " " + errorMessage));
      });
  };

  const signUp = () => {
    //Sign up
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: firstName.current.value + " " + lastName.current.value,
        })
          .then(() => {})
          .catch((error) => {});

        dispatch(setUserDetails(user));
        navigate("/browse");
      })
      .catch((error) => {
        setLoadingState(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorCode + " " + errorMessage);
      });
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
                ref={firstName}
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
                ref={lastName}
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
        <div className=" mt-4 mx-4 mb-10">
          <h1 className="text-red-500 p-1 font-bold text-sm"> {authError}</h1>
          <button
            className=" bg-yellow-400  p-2 rounded-lg w-full font-bold hover:bg-yellow-500"
            onClick={handleButtonLoginOrSignupButton}
          >
            <div className="flex justify-center">
              {isSignin ? "SignIn" : "SignUp"}
              {loadingState ? <Spinner /> : null}
            </div>
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
