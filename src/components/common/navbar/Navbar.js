import React, { useState } from 'react'
import './Navbar.css'
import './Dropdown.css'
import Project from './Project'
import YourWork from './YourWork'
import Team from './teams/Team'
import { Button, Stack } from "@mui/material";
import CreateProject from './CreateProject'
import CreatIssue from './createIssueButton/CreatIssue'

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let navlinks = ["Your Work", "Projects", "Teams"]
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
              <CreatIssue />
            </Stack>
        
      </div>
    </div>
  )
}