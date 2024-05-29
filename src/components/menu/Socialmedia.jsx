import React from 'react';

function Socialmedia() {
  const socialMediaLinks = [
    { name: 'Facebook', url: '/analytics/facebook' },
    { name: 'Twitter', url: '/analytics/twitter' },
    { name: 'Instagram', url: '/analytics/instagram' },
    { name: 'LinkedIn', url: '/analytics/linkedin' },
    { name: 'YouTube', url: '/analytics/youtube' },
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
