import React from 'react'
// import Navbar from './common/Navbar'
import Sidebar from '../common/sidebar/Sidebar'
import { useState } from 'react';
import "./Setting.css"
     
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Backlog() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }

  return (
    <div className="setting-component">
    {/* <Navbar onClick={handleViewSidebar} /> */}
    <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    <div className="setting-area">
     <h1 className='heading'>Hello I am Setting Page</h1>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Project Name"
          defaultValue="Hello World"
        />
        </div>
      </Box>

   </div>
   
 </div>
  )
}
