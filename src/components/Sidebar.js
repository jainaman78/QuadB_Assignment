import React, { useState } from "react";
import "./Sidebar.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Menu Icon
import ListAltIcon from "@mui/icons-material/ListAlt"; // All Tasks Icon
import TodayIcon from "@mui/icons-material/Today"; // Today Icon
import StarIcon from "@mui/icons-material/Star"; // Important Icon
import EventIcon from "@mui/icons-material/Event"; // Planned Icon
import PersonIcon from "@mui/icons-material/Person"; // Assigned to Me Icon
import AddIcon from "@mui/icons-material/Add"; // Add List Icon

import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";

const Sidebar = ({ darkMode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle state

  return (
    <div className={`sidebar-container ${darkMode ? "dark" : "light"}`}>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Sidebar Toggle Icon */}
        <IconButton
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{ color: darkMode ? "white" : "black" }}
        >
          <MenuIcon />
          <img src={img3} className="hello" alt="logo" />
        </IconButton>
        
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <img src={img2} alt="circle" className="circle-image" />

          {/* Sidebar Sections */}
          <div className="sidebar-box">
            <ul>
              <li>
                <ListAltIcon className="sidebar-icon" />
                All Tasks
              </li>
              <li>
                <TodayIcon className="sidebar-icon" />
                Today
              </li>
              <li>
                <StarIcon className="sidebar-icon" />
                Important
              </li>
              <li>
                <EventIcon className="sidebar-icon" />
                Planned
              </li>
              <li>
                <PersonIcon className="sidebar-icon" />
                Assigned to Me
              </li>
            </ul>
          </div>

          <div className="sidebar-box">
            <ul>
              <li>
                <AddIcon className="sidebar-icon" />
                Add List
              </li>
            </ul>
          </div>

          <div className="sidebar-box image-box">
            {/* <img src={img1} alt="Placeholder"  /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
