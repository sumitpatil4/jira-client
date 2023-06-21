import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

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
          <Form>
            <Form.Label>Names or Emails</Form.Label><br></br>
            <input className="search-input" placeholder='eg:Mridul; mridul@accolitedigital.com' />
            <i className="fa-solid fa-magnifying-glass search-icon"></i><br></br><br></br>

            <Form.Label>Role</Form.Label>
            <Form.Select>
              <option>Please select role</option>
              <option>Administrator</option>
              <option>Developers</option>
              <option>Users</option>
            </Form.Select>

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
            Add
          </button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}
