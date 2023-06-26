import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Box, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import './CreateIssue.css'
import Issue from './Issue';

const CreateIssue = () => {

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = useState('TODO');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div className='create-Issue-Wrapper'>    
            <Button 
                className = 'create-Issue-Btn'
                sx = {{ border: 'none', paddingRight: '82%', width: '100%' }}
                variant="outlined" startIcon={<AddIcon />}
                onClick={handleOpen}>
                Create Issue
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" 
            >
                <Box 
                    sx={{ borderRadius: "2%" , width: "25%", height: "60%", backgroundColor: "white", position: "absolute", top: "20%", left: "35%"}}>
                    <TextField 
                        sx={{ position: "absolute", top: "20%", left: "18%"}}
                        id="outlined-basic" 
                        label="issue title" 
                        variant="outlined" />
                     <FormControl required sx={{ m: 1, minWidth: 120, width: "63%" , position: "absolute", top: "40%", left: "16%" }}>
                        <InputLabel id="demo-simple-select-required-label">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={status}
                            label="Status *"
                            onChange={handleChange}
                            >
                                <MenuItem value={"TODO"}>TODO</MenuItem>
                                <MenuItem value={"IN PROGRESS"}>IN PROGRESS</MenuItem>
                                <MenuItem value={"DONE"}>DONE</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div 
                        style={{ display: "flex", columnGap: "5%", position: "absolute", top: "65%", left: "18%" }}
                    >
                        <Button variant="contained"><Typography>Create Issue</Typography></Button>
                        <Button variant="contained" onClick={()=>handleClose()}>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default CreateIssue
