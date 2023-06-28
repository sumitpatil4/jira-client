import React from 'react'
import {useState} from 'react'
import BacklogUpperChild from './BacklogUpperChild'
import BacklogLowerChild from './BacklogLowerChild'
import Sidebar from '../common/sidebar/Sidebar';

function Backlog() {
  
  const [sidebarOpen, setSideBarOpen] = useState(true);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
  }
  
  return (
    <>
      {
       ( sidebarOpen === "true") ?
      (<>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <BacklogUpperChild projectName={"Accolite JIRA"} isOpen = {sidebarOpen} projectId = {"1"}/>
      <BacklogLowerChild isOpen = {sidebarOpen}/>
      </>
      ) : 
       (
        <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <BacklogUpperChild projectName={"Accolite JIRA"} isOpen = {sidebarOpen} projectId = {"1"}/>
      <BacklogLowerChild isOpen = {sidebarOpen}/>
      </>
       )
      }
    </>
  )
}

export default Backlog