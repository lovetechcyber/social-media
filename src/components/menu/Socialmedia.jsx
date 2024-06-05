import React from 'react';
import './Menu.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

function Socialmedia() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
