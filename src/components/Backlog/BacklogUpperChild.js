import React from 'react';
import './BacklogUpperChild.css';
import AddPeople from './AddPeople';
function BacklogUpperChild(props) {
  return (
    <>
      <div className={(props.isOpen ? 'main-container-sidebar-open' : 'main-container-sidebar-not-open')}>
        <div className='first-container'>
         <p>Projects / {props.projectName} </p>
         <h4 className='backlog-subheading'>Backlog </h4>
        </div>
        <div className='second-container'>
         <input placeholder='Search backlog' />
         <i className="fa-solid fa-magnifying-glass search-icon"></i>
         <AddPeople />
        </div>
        <div className='third-container'>
        </div>
      </div>
    </>
  )
}
export default BacklogUpperChild