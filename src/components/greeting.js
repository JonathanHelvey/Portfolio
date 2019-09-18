import React, { Component } from "react"
import { Spring, config } from "react-spring/renderprops"

function generateGreeting() {
  let today = new Date()
  let curHr = today.getHours()
  if (curHr < 12) {
    return <h3 className="full-stack-dev">🌅Good Morning!🌅</h3>
  } else if (curHr < 18) {
    return <h3 className="full-stack-dev">☀️Good Afternoon!☀️</h3>
  } else {
    return <h3 className="full-stack-dev">🌙Good Evening!🌙</h3>
  }
}

class MainHeader extends Component {
  render() {
    //const greeting = generateGreeting()
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay="2000"
        config={config.molasses}
      >
        {props => <h3 style={props}>{generateGreeting()}</h3>}
      </Spring>
    )
  }
}
export default MainHeader
