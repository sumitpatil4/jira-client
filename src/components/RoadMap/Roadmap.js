import React from "react";
import { useState } from "react";
// import Navbar from './common/Navbar';
import Sidebar from "../common/sidebar/Sidebar";
import "./Roadmap.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '95%',
  // border: '1px solid red',
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Roadmap() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  
  return (
    <div className="roadmap-component">
      {/* <Navbar onClick={handleViewSidebar} /> */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <div className="roadmap-area">
        {/* <h1 className="heading"></h1> */}
        <div className="roadmapHeader">
        {/* <Typography className="roadmap-heading" variant="h4" gutterBottom>Roadmap</Typography> */}
        <h2 className="roadmap-heading">Roadmap</h2>
      <span>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </span>
          </div>
        <Accordion className="accordion-0">
          <AccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>PI 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion className="accordion-0">
              <AccordionSummary
                className="accordion-summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sprint 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Accordion className="accordion-0">
                    <AccordionSummary
                      className="accordion-summary"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Issue 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      <Typography>
                        Fix the side panel in the roadmap and board page.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion  className="accordion-0">
          <AccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>PI 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion className="accordion-0">
              <AccordionSummary
                className="accordion-summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sprint 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Accordion className="accordion-0">
                    <AccordionSummary
                      className="accordion-summary"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Issue 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      <Typography>
                        Change the color of the Navbar.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
