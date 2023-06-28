import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button,Stack } from "@mui/material";
import axios from "axios";

import { BsMicrosoftTeams } from 'react-icons/bs';
export default function AddTeam(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [teamName,setTeamName] = useState({
    tname:"",
    projectId:props.projectId
  });

  const handleChangeValue = (e) => {
    setTeamName({ ...teamName, [e.target.name]: e.target.value });
  };
  const handleCreateTeamAPI = async (e) =>{
      await axios.post('http://localhost:4545/api/teams', teamName);
  }

  console.log("Team Json "+JSON.stringify(teamName));
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
            <input style={{marginBottom:'10px'}} name="tname" className="search-input" placeholder='' onChange={handleChangeValue.bind(this)} />
          </Form>
        
        </Modal.Body>
        <Modal.Footer>
        <Stack spacing={2} direction={"row"} sx={{marginTop:'10px'}}>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={(e) => { handleCreateTeamAPI(e);
              handleClose();
            }}>Add</Button>

                </Stack>

        </Modal.Footer>
      </Modal>
    </>
  );
}
