import React from 'react';

const agnoStackCard = () => (
  <div>
    <div className="card-inside">
      <div className="techs-card">
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/aws-logo.png')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">AWS</h4>
          </div>
        </div>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/reactlogo.svg')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">React</h4>
          </div>
        </div>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/styled-components-logo.png')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">Styled-Components</h4>
          </div>
        </div>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/JavaScript-logo.png')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">ES6</h4>
          </div>
        </div>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/css3.jpg')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">CSS3</h4>
          </div>
        </div>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/gatsby-icon.png')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">Gatsby</h4>
          </div>
        </div>
      </div>
      <div>
        <h6 className="project-title2">Built With</h6>
      </div>
      <div className="hvrbox2">
        <a
          href="https://github.com/gs-team-edwin/edmazon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="hvrbox-layer_bottom"
            src={require('../images/github.png')}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">Source Code</h4>
          </div>
        </a>
      </div>
      <h6 className="project-title2"> Source Code</h6>
      <div className="details">
        <h4 className="project-title2">agnoStack Marketing Website</h4>
      </div>
    </div>
  </div>
);

export default agnoStackCard;
