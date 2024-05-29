import './App.css';
import { Routes, Route,  BrowserRouter as Router, useRoutes  } from "react-router-dom";
import Sidebar from './components/menu/Sidebar';
import Topbar from './components/menu/Topbar';
import Campaign from './components/pages/Campaign';
import Dashboard from './components/pages/Dashboard';
import Document from './components/pages/Document';
import Logout from './components/pages/Logout';
import Setting from './components/pages/Setting';
import Statistic from './components/pages/Statistic';
import Socialmedia from './components/menu/Socialmedia';



function App() {
  return (
    <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
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
  );
}

export default App;
