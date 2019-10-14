import React from "react"
import { Link } from "gatsby"
import HeadShot from "../components/data/headShot"

const MyInfo = () => {
  return (
    <div id="tech">
      <div className="my-info-container">
        <h2 className="about-me-title">About Me</h2>
        <div className="index-con3">
          <div className="headshot">
            <HeadShot />
          </div>
          <ul>
            <p className="my-details">
              Hi, I'm <strong>Jonathan Helvey,</strong> a
              <strong style={{ color: "red" }}> Full Stack Developer </strong>
              who loves building interactive, animated, responsive websites. I
              have a background in the
              <strong style={{ color: "blue" }}> a</strong>
              <strong style={{ color: "red" }}>r</strong>
              <strong style={{ color: "green" }}>t</strong>
              <strong style={{ color: "purple" }}>s</strong> and have decided to
              bring that creativity to software development. I am a
              <b> Strong problem solver</b> who enjoys creating web designs that
              interact with the user in a fun and satisfying way. The browser is
              my canvas and I enjoy manipulating the dom into a beautiful
              interactive portrait.
            </p>
            <br />
            <p className="my-details">
              Currently I am working as a Freelance Web Developer in the Chicago
              land area. Creating web sites for actors and small businesses in
              the JAM stack (JavaScript, API's, Markup) in Gatsby.js and
              GraphQL!
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
      <div className="my-buttons-container">
        <Link className="hire-me-button" to="/contact/">
          <button className="hire-me-button">Let's Work Together!</button>
        </Link>
      </div>
    </div>
  )
}

export default MyInfo
