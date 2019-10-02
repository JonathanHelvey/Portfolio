import React from "react"
import Gretting from "../components/greeting"
import { Spring, config } from "react-spring/renderprops"

const Intro = () => {
  return (
    <div>
      <div>
        <h2 className="i-build-websites">
          <Gretting />
        </h2>
        <div>
          <h1 className="jonathan">Jonathan Helvey </h1>
          <Spring
            className="jonathan"
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay="1500"
            config={config.molasses}
          >
            {props => (
              <div style={props}>
                <h1 className="full-stack-dev">Full Stack Developer </h1>
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  )
}

export default Intro
