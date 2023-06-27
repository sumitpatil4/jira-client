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
import IssueList from './IssueList';

export default function SprintSection(props) {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    // Add your button click logic here
  };
  return (
    <>
    <div className={(props.isOpen ? 'main-container-with-sidebar-open' : 'main-container-without-sidebar-open')}>
      <DndProvider backend={HTML5Backend}>
        <div className='sprintAccordian'>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">Sprint 
                  <span><StartSprint /></span>
                  <span><EditSprint /></span>
                  </Accordion.Header>
              <Accordion.Body>
                <DragAndDropArea />
                <IssueList/>
                <CreateIssue/>
              </Accordion.Body>
             
            </Accordion.Item>
          </Accordion>
         
        </div>
      </DndProvider>
    </div>
    </>
  )
}
