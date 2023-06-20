import React from 'react';
import './BacklogUpperChild.css';


function BacklogUpperChild(props) {
  return (
    <>
      <div className='main-container'>
        <div className='first-container'> 
         <p>Projects / {props.projectName} </p>
         <h4 className='backlog-subheading'>Backlog </h4>
        </div>
        <div className='second-container'>
         <input placeholder='Search backlog' />
        </div>
        <div className='third-container'>

        </div>
      </div>
    </>
  )
}

export default BacklogUpperChild