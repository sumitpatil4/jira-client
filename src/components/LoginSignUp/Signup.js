import React from "react";
import "./signup.css";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button, Stack } from "@mui/material";
import {FaUserAlt} from "react-icons/fa";
import signuplogo from './signuplogo.png';



const Signup = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="signup-body">
            <div className="form-body">
          <div className="signup-title">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-form">
            <form className="signupForm">
              <div className="inputWrapper">
                <FaUserAlt className="inputIcon" />
                <input
                  type="text"
                  placeholder="Your First Name"
                  name="email"
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineUser className="inputIcon" />
                <input
                  type="text"
                  placeholder="Your Last Name"
                  name="email"
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineMail className="inputIcon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineLock className="inputIcon" />

                <input
                  type="password"
                  placeholder="Password"
                  name="psw"
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineLock className="inputIcon" />
                <input
                  type="password"
                  placeholder="Repeat Your Password"
                  name="psw-repeat"
                  required
                />
              </div>
              <Stack spacing={2} direction={"row"} sx={{ marginTop: '20px' }}>
              <Button variant='contained'>Register</Button>
              </Stack>
            </form>
          </div>
          </div>
        </div>
        <div className="signup-body">
            <div className="signup-static">
                <div className="signup-img">
                    <img src={signuplogo} alt="signuplogo" className="signup-image" />
                </div>
                <div className="signup-login-redirect">
                    <span>I am already a member</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
