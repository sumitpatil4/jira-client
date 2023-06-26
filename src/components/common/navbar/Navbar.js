import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useContext } from "react";
import profile from '../../../Images/user.jpg'
import './Dropdown.css'
import Dropdown from "react-bootstrap/Dropdown";
import Project from './Project'
import YourWork from './YourWork'
import Team from './teams/Team'
import AuthContext from '../../ContextApi/AuthContext.js'
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const authData = useContext(AuthContext);
  const userImageUrl = authData.userpicture;
  const [click, setClick] = useState(false);
  //const navigate = useNavigate();
  let navlinks = ["Your Work", "Projects", "Teams"]
  const unmount=()=>{
    //navigate("/");
    //authData.handleLogout();
    
  }
  return (
    <nav className="navbar">
    <div className="container">
    <div>
      <Link to='/landingpage' style={{textDecoration:'none'}}>
       <h2 style={{fontSize:"25px",fontWeight:"bold",color:"blue",marginTop:"-1.5rem",marginLeft:"1rem",position:"fixed"}} className="dropdown">Accolite Jira</h2>
       </Link>
    </div>
      <div className='nav-links'>
        <ul className='nav-links'>
          {navlinks.map((curItem,index) => {
            return (
              <div class="dropdown">
                <button class="dropbtn">{curItem}&nbsp;<i className='fas fa-caret-down' /></button>
                <div className='dropdown-content'>
                  {
                    index===0?(<YourWork/>)
                    :index===1?(<Project/>):(<Team/>)
                  }
                
                </div>
                
              </div>
            )
          })
          }
        <div>
        <button className='button-style'><b>Create</b></button>
        </div>
        <div>
        <div className="profile drop-btn">
          <div className="NavbarDropDown">
            <Dropdown className="MainprofileDiv">
              <Dropdown.Toggle
                className="profileUserName" 
              >
                <img
                  className="googleImage"
                  alt="googleImage"
                  src={profile}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="NavbarDropDownMenu">
                <Dropdown.Item href="" onClick={(e)=>{unmount()}}>
                  <span>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        </div>
        </ul>
      </div>
      </div>
    </nav>
  )
}
