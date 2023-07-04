import React from "react";
import Card from "react-bootstrap/Card";
import add from "../../Images/add.png";
import "./LandingPage.css";
import { Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
import { MdOutlinePending } from 'react-icons/md';
import toDoIcon from "../../Images/task.png"
import { Button } from "bootstrap";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {postNewProject} from "../Services/ProjectService"
export default function LandingPage() {

  const [isOpenPopup, setisOpenPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleOpenPopup = () => {
    setisOpenPopup(!isOpenPopup);
  }

  const assignedProjects = [
    {
      projectName: "Project1",
      issueDescription: "new Issuenew Issuenew Issuenew Issuenew Issuenew Issue ",
      projectNickName: "DEM1",
    },
    {
      projectName: "Project2",
      issueDescription: "second Issue",
      projectNickName: "DEM2",
    },
  ];

  function createCard() {
    return (
      <Card className="add-project">
        <div className="cardContainer-addproject">
          {/* <NavLink to="/backlog" className="add-project-nav"> */}
          <div className="add-project-nav">
            <Card.Title className="ProjectName-addproject">
              New Project
            </Card.Title>

            <Card.ImgOverlay className="add-newproject">
              {/* <img src={add} alt="add" /> */}
              <button onClick={handleOpenPopup}><h2>+</h2></button>
            </Card.ImgOverlay>
          </div>
          {/* </NavLink> */}
        </div>
      </Card>
    );
  }




  function getCard(userId) {
    return (
      <Card className="Card-container">
        <div className="cardContainer">
          <Card.Body>
            <NavLink to="/backlog" className="nav-get-card">
              <Card.Title className="ProjectName">Accolite JIRA</Card.Title>
            </NavLink>
            <div className="designationOfTheUser">designation here</div>
            <Card.Text className="text-muted cardTextStyle">
              QUICK LINKS
            </Card.Text>
            <Card.Text className="cardTextStyle CardFont">
              My open issues
            </Card.Text>
            <Card.Text className="cardTextStyle CardFont">
              Done issues
              <span style={{ marginLeft: "10%", height: '5px' }}>{getRectangularChip(0)}</span>
            </Card.Text>
            <Card.Text className="text-muted cardTextStyle">1 board</Card.Text>
          </Card.Body>
        </div>
      </Card>
    );
  }

  function getAssignedchip(value) {
    return <div className="circularChip">{value}</div>;
  }

  function getRectangularChip(value) {
    return (
      <div className="rectangularChip">
        <span>{value}</span>
      </div>
    );
  }


  const object={
    "title":title,
    "owner":"b761c65d-402e-4124-87e3-a0ead8bcb5d9",
    "description":description,
    "endDate": endDate,
    "startDate":startDate
  }

  function handleAdd(){
    postNewProject(object)
    handleOpenPopup();
  }

  return (



    <div className="LandingPage">
      <div className="LandingMainHeading">
        <h4>Your Work</h4>
      </div>

      {isOpenPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="add-new-project">
              <div className="form-name">
                <h3>Your Project</h3>
              </div>
              <form >
                <label>Title of the project</label>
                <input
                  type="text"
                  place="Enter title of the project"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <input
                  type="text"
                  placeholder='Enter the description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="date-flex">

                  <label >
                    Start Date
                  </label>
                  <input 
                    onChange={(e) => {
                      setStartDate(e.target.value)
                    }}
                    placeholder="date placeholder"
                    type="date"
                  />

                  <label>
                    End Date
                  </label>
                  <input
                    onChange={(e) => {
                      setEndDate(e.target.value)
                    }}
                    placeholder="date placeholder"
                    type="date"
                  />
                </div>
                <div className="button">
                <NavLink className="add-project-nav"><button onClick={handleOpenPopup}>Cancel</button></NavLink> 
                  <NavLink to="/backlog" className="add-project-nav"><button onClick={handleAdd}>Add</button></NavLink>
                  
                </div>
              </form>
            </div>
          </div>
        </div>

      )}
      <div className="RecentProjectSection">
        <div className="LandingSubHeading">
          <span className="recentProjectHeading">Recent Projects</span>
          <span className="viewProjects">View all projects</span>
        </div>
        <div className="RecentProjectsCards">
          <div>{createCard(0)}</div>
          <div className="all-recent-project">
            <div>{getCard(0)}</div>
            <div>{getCard(0)}</div>
            <div>{getCard(0)}</div>
            <div>{getCard(0)}</div>
            <div>{getCard(0)}</div>{" "}
          </div>
        </div>
      </div>
      <div className="LandingAssignedProject">
        <div className="AssignedProjectsHeading">
          {/* total project assigned to the user */}
          <h6>Assigned to me {getAssignedchip(0)}</h6>
        </div>
        <div className="ToDoSection">
          <p className="ToDoHeading"> TO DO </p>
          <table className="assignedProjectsTable">
            <tbody>
              {assignedProjects.map((index) => {
                return (
                  <tr className="assignedProjectsTableRow" key={index.id}>
                    <td className="firstTd">
                      {/* <MdOutlinePending/> */}
                      <img src={toDoIcon} alt="todo-icon" />
                    </td>
                    <td className="centerTd">
                      <div className="assignedProjectsTableContent">
                        <div className="ProjectIssueDescContainer">
                          <span>{index.issueDescription}</span>
                        </div>
                        <div className="TableContentSubContainer">
                          <div className="ProjectNickNameContainer">
                            {index.projectNickName}
                            &nbsp;<span>&#183;</span>&nbsp;
                          </div>
                          <div className="ProjectNameContainer">
                            {index.projectName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="lastTd">
                      <span className="ToDoWordColumn">To Do</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
