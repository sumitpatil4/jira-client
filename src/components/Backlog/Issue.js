import { Typography, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import BacklogMenu from './BacklogMenu'
import './Issue.css'
import CreateIssue from './CreateIssue'
import EditIcon from '@mui/icons-material/Edit';

const Issue = (props) => {

    const [issueTitle, setIssueTitle] = useState(props.title)
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setIssueTitle(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <>
            <div className='container'>
            <div className='leftSectionIssue'>
                <img class="sc-8u98g6-1 fvNefW" role="presentation" src="https://abhishekarora2206.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium" />
                {isEditing ? (
                    <input
                    type="text"
                    defaultValue={issueTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    />
                ) : (
                    <>
                        <Typography className='issue-title'>{issueTitle}</Typography>
                        <EditIcon onClick={handleClick}/>
                    </>
                )}
            </div>
            <div className='rightSectionIssue'>
                <div className='wrapper'>
                    <select class="issueStatus" name='status'>
                        <option value="todo">TO DO</option>
                        <option value="inProgress" className='StatusOptions'>IN PROGRESS</option>
                        <option value="done" className='StatusOptions'>DONE</option>
                    </select>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <g fill="currentColor" fillRule="evenodd">
                        <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </g>
                </svg>
                <div className='issueMenu'>
                    <BacklogMenu/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Issue
