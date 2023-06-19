import React from "react";
import img from "../../Images/wp4312062-range-rover-velar-svautobiography-wallpapers.jpg";
import "../LoginSignUp/login.css";
import {FaUserAlt, FaKey} from 'react-icons/fa';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-image"></div>

            <div className="login-cre">

                <div className="login-form">
                    <div className="login-text">
                        <h1>Login</h1>
                    </div>
                    <form className="input-field" >

                        <div className="username">
                            <i className="icon"><FaUserAlt/></i>
                            <input type="email" placeholder="Username" autoFocus />
                        </div>
                        <div className="password">
                            <i className="icon"><FaKey/></i>
                            <input type="password" placeholder="Password" autoFocus />
                        </div>

                        <button>
                            <i class="spinner"></i>
                            <span class="state">Log in</span>
                        </button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;
