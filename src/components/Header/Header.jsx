import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Youssouf AMOUR DIT ZERROUK </span>
          <span className="line">Développeur Web </span>
          <span className="line">
            <span className="color">&</span> Designer.
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">PORTFOLIO</a>
          <a href="#contact" className="cta">
             CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
