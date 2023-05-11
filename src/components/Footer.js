import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p className="footer__text">&#169; {currentYear} Subscriby. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
