import "./Login.css";
import hinh from "./logo.png";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AppContext } from "../../AppConText";
import React from "react";

export default function Login() {
  const {
    checkLogin,
    setCheckLogin,
    checkSignup,
    setCheckSignup,
    sweetalertSignin,
    sweetalertLogin,
  } = useContext(AppContext);
  const [eye, setEye] = useState(false);
  const [type, setType] = useState("password");
  return (
    <div id="login">
      <div className="header_login">
        <div className="hinh">
          <Link to="/">
            <img src={hinh} alt="" />
          </Link>
        </div>
      </div>
      <div className="body_login">
        <div className="login">
          <div className="top">
            <button
              className={checkSignup}
              onClick={() => {
                setCheckSignup("active");
                setCheckLogin("");
              }}
            >
              Sign Up
            </button>
            <button
              className={checkLogin}
              onClick={() => {
                setCheckLogin("active");
                setCheckSignup("");
              }}
            >
              Log In
            </button>
          </div>
        </div>
        <div className="form">
          <div className={`form-input ${checkSignup}`}>
            <div className="form-group">
              <input type="text" required />
              <label for="">
                First Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input type="text" required />
              <label for="">
                Last Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <label for="">
                Email Address<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input type={type} required />
              <label for="">
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <div className="eye">
                {eye ? (
                  <AiOutlineEye
                    onClick={() => {
                      setEye(false);
                      setType("password");
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setEye(true);
                      setType("text");
                    }}
                  />
                )}
              </div>
            </div>
            <p>
              At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
            </p>
            <div className="btn">
              <button onClick={() => sweetalertSignin()}>Sign Up</button>
            </div>
          </div>
          <div className={`form-input ${checkLogin}`}>
            <div className="form-group">
              <input type="email" required />
              <label for="">
                Email Address<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input type={type} required />
              <label for="">
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <div className="eye">
                {eye ? (
                  <AiOutlineEye
                    onClick={() => {
                      setEye(false);
                      setType("password");
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setEye(true);
                      setType("text");
                    }}
                  />
                )}
              </div>
            </div>
            <p style={{ textAlign: "right" }}>Forgot the password?</p>
            <div className="btn">
              <button
                onClick={() => {
                  sweetalertLogin();
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
