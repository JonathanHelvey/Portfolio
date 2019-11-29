/* eslint-disable react/no-array-index-key */
import React from 'react';

const SocialMedia = () => (
  <div className="index-con5">
    <a
      href="https://www.linkedin.com/in/jonathanhelvey/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../images/linkedin-logo.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://github.com/JonathanHelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../images/github.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://twitter.com/JonathanHelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../images/twitter.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://medium.com/@jonathanhelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../images/medium.png')}
        alt="social-sites"
      />
    </a>
    <a
      href="https://dev.to/jonathanhelvey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-logos-img"
        src={require('../images/dev.svg')}
        alt="social-sites"
      />
    </a>
  </div>
);


export default SocialMedia;
