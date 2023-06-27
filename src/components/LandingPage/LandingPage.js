import React from 'react'
import Card from 'react-bootstrap/Card';
import toDoIcon from "../../Images/task.png"
import './LandingPage.css'
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
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
          <NavLink to="/backlog" className="add-project-nav">
            <Card.Title className="ProjectName-addproject">
              New Project
            </Card.Title>

            <Card.ImgOverlay className="add-newproject">
              {/* <img src={add} alt="add" /> */}
              <h1>+</h1>
            </Card.ImgOverlay>
          </NavLink>
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
  return (
    <div className="LandingPage">
      <div className="LandingMainHeading">
        <h4>Your Work</h4>
      </div>
      <div className="RecentProjectSection">
        <div className="LandingSubHeading">
          {/* total projects that the user is enrolled in */}
          <span className="recentProjectHeading">Recent Projects</span>
          <span className="viewProjects">View all projects</span>
        </div>
        {/* user Cards run a loop */}
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
