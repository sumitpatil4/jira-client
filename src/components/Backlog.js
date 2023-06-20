import React from 'react'
import Sidebar from './common/Sidebar'
import { useState } from 'react';
import "./Backlog.css"

export default function Backlog() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }

  return (
    <div className="backlog-component">
    {/* <Navbar onClick={handleViewSidebar} /> */}
    <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    <div className="backlog-area">
     <h1>Hello I am Backlog Page</h1>
   </div>
   
 </div>
  )
}
