import React from "react";
import { useState } from "react";
import RoadMapChild from "./RoadMapChild";
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
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "95%",
  // border: '1px solid red',
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Roadmap() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <>
      {sidebarOpen === "true" ? (
        <>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          <RoadMapChild projectName={"Accolite JIRA"} isOpen={sidebarOpen} />
        </>
      ) : (
        <>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          <RoadMapChild projectName={"Accolite JIRA"} isOpen={sidebarOpen} />
        </>
      )}
    </>
  );
}
export default Roadmap;
