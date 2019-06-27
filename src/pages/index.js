import React from "react"
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
import TourCard from "../components/tourCard"
import Portfolio from "../components/portfolio"
import { Spring, config } from "react-spring/renderprops"

//import { useSpring, animated } from "react-spring"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Spring
        from={{ height: 100, opacity: 0 }}
        to={{ height: 275, opacity: 1 }}
        delay={500}
        config={config.molasses}
      >
        {props => (
          <div style={props}>
            <IntroCard />
          </div>
        )}
      </Spring>
      <div>
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
        {/* <Spring
          className="intro"
          from={{ height: 100, opacity: 0 }}
          to={{ height: 1605, width: "100%", opacity: 1 }}
          delay="3000"
          config={config.molasses}
        >
          {props => (
            <div>
              <img
                style={props}
                src={require("../images/code.jpg")}
                alt="social-sites"
              />
            </div>
          )}
        </Spring> */}
        <div id="projects" />
        <div className="wrapper">
          <h1 className="project-title">Projects</h1>
          <div className="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <a
                className="pop-image-tour"
                href="https://bluebubbles-998d5.firebaseapp.com/"
              >
                <img
                  className="pop-image"
                  src={require("../images/popnspotsmap.png")}
                  alt="Pop'N Spots Title"
                />
              </a>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        Finding your next spot has never been easier, with our
                        streamlined and intuitive user interface. Desktop and
                        mobile city guide that uses Google Maps API to show
                        current occupancy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <a
                className="pop-image-tour"
                href="https://edmazon.herokuapp.com/products/offset/0"
              >
                <img
                  className="pop-image"
                  src={require("../images/Edmazon.png")}
                  alt="Pop'N Spots Title"
                />
              </a>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        A full-featured RESTful e-commerce store built as a
                        bootcamp learning project for the NERDS stack. Desktop
                        only.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <EdCard />
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <a
                className="pop-image-tour"
                href="https://jonathanhelvey.github.io/guessing-game/"
              >
                <img
                  className="pop-image"
                  src={require("../images/guessing-game.png")}
                  alt="Pop'N Spots Title"
                />
              </a>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        Guessing-Game! Guess a number between 1 & 100! Built
                        with vanailla JavaScript and CSS3.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <GuessCard />
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <a
                className="pop-image-tour"
                href="https://jonathanhelvey.github.io/Background-Color-Generator/"
              >
                <img
                  className="pop-image"
                  src={require("../images/colorGenerator.png")}
                  alt="Pop'N Spots Title"
                />
              </a>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        Pick the right Gradiant Colors for your website! Built
                        with vanailla JavaScript and CSS3.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <ColorGen />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <a
                className="pop-image-tour"
                href="https://www.jonathanhelvey.com/"
              >
                <img
                  className="pop-image"
                  src={require("../images/Portfolio.png")}
                  alt="Pop'N Spots Title"
                />
              </a>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        A responsive static portfolio site built as a learning
                        project for the JAMstack. Builds from Markdown files
                        queried through Gatsby's GraphQL data layer!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <Portfolio />
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover')">
              <div>
                <a
                  className="pop-image-tour"
                  href="https://expo.io/@jhelvey/Tour"
                >
                  <img
                    className="pop-image"
                    src={require("../images/tourScan.png")}
                    alt="Pop'N Spots Title"
                  />
                </a>
              </div>
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <div className="details">
                      <p className="details2">
                        Android mobile application showing the most obsure
                        places around Chicago. Built with React-Native and Expo
                        CLI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <TourCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TechStack />
        </div>
        <div>
          <div>
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
      </div>
    </Layout>
  )
}
export default IndexPage
