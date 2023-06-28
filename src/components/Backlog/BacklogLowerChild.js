import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { useState } from 'react';
import StartSprint from './StartSprint';
import './BacklogLowerChild.css';
import DragAndDropArea from './DragAndDropArea';
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditSprint from './EditSprint';

export default function BacklogLowerChild(props) {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    // Add your button click logic here
  };
  return (
    <div className={(props.isOpen ? 'main-container-with-sidebar-open' : 'main-container-without-sidebar-open')}>
      <DndProvider backend={HTML5Backend}>
        <div className='backlogAccordian'>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordianheader">Backlog <button className="addDates" variant="primary" onClick={handleButtonClick}><i class="fa-solid fa-pencil"></i>Add Dates </button> </Accordion.Header>
              <Accordion.Body>
                <DragAndDropArea />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='startsprint'>
          <StartSprint />
        </div>
        <div className='startsprint'>
          <EditSprint />
        </div>
      </DndProvider>
    </div>
  )
}
