import React from "react";
import "./Sidebar.css";
import { Button, Stack } from "@mui/material";
import { AiFillProject } from 'react-icons/ai';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import {  FaAngleDoubleLeft ,FaAngleDoubleRight} from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Backlog from "../Backlog/Backlog";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <>
      <div className={sidebarClass}>
        {props.isOpen ? (
          
                     <FaAngleDoubleLeft className="sidebar-toggle" onClick={props.toggleSidebar}/>
        ) : (
          <FaAngleDoubleRight className="sidebar-toggle" onClick={props.toggleSidebar}/>
          // <div onClick={props.toggleSidebar} className="sidebar-toggle">
          //   <i className="fa-solid fa-angles-right"></i>
          // </div>
        )}
        <div className="features">
          <div className="features-icon">
          <Stack spacing={2} direction={"row"} sx={{marginTop:'10px'}}>
            <div className="icon-logo">
          <AiFillProject  />
          </div>
          
              <Button variant="outline" type="submit" style={{height:'35px'}}>
              Project Name 
              </Button>
            </Stack>
            
  
          </div>
          
          
          <Link to='/roadmap'>
            <button className="sidebar-roadmap-btn">
              <i class="fa-solid fa-bars-staggered"></i> &nbsp; Roadmap
            </button>
          </Link>


          <Link to='/backlog'>
            <button className="sidebar-backlog-btn">
              <i class="fa-solid fa-list-check"></i> &nbsp; Backlog
            </button>
          </Link>

          <Link to='/board'>
            <button className="sidebar-board-btn">
            <BsFillClipboardDataFill style={{marginTop:'-2%'}}/> &nbsp; Board
            </button>
          </Link>
         
         <hr></hr>
          <Link to='/setting'>
            <button className="sidebar-setting-btn">
              <i class="fa-solid fa-gear"></i> &nbsp; Project Settings
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};
export default Sidebar;
