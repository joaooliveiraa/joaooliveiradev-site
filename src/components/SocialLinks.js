import React from 'react'
import '../../src/App.css';

export const SocialLinks = props => {
    return (
      <>
      <div className="social">
        <a
          href="https://twitter.com/Jaoliveiraaa"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/joaooliveiraa"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-oliveiradev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Linkedin Profile"
        >
          {' '}
          <i className="fab fa-linkedin" />
        </a>
      </div>
      </>
    );
  };