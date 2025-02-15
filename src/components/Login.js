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
    setIsEmailError(false);
    setIsPasswordError(false);
    setAuthError("");
  };

  const handleButtonLoginOrSignupButton = () => {
    setLoadingState(true);
    const isPwdValid = passwordValidation(password.current.value);
    const isEmailValid = emailValidation(email.current.value);

    setIsEmailError(!isEmailValid);
    setIsPasswordError(!isPwdValid);

    if (!isPwdValid || !isEmailValid) {
      setLoadingState(false);
      return;
    }

    isSignin ? signIn() : signUp();
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        dispatch(setUserDetails(userCredential.user));
        navigate("/browse");
      })
      .catch((error) => {
        setLoadingState(false);
        setAuthError(getLoginError(error.code + " " + error.message));
      });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: firstName.current.value + " " + lastName.current.value,
        }).then(() => {
          dispatch(setUserDetails(userCredential.user));
          navigate("/browse");
        });
      })
      .catch((error) => {
        setLoadingState(false);
        setAuthError(error.code + " " + error.message);
      });
  };

  return (
    <form className="flex flex-col items-center px-4 sm:px-0" onSubmit={(e) => e.preventDefault()}>
      <div className="w-full max-w-md mt-10 border rounded-xl border-gray-100 shadow-lg bg-white p-6 min-h-[370px]">

      <h1 className="text-4xl font-extrabold text-black-900 text-center mt-2 mb-8">
  🎬 Binge Watch
</h1>

        <p1> Helllo {process.env.REACT_APP_MY_DATA}</p1>

        <div className="my-4">
        {!isSignin && (
          <div className="grid gap-4">
            <input ref={firstName} type="text" placeholder="First Name" className="p-2 bg-white border border-gray-200 rounded-lg w-full" />
            <input ref={lastName} type="text" placeholder="Last Name" className="p-2 bg-white border border-gray-200 rounded-lg w-full" />
          </div>
        )}
        </div>

        <input ref={email} type="text" placeholder="Email" className={`p-2 w-full border rounded-lg ${isEmailError ? "border-red-500 bg-red-50" : "border-gray-200"}`} />
        {isEmailError && <p className="text-red-500 text-sm">Please enter a valid email address</p>}

        <input ref={password} type="password" placeholder="Password" className={`p-2 w-full border rounded-lg mt-4 ${isPasswordError ? "border-red-500 bg-red-50" : "border-gray-200"}`} />
        {isPasswordError && (
          <div className="text-red-500 text-sm">
            <p>Password should contain at least:</p>
            <ul className="ml-4 list-disc">
              <li>8 characters</li>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 digit</li>
              <li>1 special character (!@#$%^&*)</li>
            </ul>
          </div>
        )}

        <p className="text-red-500 text-sm mt-2">{authError}</p>

        <button className="mt-4 bg-yellow-400 p-2 rounded-lg w-full font-bold hover:bg-yellow-500 flex justify-center" onClick={handleButtonLoginOrSignupButton}>
          {isSignin ? "Sign In" : "Sign Up"} {loadingState && <Spinner />}
        </button>

        <p className="mt-8 text-sm">By continuing, you agree to Binge Watch's <span className="text-blue-700">Conditions of Use</span> and <span className="text-blue-700">Privacy Notice</span>.</p>
      </div>

      <p className="mt-3 text-sm">{isSignin ? "New to Binge Watch?" : "Already have an account?"}</p>
      <button className="mt-2 bg-gray-100 p-2 rounded-lg font-bold hover:bg-blue-50 border border-gray-200" onClick={toggleIsSignIn}>
        {isSignin ? "Create your Binge Watch Account" : "Login to your Binge Watch Account"}
      </button>
    </form>
  );
};

export default Login;
