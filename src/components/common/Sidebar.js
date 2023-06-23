import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Backlog from "../Backlog/Backlog";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <>
      <div className={sidebarClass}>
        {props.isOpen ? (
          <button onClick={props.toggleSidebar} className="sidebar-toggle">
            <i class="fa-solid fa-angles-left"></i>
          </button>
        ) : (
          <button onClick={props.toggleSidebar} className="sidebar-toggle">
            <i class="fa-solid fa-angles-right"></i>
          </button>
        )}
        <div className="features">

          <button className="sidebar-project-name">Project Name</button>
          <hr></hr>
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
            <i class="fa-solid fa-barcode"></i> &nbsp; Board
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
