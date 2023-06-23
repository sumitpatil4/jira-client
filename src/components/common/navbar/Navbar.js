import React, { useState } from 'react'
import { useContext } from "react";
import './index.css'
import './Dropdown.css'
import Dropdown from "react-bootstrap/Dropdown";
import Project from './Project'
import YourWork from './YourWork'
import Team from './Team'
import profile from './user.jpg'
import { useNavigate } from "react-router-dom";
import AuthContext from "../../ContextApi/AuthContext"
export default function Navbar() {
  const authData = useContext(AuthContext);
  //const userImageUrl = authData.googleData.picture;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  let navlinks = ["Your Work", "Projects", "Teams"]
  const unmount=()=>{
    navigate("/");
    authData.handleLogout();
    
  }
  return (
    <div className='outerWrapper'>
      <div>
        <h1 style={{fontSize:"25px",fontWeight:"bold",color:"blue",marginTop:"1rem",marginLeft:"1.2rem"}}>Accolite Jira</h1>
      </div>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className='nav-links'>
        <ul className='nav-links'>
          {navlinks.map((curItem,index) => {
            return (
              <div class="dropdown">
                <button onClick={closeMobileMenu} class="dropbtn">{curItem}&nbsp;<i className='fas fa-caret-down' /></button>
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
        </ul>
        <button className='button-style'><b>Create</b></button>
        <div className="profile">
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

    </div>
  )
}
