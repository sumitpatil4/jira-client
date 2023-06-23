import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateIssueDropdown from './CreateIssueDropdown'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default function CreatIssue() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let issueTypes = ["Task", "Bug", "Epic"];
    let Status = ["TO DO", "IN PROGRESS", "DONE"];
    let Assignees = ["Unassigned", "Assign To Me", "User1", "User2", "User3"]
    let Labels = ["Label1", "Label2"]
    let Sprints = ["Sprint1", "Sprint2", "Sprint3"]
    let LinkedIssues = ["blocks", "is blocked by", "clones", "is clone by", "duplicates", "is duplicated by", "relates to"]
    let selectIssue = ["issue1", "issue2", "issue3"]
    return (
        <>
            {/* <div className='createIssueWrapper'>
                <div className='child'>
                    <div>
                        <h1>Create Issue</h1>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Project"} />
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Issue type"} dropdownoptions={issueTypes} />
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Status"} dropdownoptions={Status} />
                    <br /><label className='label'>Summary</label><br />
                    <input id="inputbox" style={{ border: "10px", borderColor: "black", background: "gray" }} />
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Assignee"} dropdownoptions={Assignees} /><br />
                    <CreateIssueDropdown name={"Labels"} dropdownoptions={Labels} /><br />
                    <CreateIssueDropdown name={"Sprint"} dropdownoptions={Sprints} /><br />
                    <label className='label'>Stroy Point Eastimate</label><br />
                    <input type="number" name="points" step="1" style={{ background: "gray" }} /><br />
                    <span>Measurement of complexity and/or size of a requirement.</span><br />
                    <label className='label'>Reporter</label><br />
                    <input id="inputbox" style={{ border: "10px", borderColor: "black", background: "gray" }} />
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Linked Issues"} dropdownoptions={LinkedIssues} /><br />
                    <CreateIssueDropdown name={"select Issue"} dropdownoptions={selectIssue} /><br />
                </div>
            </div> */}

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create issue</Modal.Title><br/>
                    <div className='child'>
                        <CreateIssueDropdown name={"Project"} /><br/>
                    </div>
                    <div className='child'>
                        <CreateIssueDropdown name={"Issue type"} dropdownoptions={issueTypes} /><br/>
                    </div>
                </Modal.Header>

                <Modal.Body scrollable={true}>

                    <div className='child'>
                        <CreateIssueDropdown name={"Status"} dropdownoptions={Status} />
                        <br /><label className='label'>Summary</label><br />
                        <input id="inputbox" style={{ border: "10px", borderColor: "black", background: "gray" }} />
                    </div>
                    <div className='description'>
                        <span>Description</span>
                        <div className='descriptionMainContainer'>
                            <div className='descriptionEffectContainer'></div>
                            <div className='descriptionInputContainer'>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>

                    <div className='AssigneeMainContainer'>
                        <div>
                            <CreateIssueDropdown name={"Assignee"} dropdownoptions={Assignees} />
                        </div>
                        <span>Assign to me</span><br />
                    </div>
                    <div className='labelsMainContainer'>
                        <CreateIssueDropdown name={"Labels"} dropdownoptions={Labels} /><br />
                    </div>
                    <div className='sprintMainContainer'>
                        <CreateIssueDropdown name={"Sprint"} dropdownoptions={Sprints} />
                        <span>Jira Software sprint field</span><br />
                    </div>
                    <div className='StoryPointContainer'>
                        <label className='label'>Stroy Point Eastimate</label><br />
                        <input type="number" name="points" step="1" style={{ background: "gray" }} /><br />
                        <span>Measurement of complexity and/or size of a requirement.</span><br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
