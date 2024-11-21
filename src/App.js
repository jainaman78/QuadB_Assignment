import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TaskManager from "./components/TaskManager";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`} style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar on the left */}
      <Sidebar darkMode={darkMode}/>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end', // Icons to the right
            alignItems: 'center',
            padding: '10px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          {/* Right Section (Icons) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <IconButton style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              <SearchIcon />
            </IconButton>
            <IconButton style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              <WidgetsIcon />
            </IconButton>
            <IconButton
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: darkMode ? 'white' : 'black', // Conditional color for the icon
              }}
              onClick={handleThemeToggle} // Toggle dark mode
            >
              <Brightness4Icon />
            </IconButton>
          </div>
        </div>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '20px'}}>
          <TaskManager  />
        </main>
      </div>
    </div>
  );
}

export default App;
