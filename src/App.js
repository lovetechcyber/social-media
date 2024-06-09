import './App.css';
import { useState } from "react";
import { Routes, Route,  } from "react-router-dom";
import Sidebar from './components/menu/Sidebar';
import Topbar from './components/menu/Topbar';
import Campaign from './components/pages/Campaign';
import Dashboard from './components/pages/Dashboard';
import Document from './components/pages/Document';
import Logout from './components/pages/Logout';
import Setting from './components/pages/Setting';
import Statistic from './components/pages/Statistic';
import Socialmedia from './components/menu/Socialmedia';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Socialmedia />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Statistic" element={<Statistic />} />
              <Route path="/Campaign" element={<Campaign />} />
              <Route path="/Document" element={<Document />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
