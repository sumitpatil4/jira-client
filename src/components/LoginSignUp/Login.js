import React,{useState} from "react";
import "../LoginSignUp/login.css";
import { FaUserAlt, FaKey } from 'react-icons/fa';
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
            <div className="login-image"></div>

            <div className="login-cre">

                <div className="login-form">
                    <div className="login-text">
                        <h1>Login</h1>
                    </div>
                    <form className="input-field" onSubmit={login}>

                        <div className="username">
                            <i className="icon"><FaUserAlt /></i>
                            <input
                                type="email"
                                placeholder="Username"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus />
                        </div>
                        <div className="password">
                            <i className="icon"><FaKey /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                name="psw"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus />
                        </div>

                        <a href="#">Signup</a>

                        <button>
                            <span class="state">Log in</span>
                        </button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;
