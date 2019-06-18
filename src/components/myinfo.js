import React from "react"
import { Link } from "gatsby"

const MyInfo = () => {
  return (
    <div className="my-info">
      <div className="my-info-container">
        <h2 className="project-title">About Me</h2>
        <div>
          <p className="my-details">
            Hi, I'm <strong>Joantahn Helvey.</strong> I am a
            <strong style={{ color: "red" }}> Full Stack Developer</strong> who
            loves building interactive, animated, responsive websites. I have a
            background in the <strong style={{ color: "blue" }}>a</strong>
            <strong style={{ color: "red" }}>r</strong>
            <strong style={{ color: "green" }}>t</strong>
            <strong style={{ color: "purple" }}>s</strong> and have decided to
            bring that creativity to web development. I love to create
            web-designs that interact with the user in a fun and enjoyable way.
            The browser is my canvas and I enjoy manipulating the dom into an
            interactive portrait.
          </p>
          <p className="my-details">
            I am a recent graduate of FullStack Academy of Code. An intensive 19
            week coding bootcamp that helped me become proficient in a
            Javascript-based stack:
            <strong>
              Node, Express, React, Redux, PostgresSQL, and Sequelize.
            </strong>
            Interested in expanding my knowledge and learning new technologies.
          </p>
          <p className="my-details">
            <strong>
              I am currently seeking new opportunities for work as a Full Stack
              Developer.
            </strong>
          </p>{" "}
        </div>
        <br />
        <Link className="hire-me-button" to="/contact/">
          <button className="hire-me-button">Hire Me</button>
        </Link>
        <button className="hire-me-button">
          <a href={require("../templates/JonathanHelveyResume.pdf")} download>
            Resume PDF
          </a>
        </button>
      </div>
    </div>
  )
}

export default MyInfo
