import React from "react"
import Gretting from "../components/greeting"
import Counter from "../components/counter"
import { Spring, config } from "react-spring/renderprops"

const Intro = () => {
  return (
    // className='intro'
    <div>
      <div>
        <h2 className="i-build-websites">
          <Gretting />
        </h2>
        <div>
          <Spring
            className="jonathan"
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay="1000"
            config={config.molasses}
          >
            {props => (
              <div style={props}>
                <h1 className="jonathan">Jonathan Helvey </h1>
              </div>
            )}
          </Spring>
          <h1 className="jonathan" />
          <h1 className="full-stack-dev">Full Stack Developer </h1>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default Intro
