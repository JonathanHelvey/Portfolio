import React, { Component } from "react"

function generateGreeting() {
  let today = new Date()
  let curHr = today.getHours()
  if (curHr < 12) {
    return <h3>"Good morning"</h3>
  } else if (curHr < 18) {
    return "Good afteroon"
  } else {
    return "Good evening"
  }
}

class MainHeader extends Component {
  render() {
    const greeting = generateGreeting()
    return (
      <div>
        <h3>
          <h3 className="full-stack-dev">{generateGreeting()}</h3>
        </h3>
      </div>
    )
  }
}
export default MainHeader
