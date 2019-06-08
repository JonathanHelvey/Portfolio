import React from "react"
import { useSpring, animated } from "react-spring"

const Intro = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <div className="intro">
      <div className="intro-container">
        <animated.h2 className="i-build-websites">
          {" "}
          Hello, I build websites!
        </animated.h2>

        <div>
          <h1 className="jonathan">Jonathan Helvey </h1>
          <h1 className="full-stack-dev">Full Stack Developer </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
