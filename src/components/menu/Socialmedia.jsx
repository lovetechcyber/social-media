import React from 'react';
import './Menu.css';


function Socialmedia() {
  const socialMediaLinks = [
    { name: 'Facebook', url: '/statistics' },
    { name: 'Twitter', url: '/statistics' },
    { name: 'Instagram', url: '/statistics' },
    { name: 'LinkedIn', url: '/statistics' },
    { name: 'YouTube', url: '/statistics' },
  ];

  return (
    <div className="socialmedia">
      <h2>Social Media Analytics</h2>
      <ul className="socialmedia-list">
        {socialMediaLinks.map((platform, index) => (
          <li key={index} className="socialmedia-item">
            <a href={platform.url} className="socialmedia-link">{platform.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socialmedia;
