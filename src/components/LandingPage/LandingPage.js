import React from 'react'
import Card from 'react-bootstrap/Card';
import './LandingPage.css'
export default function LandingPage() {

    const assignedProjects = [
        {
            projectName: 'Project1',
            issueDescription: 'new Issue',
            projectNickName: 'DEM1'
        },
        {
            projectName: 'Project2',
            issueDescription: 'second Issue',
            projectNickName: 'DEM2'
        }
    ]

    function getCard(userId) {
        return (
            <Card border="secondary" style={{ width: '17rem', height: '12.5rem' }}>
                <div className='cardContainer'>
                    <Card.Body>
                        <Card.Title className='ProjectName'>NameHere</Card.Title>
                        <div className='designationOfTheUser'>
                            designation here
                        </div>
                        <Card.Text className="text-muted cardTextStyle">
                            QUICK LINKS
                        </Card.Text>
                        <Card.Text className="cardTextStyle CardFont">
                            My open issues
                        </Card.Text>
                        <Card.Text className="cardTextStyle CardFont">
                            Done issues
                            <span style={{ marginLeft: '50%' }}>
                                {getRectangularChip(0)}
                            </span>
                        </Card.Text>
                        <hr style={{ height: '1px', color: 'lightgray' }} />
                        <Card.Text className="text-muted cardTextStyle">
                            1 board
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        );
    }

    function getAssignedchip(value) {
        return (
            <div className='circularChip'>
                {value}
            </div>
        )
    }

    function getRectangularChip(value) {
        return (
            <div className='rectangularChip'>
                <span>
                    {value}
                </span>
            </div>
        )
    }
    return (
        <div className='LandingPage'>
            <div className='LandingMainHeading'>
                <h3>Your Work</h3>
            </div>
            <div className='RecentProjectSection'>
                <div className='LandingSubHeading'>
                    {/* total projects that the user is enrolled in */}
                    <span className='recentProjectHeading'>Recent Projects</span>
                    <span className='viewProjects'>View all projects</span>
                </div>
                {/* user Cards run a loop */}
                <div className='RecentProjectsCards'>
                    {getCard(0)}
                </div>
            </div>
            <div className='LandingAssignedProject'>
                <div className='AssignedProjectsHeading'>
                    {/* total project assigned to the user */}
                    <h6>Assigned to me {getAssignedchip(0)}</h6>
                </div>
                <hr style={{
                    height: '8px', color: 'gray'
                }} />
                <div className='ToDoSection'>
                    <p className='ToDoHeading'> TO DO </p>
                    <table style={{marginLeft: '0.8%'}}>
                        <tbody>
                            {
                                assignedProjects.map((index) => {

                                    return (
                                        <tr className='assignedProjectsTableRow'>
                                            <td >
                                                <td>
                                                    <i className="fa-regular fa-square-check fa-xl"></i>
                                                </td>
                                                <td >
                                                    <div className='assignedProjectsTableContent'>
                                                        <div className='ProjectIssueDescContainer'>
                                                            <span>{index.issueDescription}</span>
                                                        </div>
                                                        <div className='TableContentSubContainer'>
                                                            <div className='ProjectNickNameContainer'>
                                                                {index.projectNickName}
                                                                &nbsp; <span >&#183;</span> &nbsp;
                                                            </div>
                                                            <div className='ProjectNameContainer'>
                                                                {index.projectName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='ToDoWordColumn'>To Do</span>
                                                </td>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
