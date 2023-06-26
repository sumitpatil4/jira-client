import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button,Stack } from "@mui/material";
export default function AddPeople() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="user-icon-button"
        onClick={(e) => {
          handleShow();
        }}
      >
        <i className="fa-solid fa-user-plus user-icon"></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="user-assign">
          <Form.Label>Team</Form.Label>
            <Form.Select style={{marginBottom:'10px'}}>
              <option>Please select a team</option>
              <option>Team 1</option>
              <option>Team 2</option>
              <option>Team 3</option>
            </Form.Select>
            <Form.Label>Names or Emails</Form.Label><br></br>
            <input style={{marginBottom:'10px'}} className="search-input" placeholder='eg:Mridul; mridul@accolitedigital.com' />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>

            <Form.Label>Role</Form.Label>
            <Form.Select style={{marginBottom:'10px'}}>
              <option>Please select role</option>
              <option>Administrator</option>
              <option>Developers</option>
              <option>Users</option>
            </Form.Select>

          </Form>
        
        </Modal.Body>
        <Modal.Footer>
        <Stack spacing={2} direction={"row"} sx={{marginTop:'10px'}}>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={() => {
              handleClose();
            }}>Add</Button>

                </Stack>
          
         
       
        </Modal.Footer>
      </Modal>
    </>
  );
}
