import React from "react"
//import { Link } from "gatsby"

const GuessCard = () => {
  return (
    <div className="card">
      <div className="card-inside">
        <div className="techs-card">
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/JavaScript-logo.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">ES6</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/css3.jpg")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">CSS3</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/html5.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">HTML5</h4>
            </div>
          </div>
        </div>
        <div>
          <h6 className="project-title2">Built With</h6>
        </div>
        <h6>Source code</h6>
        <div className="hvrbox2">
          <img
            className="hvrbox-layer_bottom"
            src={require("../images/github.png")}
            alt="tech"
          />
          <div className="hvrbox-layer_top">
            <h4 className="hvrbox-text">Source Code</h4>
          </div>
        </div>
        <div className="details">
          <p className="details2">
            Guessing-Game! Guess a number between 1 & 100!
          </p>
        </div>
        <div className="details">
          <h4 className="project-title">Guessing-Game</h4>
          <a href="https://jonathanhelvey.github.io/guessing-game/">
            <img
              className="pop-image"
              src={require("../images/guessing-game.png")}
              alt="Pop'N Spots Title"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default GuessCard
