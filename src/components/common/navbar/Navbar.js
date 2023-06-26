import React, { useState } from 'react'
import './Navbar.css'
import './Dropdown.css'
import {Link} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Project from './Project'
import YourWork from './YourWork'
import Team from './teams/Team'
import { Button, Stack } from "@mui/material";
import CreateProject from './CreateProject'
import CreatIssue from './createIssueButton/CreatIssue'
// import Dropdown from 
import profile from '../../../Images/user.jpg'
export default function Navbar() {
  //const authData = useContext(AuthContext);
  //const userImageUrl = authData.googleData.picture;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let navlinks = ["Your Work", "Projects", "Teams"]
  return (
    <div className='outerWrapper'>
      <div className='container'>
      <div className='navbar-title'>
        <Link to='/landingpage' style={{textDecoration:'none'}}>
        <h2 className='navbar-logo'>Accolite Jira</h2>
        </Link>
      </div>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div className='nav-links'>
        <ul className='nav-links'>
          {navlinks.map((curItem,index) => {
            return (
              <div class="dropdown">
                <Stack spacing={2} direction={"column"} sx={{marginTop:'10px'}}>
                <Button variant="outline" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={closeMobileMenu}>{curItem} &nbsp;<i className='fas fa-caret-down' /></Button>
                </Stack>
                {/* <button onClick={closeMobileMenu} class="dropbtn">&nbsp;<i className='fas fa-caret-down' /></button> */}
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
        <div className="margin-setup">
       <CreatIssue/>
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
                <Dropdown.Item href="">
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
      </div>
  
  )
}