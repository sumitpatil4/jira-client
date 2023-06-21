import React from 'react'
import {useState}from 'react';
// import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import "./Board.css"

export default function Board() {
  
 const [sidebarOpen, setSideBarOpen] = useState(true);
 const handleViewSidebar = () => {
   setSideBarOpen(!sidebarOpen);
 }

  return (
    <div className="board-component">
       {/* <Navbar onClick={handleViewSidebar} /> */}
       <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
       <div className="board-area">
        <h1 className='heading'>Hello I am Board Page</h1>
      </div>
      
    </div>
  )
}
