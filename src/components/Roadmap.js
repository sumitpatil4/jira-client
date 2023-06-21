import React from 'react'
import {useState}from 'react';
// import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import "./Roadmap.css"

export default function Roadmap() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  }
  return (
    <div className="roadmap-component">
    {/* <Navbar onClick={handleViewSidebar} /> */}
    <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    <div className="roadmap-area">
     <h1 className='heading'>Hello I am Roadmap Page</h1>
   </div>
   
 </div>
  )
}
