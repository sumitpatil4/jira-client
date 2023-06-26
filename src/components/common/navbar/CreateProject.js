import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button,Stack } from "@mui/material";
import './Navbar.css'
import { useContext } from "react";
import AuthContext from "../../ContextApi/AuthContext";
export default function CreateProject() {
  const [show, setShow] = useState(false);
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("")
  const[startDate,setStartDate]=useState(null);
  const[endDate,setEndDate]=useState(null);
  const { usermail } = useContext(AuthContext);



  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const createProject=(e)=>{
    e.preventDefault();
    console.log(usermail)
  }
  return (
    <>
    <Button variant="contained" type="submit" style={{height:'35px'}} onClick={(e) => {
          handleShow();
        }}>
               Create
              </Button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Create A New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="user-assign" onSubmit={()=>createProject()}>
          <Form.Label>Project Title</Form.Label>
            <input style={{marginBottom:'10px'}} className="search-input" placeholder='' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <Form.Label>Project Description</Form.Label>
            <textarea style={{marginBottom:'10px'}} className="search-input" placeholder='' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className="add-project-date">
              <div>
            <Form.Label>Start Date</Form.Label>
            <input type="date" style={{marginBottom:'10px'}} className="search-input" placeholder='' value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
            </div>
            <div>
            <Form.Label>End Date</Form.Label>
            <input type="date" style={{marginBottom:'10px'}} className="search-input" placeholder='' value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
            </div>
            </div>
            <Stack spacing={2} direction={"row"} sx={{marginTop:'10px'}}>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" type="submit" style={{height:'35px',whiteSpace: 'nowrap'}} >Add</Button>
                </Stack>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
