import React from "react"
//import { Link } from "gatsby"

const Card = () => {
  return (
    <div className="card">
      <div className="card-inside">
        <div className="techs-card">
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/firebase.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Firebase</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/reactlogo.svg")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">React</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/redux.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Redux</h4>
            </div>
          </div>
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
        <div className="hvrbox2">
          <a href="https://github.com/capstone-bluebubbles/Pop-n-Spots">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/github.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Code Source</h4>
            </div>
          </a>
        </div>
        <div className="details">
          <p className="details2">
            Let Pop'N Spots help you find Popular spots by showing you the
            business of a place through data visualizations.
          </p>
        </div>
        <div className="details">
          <h4 className="project-title">Pop'N Spots</h4>
          <a href="https://bluebubbles-998d5.firebaseapp.com/">
            <img
              className="pop-image"
              src={require("../images/popnspots.png")}
              alt="Pop'N Spots Title"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
