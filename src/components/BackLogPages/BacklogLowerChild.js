import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import StartSprint from './StartSprint';
import './BacklogLowerChild.css';

export default function BacklogLowerChild() {
   
  return (
    <div>
            <div className='backlogAccordian'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Backlog </Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
            </div>
            <div className='startsprint'>
            <StartSprint />
            </div>
        
    </div>
  )
}
