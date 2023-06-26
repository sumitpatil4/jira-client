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
import { Button, Stack } from "@mui/material";
import CreateProject from './CreateProject'

export default function Navbar() {
  //const authData = useContext(AuthContext);
  //const userImageUrl = authData.googleData.picture;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //const navigate = useNavigate();
  let navlinks = ["Your Work", "Projects", "Teams"]
  const unmount=()=>{
    //navigate("/");
    //authData.handleLogout();
    
  }
  return (
    <div className='outerWrapper'>
      <div className='navbar-title'>
        <h2 className='navbar-logo' >Accolite Jira</h2>
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
        </ul>
        <Stack spacing={2} direction={"column"} sx={{marginTop:'10px'}}>
              <CreateProject/>
            </Stack>
        
      </div>

    </div>
  )
}
