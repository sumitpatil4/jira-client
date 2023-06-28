import React from 'react'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import './StartSprint.css';
export default function EditSprint() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false)
    };
    const [currentDate,setCurrentDate]=useState();
    const handleShow = () => setShow(true); 
    const [noofissues, setnoofissues]=useState(1);
    var dateValue = new Date();
    const todayDate=()=>{
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (today.getDate() % 10 == today.getDate() && today.getMonth() + 1 % 10 == today.getMonth() + 1) {
          date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
          console.log("Date" + date);
        }
        else if (today.getDate() % 10 == today.getDate()) {
          date = today.getFullYear() + (today.getMonth() + 1) + '-0' + today.getDate();
          console.log("Date" + date);
        }
        else if (today.getMonth() + 1 % 10 == today.getMonth() + 1) {
          date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
          console.log("Date" + date);
        }
        setCurrentDate(date);
      }
      const handleButtonClick = (event) => {
        event.stopPropagation();
        // Add your button click logic here
      };
  return (
      <>
      <button className="edit-sprint-button" onClick={(e) => {handleShow();  todayDate(); handleButtonClick(e);}}> Update Sprint
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Update Sprint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>Sprint Name</Form.Label><br></br>
          <input type = "text"></input><br></br>
          <Form.Label>Duration</Form.Label>
          <Form.Select aria-label="Default select example" name="result" >
                                <option>Select from below</option>
                                <option value="Rejected" >1 week</option>
                                <option value="Accepted" >2 weeks</option>
                                <option value="Awaited" >3 weeks</option>
                                <option value="Awaited" >4 weeks</option>
                                <option value="Awaited" >custom</option>
                                
          </Form.Select>
          <br></br>
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" min={currentDate} value = {dateValue} placeholder="" name="startdate" />
            <br></br>
            <Form.Label>Sprint goal</Form.Label><br></br>
            <Form.Control
            as="textarea"
            rows={4}
           placeholder="Enter your text here..."/>
           </Form>

        </Modal.Body>
        <Modal.Footer>
           <button className='button3' form="update" onClick={(e) => { handleClose(); handleButtonClick(e);}}
            >Update</button>
            <button className='button3' onClick={(e)=>{handleClose(); handleButtonClick(e);}}>Cancel</button> &nbsp;
        </Modal.Footer>
      </Modal>
    </>
  )
}
