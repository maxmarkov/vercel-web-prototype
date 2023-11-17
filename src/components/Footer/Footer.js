/* TODO: test icon images instead of icons */

import React, { useState, useEffect } from 'react';
import './Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [emoji, setEmoji] = useState('😊');

  /* state: emoji changes when mouse enters and leaves */
  const handleMouseEnter = () => setEmoji('😄');
  const handleMouseLeave = () => setEmoji('😊');

  const currentYear = new Date().getFullYear();
  const SMALL_SCREEN_BREAKPOINT = 768;

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);  

  return (
      <footer className="footer">
          <div className="footer-section left">
              <span>&copy;
                {isSmallScreen ? ` ${currentYear}` : ` ${currentYear} Your Company Name`}
              </span>
          </div>
          <div className="footer-section center">
              <a href="/" className="emoji-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="Change emoji">
                  <div className="smiling-emoji">{emoji}</div>
              </a>
          </div>
          <div className="footer-section right">
            <div className="icon-container">
              <a href="https://github.com" taria-label="Visit my GitHub page" arget="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://linkedin.com" aria-label="Visit my LinkdIn page" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://twitter.com" aria-label="Visit my Twitter page" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
      </footer>
  );
}

export default Footer;