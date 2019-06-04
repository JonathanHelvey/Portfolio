import React from "react"
import { Link } from "gatsby"

const MyInfo = () => {
  return (
    <div className="my-info">
      <div className="my-info-container">
        <h2>About Me</h2>
        <p className="my-details">
          Full Stack Developer skilled at creating polished, user-friendly web
          applications. Interested in learning new technologies. Currently
          seeking new opportunities for work in the tech industry.
        </p>
        <Link className="hire-me-button" to="/contact/">
          <button className="hire-me-button">Hire Me</button>
        </Link>
      </div>
    </div>
  )
}

export default MyInfo
