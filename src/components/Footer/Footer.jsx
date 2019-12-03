import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>MERCI DE VOTRE VISITE</h3>
        <p>© {new Date().getFullYear()} Youssouf Amour.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
