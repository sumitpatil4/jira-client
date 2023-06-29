import React from 'react'
// import Navbar from './common/Navbar'
import { Button} from "@mui/material";
import Sidebar from '../common/sidebar/Sidebar'
import { useState } from 'react';
import "./Setting.css"
import SettingHeader from './SettingHeader';   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Backlog() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }

  return (
    <div className="setting-component">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    
    <div className="setting-area">
    <SettingHeader projectName={"Accolite JIRA"} isOpen = {sidebarOpen}/>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-style">
        <div><TextField
          required
          id="outlined-required"
          label="Project Name"
          defaultValue="Jira"
        /></div>
        <div><TextField
          required
          id="outlined-required"
          label="Key"
          defaultValue="JIRA"
        /></div>
        <div><TextField
          required
          id="outlined-required"
          label="Assignee"
          defaultValue="Unassinged"
        /></div>
        <Button variant="contained" type="submit" style={{height:'35px'}}>
              Save
        </Button>
        </div>
      </Box>

   </div>
   
 </div>
  )
}
