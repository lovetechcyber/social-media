import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Statistic', path: '/statistic' },
  { name: 'Campaign', path: '/campaign' },
  { name: 'Document', path: '/document' },
  { name: 'Setting', path: '/setting' },
  { name: 'Logout', path: '/logout' }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
