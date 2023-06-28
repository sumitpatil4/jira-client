import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { useState } from 'react';
import StartSprint from './StartSprint';
import './BacklogLowerChild.css';
import DragAndDropArea from './DragAndDropArea';
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditSprint from './EditSprint';
import CreateIssue from './CreateIssue';
import SprintSection from './SprintSection';
// import Sidebar from '../common/Sidebar';
import BacklogSection from './BacklogSection';

export default function BacklogLowerChild(props) {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    // Add your button click logic here
  };



  return (


    <>
      <div><SprintSection isOpen={props.isOpen} /></div>
      <div><BacklogSection isOpen={props.isOpen} /></div>
    </>


  )
}
