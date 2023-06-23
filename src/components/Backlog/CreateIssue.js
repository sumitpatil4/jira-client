import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import './CreateIssue.css'
import Issue from './Issue';

const CreateIssue = () => {

    const [createIssue, setCreateIssue] = useState(false)    
    function handleCreateIssue() {
        setCreateIssue(true);
    }

    return (
        <div className='create-Issue-Wrapper'>
            { createIssue ? (
                <Issue edit='true'/>
            ) : 
            (
                <Button 
                    className = 'create-Issue-Btn'
                    sx = {{ border: 'none', paddingRight: '82%', width: '100%' }}
                    variant="outlined" startIcon={<AddIcon />} onClick={()=>handleCreateIssue()}>
                    Create Issue
                </Button>
            )
            }
        </div>
    )
}

export default CreateIssue
