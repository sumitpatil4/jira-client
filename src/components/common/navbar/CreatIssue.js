import React from 'react'
import CreateIssueDropdown from './CreateIssueDropdown'

export default function CreatIssue() {
    let issueTypes = ["Task", "Bug", "Epic"];
    let Status = ["TO DO", "IN PROGRESS", "DONE"];
    let Assignees = ["Unassigned", "Assign To Me", "User1", "User2", "User3"]
    let Labels = ["Label1", "Label2"]
    let Sprints = ["Sprint1", "Sprint2", "Sprint3"]
    let LinkedIssues = ["blocks", "is blocked by", "clones", "is clone by", "duplicates", "is duplicated by", "relates to"]
    let selectIssue = ["issue1", "issue2", "issue3"]
    return (
        <>
            <div className='createIssueWrapper'>
                <div className='child'>
                    <div>
                        <h1>Create Issue</h1>
                    </div>
                    <div>
                        <button>X</button>
                    </div>
                </div>

                <div className='child'>
                    <CreateIssueDropdown name={"Project"} />
                </div>
                <div className='child'>
                    <CreateIssueDropdown name={"Issue type"} dropdownoptions={issueTypes} />
                </div>
                {/* <hr/> */}
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
            </div>
        </>

    )
}
