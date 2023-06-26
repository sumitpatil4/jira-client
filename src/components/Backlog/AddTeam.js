import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button,Stack } from "@mui/material";

import { BsMicrosoftTeams } from 'react-icons/bs';
export default function AddTeam() {
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
        <BsMicrosoftTeams/>
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
          <Form className="user-assign">
          <Form.Label>Team Name</Form.Label><br></br>
            <input style={{marginBottom:'10px'}} className="search-input" placeholder='' />
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
