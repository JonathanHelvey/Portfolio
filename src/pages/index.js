import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import EdCard from "../components/edCard"
import GuessCard from "../components/guessCard"
import MyInfo from "../components/myinfo"
import TechStack from "../components/techStack"
import IntroCard from "../components/introCard"
import ColorGen from "../components/colorGen"
import TourCard from "../components/tourCard.js"
//import ContactInfo from "../components/contactInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div>
      <IntroCard />
      <div className="index-con4">
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
      </div>
      {/* <video loop autoPlay>
        <img
          src={require("../images/videohive-10976683-chicago-evening.mov")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div className="index-con2">
        <div id="projects">
          <h1 className="project-title">Projects</h1>
        </div>

        <div className="the-cards">
          <Card />
          <EdCard />
          <TourCard />
          <GuessCard />
          <ColorGen />{" "}
        </div>
      </div>
      <div id="tech" className="index-con3">
        <div className="inside-index-con3">
          <img
            className="headshot"
            src={require("../images/jon.jpg")}
            alt="social-sites"
          />
          <div className="info2">
            <MyInfo />
          </div>
        </div>
      </div>
      <div className="index-con4">
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
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  </Layout>
)

export default IndexPage
