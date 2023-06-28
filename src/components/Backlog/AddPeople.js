import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import axios from "axios";

export default function AddPeople() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [teams, setTeams] = useState([]);

  const [currentDate, setCurrentDate] = useState();
  var dateValue = new Date();

  const [addPeople, setAddPeople] = useState({
    teamId: team_id,
    email: "",
    roleId: "",
    endDate: "",
    capacity: null,
  });

  const [team_id, setTeam_Id] = useState(null);

  const todayDate = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    if (
      today.getDate() % 10 === today.getDate() &&
      today.getMonth() + (1 % 10) === today.getMonth() + 1
    ) {
      date =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-0" +
        today.getDate();
    } else if (today.getDate() % 10 === today.getDate()) {
      date =
        today.getFullYear() + (today.getMonth() + 1) + "-0" + today.getDate();
    } else if (today.getMonth() + (1 % 10) === today.getMonth() + 1) {
      date =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    }
    setCurrentDate(date);
  };

  const handleGetTeamsAPI = async (e) => {
    await axios.get("http://localhost:4545/api/teams").then((response) => {
      console.log(response.data);
      setTeams(response.data);
    });
  };

  const handleAddUserToTeamAPI = async (e, teamId) => {
    await axios.post(`http://localhost:4545/api/assignToProject/team/${teamId}`);
  }

  return (
    <>
      <button
        className="user-icon-button"
        onClick={(e) => {
          handleShow();
          handleGetTeamsAPI();
          todayDate();
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
            <Form.Select style={{ marginBottom: "10px" }}>
              <option>Please select a team</option>
              {teams.map((value) => (
                <option key={value.id}>{value.name}</option>
              ))}
            </Form.Select>
            <Form.Label>Names or Emails</Form.Label>
            <br></br>
            <input
              style={{ marginBottom: "10px" }}
              className="search-input"
              placeholder="eg:Mridul; mridul@accolitedigital.com"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>

            <Form.Label>Role</Form.Label>
            <Form.Select style={{ marginBottom: "10px" }}>
              <option>Please select role</option>
              <option value={1} key="jiraUser">
                Jira User
              </option>
              <option value={2} key="jiraAdmin">
                Jira Admin
              </option>
              <option value={3} key="jiraProjectManager">
                Jira Project Manager
              </option>
              <option value={4} key="jiraReadOnly">
                Jira Read Only
              </option>
            </Form.Select>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              min={currentDate}
              placeholder=""
              name="enddate"
            />

            <Form.Label style={{ marginTop: "10px" }}>Working Hours</Form.Label>
            <input
              style={{ marginBottom: "10px" }}
              className="search-input"
              placeholder="Please enter working hours"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Stack spacing={2} direction={"row"} sx={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              type="submit"
              style={{ height: "35px", whiteSpace: "nowrap" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              type="submit"
              style={{ height: "35px", whiteSpace: "nowrap" }}
              onClick={() => {
                handleClose();
                handleAddUserToTeamAPI();
              }}
            >
              Add
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
}
