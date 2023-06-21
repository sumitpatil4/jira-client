import React, { useState,useContext } from "react";
import "./signup.css";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button, Stack } from "@mui/material";
import {FaUserAlt} from "react-icons/fa";
import accoliteLogo from "../../Images/accolitedigital.png"
import AuthContext from "../ContextApi/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";



const Signup = () => {
  const { updateIsAuthenticated } = useContext(AuthContext);

    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[Confpassword,setConfPassword]=useState("")
    const [resPopUp,setResPopUp] = useState(false);
    const[message,setMessage]=useState("")

    const register=(e)=>{

        e.preventDefault();
        if(password!==Confpassword){
          setMessage("Password did not match")
          setResPopUp(true);
        }
        else{
        axios.post(`http://localhost:4545/api/user/register`,{
            fname:fname,
            lname:lname,
            email:email,
            password:password
        })
        .then((res)=>{ 
          if(res.data.email===undefined){
            setMessage(res.data);
            setResPopUp(true);
            console.log(res.data);
          }
          else{

            console.log(res.data)
            updateIsAuthenticated(true);
          }
        })
      }
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
                  value={Confpassword}
                  onChange={(e)=>setConfPassword(e.target.value)}
                  required
                />
              </div>
              
              <Stack spacing={2} direction={"row"} sx={{ marginTop: '20px' }}>
              <Button variant='contained' type="submit">Register</Button>
              <h2>OR</h2>
              <GoogleLogin/>
              </Stack>
              <div className="signup-login-redirect">
                   <Link to="/login" >I am already a member</Link>
                    
                </div>
            </form>
          </div>
          </div>
        </div>
        <div className="signup-body">
            <div className="signup-static">
                <div className="signup-img">
                    <img src={accoliteLogo} alt="signuplogo" className="signup-image" />
                </div>
                
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

export default Signup;
