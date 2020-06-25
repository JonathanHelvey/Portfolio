import React from 'react';
import HeadShot from './data/headShot';
import TechStack from './techStack';

const MyInfo = () => (
  <div id="tech">
    <div className="my-info-container">
      <TechStack />
      <h2 className="about-me-title">About Me</h2>
      <div className="index-con3">
        <div className="headshot">
          <HeadShot />
        </div>
        <ul>
          <p className="my-details">
            Hi, I'm
            <strong> Jonathan Helvey, </strong>
            a
            <strong style={{ color: 'red' }}> Full Stack Developer </strong>
            who loves building interactive, animated, responsive websites. I
            have a background in the
            <strong style={{ color: 'blue' }}> a</strong>
            <strong style={{ color: 'red' }}>r</strong>
            <strong style={{ color: 'green' }}>t</strong>
            <strong style={{ color: 'purple' }}>s </strong>
            and have decided to
            bring that creativity to software development. I am a
            <b> Strong problem solver </b>
            who enjoys creating web designs that
            interact with the user in a fun and satisfying way. The browser is
            my canvas and I enjoy manipulating the DOM into a beautiful
            interactive portrait.
          </p>
          <br />
          <p className="my-details">
            Recently, I worked at a start-up company called agnoStack for several months.
            Our company built and designed an omni-channel plugin application for the Zendesk e-commerce platform.
            There I helped design and create our marketing website,
            constructed business dashboard management tools to help our company keep track of customer statistics,
            and assisted in development and maintenance of new APIs for integration on our Zendesk application plugin.
            Technologies used:
            <strong> React-Hooks, Node.js, Serverless, AWS, Firebase, and various javaScript libraries.</strong>
            <br />
            <br />
            Currently I do freelance work in the Chicago land area.
            Creating web sites for actors and small businesses in
            the
            <strong> JAM stack (JavaScript, API's, Markup) in Gatsby.js and GraphQL!</strong>
          </p>
          <br />
          <p className="my-details">
            I am a graduate of FullStack Academy of Code. An intensive 19 week
            coding bootcamp that helped me become proficient in a
            Javascript-based stack:
            <strong>
              &nbsp;&nbsp;Node.js, Express, React, Redux, PostgresSQL, and
              Sequelize.
            </strong>
            &nbsp;&nbsp;Fullstack Academy taught a mix of computer science
            theory, algorithms, data structures, and practical usage of
            industry standard tools and libraries.
          </p>
          <br />
          <p className="my-details">
            I am Interested in expanding my knowledge of development best
            practices and learning new technologies.
            <strong> *Let's work together!</strong>
          </p>
        </ul>
      </div>
      <br />
    </div>
  </div>
);


export default MyInfo;
