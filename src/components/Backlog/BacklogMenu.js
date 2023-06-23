import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const options = [
    'Edit',
    'Delete'
];

const ITEM_HEIGHT = 40;

export default function BacklogMenu(props) {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (index) => {
        if(options[index] === "Edit")
        {
            console.log(options[index] + " is pressed");
            props.setEditable("true");
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '10rem'
                    },
                }}
            >
                {options.map((option, index) => (
                    <div>
                        <MenuItem key={index} selected={option === 'Pyxis'} onClick={() => handleClose(index)}
                            style={{ height: '2rem' }}
                        >
                            {option}
                        </MenuItem>
                    </div>
                ))}
            </Menu>
        </div>
    );
}