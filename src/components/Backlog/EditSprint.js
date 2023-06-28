import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./StartSprint.css";
import { Button, Stack } from "@mui/material";
export default function EditSprint() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [currentDate, setCurrentDate] = useState();
  const handleShow = () => setShow(true);
  const [noofissues, setnoofissues] = useState(1);
  var dateValue = new Date();
  const todayDate = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    if (
      today.getDate() % 10 == today.getDate() &&
      today.getMonth() + (1 % 10) == today.getMonth() + 1
    ) {
      date =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-0" +
        today.getDate();
      console.log("Date" + date);
    } else if (today.getDate() % 10 == today.getDate()) {
      date =
        today.getFullYear() + (today.getMonth() + 1) + "-0" + today.getDate();
      console.log("Date" + date);
    } else if (today.getMonth() + (1 % 10) == today.getMonth() + 1) {
      date =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      console.log("Date" + date);
    }
    setCurrentDate(date);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    // Add your button click logic here
  };
  return (
    <>
      <button
        className="edit-sprint-button"
        onClick={(e) => {
          handleShow();
          todayDate();
          handleButtonClick(e);
        }}
      >
        Update Sprint
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onClick={(e) => {
          handleButtonClick(e);
        }}
      >
        <Modal.Header>
          <Modal.Title>Update Sprint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Sprint Name</Form.Label>
            <br></br>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Enter your text here..."
            />
            <br></br>
            <Form.Label>Duration</Form.Label>
            <Form.Select aria-label="Default select example" name="result">
              <option>Select from below</option>
              <option value="oneWeek">1 week</option>
              <option value="twoWeek">2 weeks</option>
              <option value="threeWeek">3 weeks</option>
              <option value="fourWeek">4 weeks</option>
            </Form.Select>
            <br></br>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              min={currentDate}
              value={dateValue}
              placeholder=""
              name="startdate"
            />
            <br></br>
            <Form.Label>Sprint goal</Form.Label>
            <br></br>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your text here..."
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Stack spacing={2} direction={"row"} sx={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              type="submit"
              style={{ height: "35px", whiteSpace: "nowrap" }}
              onClick={(e) => {
                handleClose();
                handleButtonClick(e);
              }}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              type="submit"
              style={{ height: "35px", whiteSpace: "nowrap" }}
              onClick={(e) => {
                handleClose();
                handleButtonClick(e);
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
}
