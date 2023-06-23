import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./CreateTeam.css";

export default function CreateTeam() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
    };
    const handleShow = () => setShow(true);
    const [tags, setTags] = useState([])
    function removeTag(index){
      setTags(tags.filter((el, i) => i !== index))
  }
    function handleKeyDown(e){
        // If user did not press enter key, return
        if(e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if(!value.trim()) return
        // Add the value to the tags array
        setTags([...tags, value])
        // Clear the input
        e.target.value = ''
    }
  return (
    <>
      <button
        onClick={(e) => {
          handleShow();
        }} className="create-team"
      >
      Create Team &nbsp; <i className="fa-sharp fa-solid fa-user-plus"></i>
      </button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Create Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Team Name</Form.Label><br></br>
            <div className="tags-input-container">
              <input className="tags-input" type = "text"></input><br></br>
            </div>
            <br/>
            <Form.Label>Invite People</Form.Label><br></br>
            <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input"/>
          </div>
          </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="start-button"
            form="update"
            onClick={() => {
              handleClose();
            }}
          >
           Create
          </button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}
