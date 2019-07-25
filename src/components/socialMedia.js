import React from "react"

const SocialMedia = () => {
  return (
    <div className="index-con5">
      <a href="https://www.linkedin.com/in/jonathanhelvey/">
        <img
          className="social-logos-img"
          src={require("../images/linkedin-logo.png")}
          alt="social-sites"
        />
      </a>
      <a href="https://github.com/JonathanHelvey">
        <img
          className="social-logos-img"
          src={require("../images/github.png")}
          alt="social-sites"
        />
      </a>
      <a href="https://twitter.com/JonathanHelvey">
        <img
          className="social-logos-img"
          src={require("../images/twitter.png")}
          alt="social-sites"
        />
      </a>
      <a href="https://medium.com/@jonathanhelvey">
        <img
          className="social-logos-img"
          src={require("../images/medium.png")}
          alt="social-sites"
        />
      </a>
    </div>
  )
}

export default SocialMedia
