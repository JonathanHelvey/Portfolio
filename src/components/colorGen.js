import React from "react"
//import { Link } from "gatsby"

const ColorGen = () => {
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
        <h6>Source Code</h6>
        <div className="hvrbox2">
          <a href="https://github.com/JonathanHelvey/Background-Color-Generator">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/github.png")}
              alt="tech"
            />

            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Source Code</h4>
            </div>
          </a>
        </div>
        <div className="details">
          <p className="details2">
            Pick the right Gradiant Colors for your website!
          </p>
        </div>
        <div className="details">
          <h4 className="project-title">Color Generator</h4>
          <a href="https://jonathanhelvey.github.io/Background-Color-Generator/">
            <img
              className="pop-image"
              src={require("../images/colorGenerator.png")}
              alt="Pop'N Spots Title"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ColorGen
