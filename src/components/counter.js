import React from "react"

import { Transition } from "react-spring/renderprops"
const items = ["1234"]

const counter = () => (
  <Transition
    items={items}
    keys={item => item.key}
    from={{ transform: "translate3d(0,-40px,0)" }}
    enter={{ transform: "translate3d(0,0px,0)" }}
    leave={{ transform: "translate3d(0,-40px,0)" }}
  >
    {item => props => <div style={props}>{item.text}</div>}
  </Transition>
)

export default counter
