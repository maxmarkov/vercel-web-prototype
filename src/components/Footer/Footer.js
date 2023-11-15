import React, { useState } from 'react';
import './Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [emoji, setEmoji] = useState('😊');

  const handleMouseEnter = () => setEmoji('😄');
  const handleMouseLeave = () => setEmoji('😊');

  return (
      <footer className="footer">
          <div className="footer-section left">
              <span>&copy; 2023 Your Company Name</span>
          </div>
          <div className="footer-section center">
              <a href="/" className="emoji-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="smiling-emoji">{emoji}</div>
              </a>
          </div>
          <div className="footer-section right">
            <div className="icon-container">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
      </footer>
  );
}

export default Footer;