// src/components/Topbar.jsx
import React from 'react';
import { FaSearch, FaAdjust, FaCog, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const items = [
  { id: 1, name: 'search', icon: <FaSearch />, route: '/search' },
  { id: 2, name: 'theme', icon: <FaAdjust />, route: '/theme' },
  { id: 3, name: 'settings', icon: <FaCog />, route: '/settings' },
  { id: 4, name: 'profile', icon: <FaUser />, route: '/profile' },
];

const Topbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.searchContainer}>
        <FaSearch />
        <input type="text" placeholder="Search..." style={styles.searchInput} />
      </div>
      <div style={styles.iconsContainer}>
        {items.slice(1).map((item) => (
          <div key={item.id} style={styles.icon} onClick={() => handleNavigation(item.route)}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: '#fff',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
  },
  iconsContainer: {
    display: 'flex',
    gap: '20px',
  },
  icon: {
    cursor: 'pointer',
  },
};

export default Topbar;
