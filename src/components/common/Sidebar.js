import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Backlog from "../Backlog/Backlog";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
          <button className="project-name">Megha</button>

          <Link to='/roadmap'>
            <button className="roadmap">
              <i class="fa-solid fa-bars-staggered"></i> &nbsp; Roadmap
            </button>
          </Link>


          <Link to='/backlog'>
            <button className="backlog">
              <i class="fa-solid fa-list-check"></i> &nbsp; Backlog
            </button>
          </Link>

          <Link to='/board'>
            <button className="board">
              <i class="fa-solid fa-bars-staggered"></i> &nbsp; Board
            </button>
          </Link>

          <Link to='/setting'>
            <button className="setting">
              <i class="fa-solid fa-gear"></i> &nbsp; Project Settings
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};
export default Sidebar;
