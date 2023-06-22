import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function InvitePeople() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
    };
    const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={(e) => {
          handleShow();
        }} className="invite-people"
      >
      Invite People to JIRA &nbsp;<i className="fa-sharp fa-solid fa-circle-plus"></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Invite People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Names or Emails</Form.Label><br></br>
            <input className="search-input" placeholder='eg: Charu charu@accolitedigital.com' />
            <i className="fa-solid fa-magnifying-glass search-icon"></i><br></br><br></br>
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
           Invite
          </button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}
