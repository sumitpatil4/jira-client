import React from 'react'
// import Navbar from './common/Navbar'
import Sidebar from '../common/sidebar/Sidebar'
import { useState } from 'react';
import "./Setting.css"

export default function Backlog() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }

  return (
    <div className="setting-component">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    <div className="setting-area">
     <h1 className='heading'>Hello I am Setting Page</h1>
   </div>
   
 </div>
  )
}
