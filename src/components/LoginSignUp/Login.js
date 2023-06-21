import React, { useState,useContext } from "react";
import "../LoginSignUp/login.css";
import "./signup.css";

import { Button, Stack } from "@mui/material";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import accoliteLogo from "../../Images/accolitedigital.png";
import axios from "axios";
import GoogleLogin from "./GoogleSignIn";
import AuthContext from "../ContextApi/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [resPopUp,setResPopUp] = useState(false);
  const { updateIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();


  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4545/auth/login/userByIdPass`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        updateIsAuthenticated(true);
        
        if(res.data===""){
            setMessage("Invalid Credential!!!!");
            setResPopUp(true);
        }
      });
  };

//   const goToSignUp = () => {
//     navigate('/signUp", true);
//   };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="login-static">
          <img src={accoliteLogo} alt="accolitelogo" className="login-img" />
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
                autoFocus
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
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>

            <Link to="/signUp">New User ?</Link>
            <Stack spacing={4} direction={"row"} sx={{ marginTop: "5px" }}>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Stack>
          </form>

          <div className="google-login">
            <h2>OR</h2>
            <GoogleLogin />
          </div>
        </div>
      </div>


      {resPopUp && <div className='popupContainer'>
          <div className='popup-boxd'>
            <div className='popupHeader'>
              <h2>Opps Something went wrong!!</h2>
            </div>
              <div className='msgContainer'>
                <p>{message}</p>
              </div>
              <div className='buttonsContainer'>
                <button type="submit" className="submit-btn" onClick={() => setResPopUp(false)}>
                  Ok
                </button>
              </div>
          </div>
        </div>}


    </div>
  );
};

export default Login;
