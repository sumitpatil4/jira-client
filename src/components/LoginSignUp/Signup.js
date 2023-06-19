import React, { useState } from "react";
import "./signup.css";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button, Stack } from "@mui/material";
import {FaUserAlt} from "react-icons/fa";
import signuplogo from './signuplogo.png';
import axios from "axios";



const Signup = () => {
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")

    const register=(e)=>{
        e.preventDefault();
        const registerBody={fname:fname,lname:lname,email:email,password:password}
        axios.post(`http://localhost:4545/api/user/register`,{
            fname:fname,lname:lname,email:email,password:password
        })
        .then((res)=>{
           setMessage(res.data)
           setTimeout(()=>{
            setMessage("")
           },5000)
        })
        
    }

  return (
    <div>
      <div className="signup-container">
        <div className="signup-body">
            <div className="form-body">
          <div className="signup-title">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-form">
            <form className="signupForm" onSubmit={register}>
              <div className="inputWrapper">
                <FaUserAlt className="inputIcon" />
                <input
                  type="text"
                  placeholder="Your First Name"
                  name="fname"
                  value={fname}
                  onChange={(e)=>setFname(e.target.value)}
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineUser className="inputIcon" />
                <input
                  type="text"
                  placeholder="Your Last Name"
                  name="lname"
                  value={lname}
                  onChange={(e)=>setLname(e.target.value)}
                  required
                />
              </div>
              <div className="inputWrapper">
                <AiOutlineMail className="inputIcon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
              {/* <button type="submit">Submit</button> */}
              <Stack spacing={2} direction={"row"} sx={{ marginTop: '20px' }}>
              <Button variant='contained' type="submit">Register</Button>
              </Stack>
            </form>
            {message && <span>{message}</span>}
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
