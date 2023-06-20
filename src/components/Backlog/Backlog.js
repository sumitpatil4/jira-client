import React from 'react'
import BacklogUpperChild from './BacklogUpperChild'
import BacklogLowerChild from './BacklogLowerChild'

function Backlog() {
  return (
    <>
    <p>Hello Welcome to my Backlog Section, Here Navbar will come</p>
    <BacklogUpperChild projectName = {"Accolite JIRA"}/>
    <BacklogLowerChild />
    </>
  )
}

export default Backlog