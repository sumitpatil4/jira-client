import React from 'react'
import { useState } from 'react';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import TaskIcon from '@mui/icons-material/Task';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BugReportIcon from '@mui/icons-material/BugReport';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import { Box, InputAdornment, createTheme } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
let projects = ["ProjectOne", "ProjectTwo"];
let issueTypes = ["Story", "Task", "Bug", "Epic"];
let Status = ["To Do", "IN PROGRESS", "DONE"];
let Assignees = ["Automatic", "Unassigned", "User1", "User2", "User3"];
let Labels = ["LabelOne", "LabelTwo"];
let Sprints = ["Sprint1", "Sprint2", "Sprint3"];
const useStyles = makeStyles({
    option: {
        fontSize: '13px',
        "&:hover": {
            borderLeftStyle: 'solid',
            borderLeftColor: "#0052CC"
        }
    }
});
const CustomDescriptionStyle = createTheme({
    typography: {
        // fontSize:30
    }
});
const DescriptionToolBarFeatures = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image"],
        ["clean"],
    ],
};
export default function CreatIssue() {
    const styles = useStyles();
    const [show, setShow] = useState(false);
    const handleCreateIssueClose = () => setShow(false);
    const handleCreateIssueShow = () => setShow(true);
    const [projectValue, setProjectValue] = useState(projects[0]);
    const [projectInputValue, setProjectInputValue] = useState('');
    const [issueTypeValue, setIssueTypeValue] = useState(issueTypes[0]);
    const [issueTypeInputValue, setIssueTypeInputValue] = useState('');
    const [statusValue, setStatusValue] = useState(Status[0]);
    const [statusInputValue, setStatusInputValue] = useState('');
    const [assigneeValue, setAssigneeValue] = useState(Assignees[0]);
    const [assigneeInputValue, setAssigneeInputValue] = useState('');
    const [labelValue, setLabelValue] = useState(Labels[0]);
    const [openSelectDatePicker, setOpenSelectDatePicker] = useState(false);
    const [openDueDatePicker, setOpenDueDatePicker] = useState(false);
    const [labelInputValue, setLabelInputValue] = useState('');
    const [sprintValue, setSprintValue] = useState(Sprints[0]);
    const [sprintInputValue, setSprintInputValue] = useState('');
    const [descriptionContent, setDescriptionContent] = useState("");
    console.log("html code : " + descriptionContent);
    // let LinkedIssues = ["blocks", "is blocked by", "clones", "is clone by", "duplicates", "is duplicated by", "relates to"]
    // let selectIssue = ["issue1", "issue2", "issue3"]
    return (
        <>
            {/* on click create button this modal will be visible */}

            <Button variant="primary" onClick={handleCreateIssueShow}> 
                CREATE
            </Button>

            <Modal show={show} onHide={handleCreateIssueClose} scrollable={true} dialogClassName='CreateIssueModalWidth'>
                <Modal.Header closeButton>
                    <Modal.Title > Create issue</Modal.Title>
                </Modal.Header>
                <Modal.Body scrollable={true}>
                    <div className='ProjectDropdownContainer'>
                        <span className='getRedAsterik labelHeading'>Project</span>
                        <Autocomplete
                            selectOnFocus={false}
                            disableClearable
                            value={projectValue}
                            onChange={(event, newValue) => {
                                setProjectValue(newValue);
                            }}
                            inputValue={projectInputValue}
                            onInputChange={(event, newInputValue) => {
                                setProjectInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={projects}
                            classes={{
                                option: styles.option
                            }}
                            sx={{ width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { cursor: 'pointer' } }}
                            renderInput={(params) => <TextField {...params} InputProps={{ ...params.InputProps, style: { fontSize: 13 } }} size="small" />}
                        />
                    </div>
                    <div className='IssueTypeContainer'>
                        <span className='getRedAsterik labelHeading topMargin'>Issue type</span>
                        <Autocomplete
                            selectOnFocus={false}
                            disableClearable
                            value={issueTypeValue}
                            onChange={(event, newValue) => {
                                setIssueTypeValue(newValue);
                            }}
                            inputValue={issueTypeInputValue}
                            onInputChange={(event, newInputValue) => {
                                setIssueTypeInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={issueTypes}
                            renderOption={(props, option) => (
                                <Box component='li' {...props}>
                                    {
                                        (option === 'Task') ? (<AddTaskIcon color='info' fontSize='small' />)
                                            : (option === 'Story') ? (<AutoStoriesIcon color='success' fontSize='small' />)
                                                : (option === 'Bug') ? (<BugReportIcon color='error' fontSize='small' />)
                                                    : (<TipsAndUpdatesSharpIcon color='warning' fontSize='small' />)
                                    }
                                    &nbsp; &nbsp; {option}
                                </Box>
                            )}
                            classes={{
                                option: styles.option
                            }}
                            sx={{ width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { cursor: 'pointer' } }}
                            renderInput={(params) => <TextField {...params}
                                InputProps={{
                                    ...params.InputProps, style: { fontSize: 13 }, startAdornment: (
                                        <InputAdornment position='start' >
                                            {
                                                (issueTypeValue === 'Task') ? (<AddTaskIcon color='info' fontSize='small' />)
                                                    : (issueTypeValue === 'Story') ? (<AutoStoriesIcon color='success' fontSize='small' />)
                                                        : (issueTypeValue === 'Bug') ? (<BugReportIcon color='error' fontSize='small' />)
                                                            : (<TipsAndUpdatesSharpIcon color='warning' fontSize='small' />)
                                            }

                                        </InputAdornment>
                                    )
                                }} size="small" />}
                        />
                    </div>
                    <hr className='fiveDotRule' />
                    <div className='statusDropdownContainer'>
                        <span className='labelHeading'>Status</span>
                        <Autocomplete
                            selectOnFocus={false}
                            componentsProps={{ paper: { style: { width: '150px' } } }}
                            disableClearable
                            value={statusValue}
                            onChange={(event, newValue) => {
                                setStatusValue(newValue);
                            }}
                            inputValue={statusInputValue}
                            onInputChange={(event, newInputValue) => {
                                setStatusInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={Status}
                            classes={{
                                option: styles.option
                            }}
                            InputProps={{ style: { fontSize: 13 } }}
                            style={{ backgroundColor: statusValue === 'To Do' ? '#F4F5F7' : statusValue === 'DONE' ? '#00875A' : '#0052CC' }}
                            sx={{
                                width: statusValue === 'IN PROGRESS' ? '24%' : '16%', borderRadius: '3px', fontSize: '10px',
                                input: { cursor: 'pointer', color: statusValue === 'To Do' ? 'black' : 'White', fontWeight: '600' }
                            }}
                            renderInput={(params) => <TextField {...params} InputProps={{ ...params.InputProps, style: { fontSize: 13 } }} size="small" />}
                        />
                        <span className='verySmallText'>This is the issue's initial status upon creation</span>
                    </div>
                    <div className='SummaryContainer'>
                        <span className='getRedAsterik labelHeading topMargin'>Summary</span>
                        <TextField
                            required='true'
                            id="outlined-multiline-flexible"
                            multiline
                            fullWidth
                            InputProps={{ style: { fontSize: 14 } }}
                            size='small'
                            sx={{ backgroundColor: '#F4F5F7', borderRadius: '3px' }}
                        />
                    </div>
                    <div className='descriptionContainer'>
                        <span className='labelHeading topMargin'>Description</span>
                        <div className='descriptionFeaturesContainer'>
                            <ReactQuill
                                modules={DescriptionToolBarFeatures}
                                theme="snow"
                                onChange={setDescriptionContent}
                                placeholder='Enter you description'
                                value={descriptionContent}
                                className='descriptionInputContainer'
                            />
                        </div>
                    </div>
                    <div className='AssigneeMainContainer'>
                        <span className='labelHeading topMargin'>Assignee</span>
                        <Autocomplete
                            selectOnFocus={false}
                            forcePopupIcon={false}
                            disableClearable
                            value={assigneeValue}
                            onChange={(event, newValue) => {
                                setAssigneeValue(newValue);
                            }}
                            inputValue={assigneeInputValue}
                            onInputChange={(event, newInputValue) => {
                                setAssigneeInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={Assignees}
                            classes={{
                                option: styles.option
                            }}
                            sx={{
                                width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { cursor: 'pointer' }
                            }}
                            renderInput={(params) => <TextField {...params}
                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                size='small'
                                sx={{
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#0052CC"
                                    }
                                }}
                            />}
                        />
                        <span className='normalFont'>Assign to me</span>
                    </div>
                    <div className='labelsContainer'>
                        <span className='labelHeading topMargin'>Labels</span>
                        <Autocomplete
                            selectOnFocus={false}
                            disableClearable
                            value={labelValue}
                            placeholder='Select label'
                            onChange={(event, newValue) => {
                                setLabelValue(newValue);
                            }}
                            inputValue={labelInputValue}
                            onInputChange={(event, newInputValue) => {
                                setLabelInputValue(newInputValue);
                            }}
                            id="controllable-states-demo"
                            options={Labels}
                            classes={{
                                option: styles.option
                            }}
                            sx={{
                                width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { cursor: 'pointer' }
                            }}
                            renderInput={(params) => <TextField {...params}
                                InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                size="small" />}
                        />
                    </div>
                    {
                        issueTypeValue !== 'Epic' ?
                            <>
                                <div className='sprintMainContainer'>
                                    <span className='labelHeading topMargin'>Sprint</span>
                                    <Autocomplete
                                        selectOnFocus={false}
                                        disableClearable
                                        value={sprintValue}
                                        placeholder='Select label'
                                        onChange={(event, newValue) => {
                                            setSprintValue(newValue);
                                        }}
                                        inputValue={sprintInputValue}
                                        onInputChange={(event, newInputValue) => {
                                            setSprintInputValue(newInputValue);
                                        }}
                                        id="controllable-states-demo"
                                        options={Sprints}
                                        classes={{
                                            option: styles.option
                                        }}
                                        sx={{
                                            width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { cursor: 'pointer' }
                                        }}
                                        renderInput={(params) => <TextField {...params}
                                            InputProps={{ ...params.InputProps, style: { fontSize: 13 } }}
                                            size="small" />}
                                    />
                                    <span className='smallText'>Jira Software sprint field</span>
                                </div>
                                <div className='StoryPointContainer'>
                                    <span className='labelHeading topMargin'>Story Point Eastimate</span>
                                    <TextField
                                        type="number"
                                        id="outlined-basic"
                                        variant="outlined"
                                        size='small'
                                        sx={{
                                            width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { fontSize: 14 }
                                        }}
                                    />
                                    <span className='smallText'>Measurement of complexity and/or size of a requirement.</span>
                                </div>
                            </>
                            :
                            <>
                                <div className='StartDateForEpic'>
                                    <span className='labelHeading topMargin'>Start date</span>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            open={openSelectDatePicker}
                                            onClose={() => setOpenSelectDatePicker(false)}
                                            views={['year', 'month', 'day']}
                                            sx={{ width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { fontSize: 13, cursor: 'pointer' } }}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    onClick: () => setOpenSelectDatePicker(true),
                                                    placeholder: 'Select date'
                                                }
                                            }}
                                        />
                                    </LocalizationProvider>
                                    <span className='smallText'>Allows the planned start date for a piece of work to be set.</span>
                                </div>
                                <div className='dueDateForEpic'>
                                    <span className='labelHeading topMargin'>Due date</span>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            open={openDueDatePicker}
                                            onClose={() => setOpenDueDatePicker(false)}
                                            views={['year', 'month', 'day']}
                                            sx={{ width: '55%', backgroundColor: '#F4F5F7', borderRadius: '3px', input: { fontSize: 13, cursor: 'pointer' } }}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    onClick: () => setOpenDueDatePicker(true),
                                                    placeholder: 'Select date'
                                                }
                                            }}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className='CreateIssueCancelButton' onClick={handleCreateIssueClose}> Cancel </div>
                    <div className='CreateIssueCreateButton' onClick={handleCreateIssueClose}>Create</div>
                </Modal.Footer>
            </Modal>
        </>

    )
}
