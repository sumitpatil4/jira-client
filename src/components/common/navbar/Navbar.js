import React from 'react'
import '../Navbar/index.css'
import '../Navbar/Dropdown.css'
import Project from './Project'
import YourWork from './YourWork'
import Team from './Team'
export default function Navbar() {
  let navlinks = ["Your Work", "Projects", "Teams"]
  return (
    <div className='outerWrapper'>
      <div>
        <h1 style={{fontSize:"25px",fontWeight:"bold",color:"blue",marginTop:"1rem",marginLeft:"1.2rem"}}>Accolite Jira</h1>
      </div>
      <div className='nav-links'>
        <ul className='nav-links'>
          {navlinks.map((curItem,index) => {
            return (
              <div class="dropdown">
                <button class="dropbtn">{curItem}</button>
                <div className='dropdown-content'>
                  {
                    index==0?(<Project/>)
                    :index==1?(<YourWork/>):(<Team/>)
                  }
                
                </div>
                
              </div>
            )
          })
          }
        </ul>
        <button  style={{height:"2.5rem",width:"2rem",borderRadius:"10%",background:"blue",color:"white",marginTop:"10px",fontWeight:"bold",width:"60px"}}>Create</button>
      </div>
    </div>
  )
}
