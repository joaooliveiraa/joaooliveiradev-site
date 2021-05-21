import React from 'react';
import '../../src/App.css';

export const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Hi. I,m</span>
            <span className="line">Full Stack Developer</span>
            <span className="line">
              <span className="color">&</span> Developer Mobile.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };