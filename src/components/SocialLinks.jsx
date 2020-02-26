import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/youssouf-amour-dit-zerrouk-b70780106/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's linkedin"
      >
        {' '}
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/amour-youcef"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/amour-youcef"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Codepen Profile"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};

export default SocialLinks;
