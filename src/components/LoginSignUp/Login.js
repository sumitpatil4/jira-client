import React,{useState} from "react";
import "../LoginSignUp/login.css";
import "./signup.css";

import { Button, Stack } from "@mui/material";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import accoliteLogo from "../../Images/accolitedigital.png"
import axios from "axios";
import GoogleLogin from "./GoogleSignIn";



const Login = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")

    const login = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4545/auth/login/userByIdPass`,{
            email:email,
            password:password,
        })
        .then((res)=>{
            console.log(res);
           setMessage(res.data)
           setTimeout(()=>{
            setMessage("")
           },5000)
        })
    }


    return (
        <div className="login-container">
            <div className="login-image">
                <div className="login-static">
                <img src={accoliteLogo} alt="accolitelogo" className="login-img"/>
                
                </div>

            </div>

            <div className="login-cre">

                <div className="login-form">
                    <div className="login-text">
                        <h1>Login</h1>
                    </div>
                    <form className="input-field" onSubmit={login}>

                    <div className="inputWrapper">
                <AiOutlineMail className="inputIcon" />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus />
                        </div>
                        <div className="inputWrapper">
                <AiOutlineLock className="inputIcon" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="psw"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus />
                        </div>

                        <Link href="/signup">New User ?</Link>
                        <Stack spacing={4} direction={"row"} sx={{ marginTop: '5px'}}>
                        
              <Button variant='contained' type="submit">Login</Button>
              </Stack>
                    </form>
                
                    <div className="google-login">
                    <h2>OR</h2>
                    <GoogleLogin/>
                    </div>

            </div>
            
                </div>
        </div>
    );
};

export default Login;
