import React from 'react'
import BacklogUpperChild from './BacklogUpperChild'
import BacklogLowerChild from './BacklogLowerChild'

function Backlog() {
  return (
    <>
      <div>Hello Guys, Here Navbar will come</div>
      <BacklogUpperChild projectName={"Accolite JIRA"}/>
      <BacklogLowerChild/>
    </>
  )
}

export default Backlog