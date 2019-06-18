// import React, { Component } from "react"

// const images = [
//   require("../images/css3.jpg"),
//   require("../images/html5.png"),
//   require("../images/JavaScript-logo.png"),
//   require("../images/reactlogo.svg"),
// ]

// class Carousel extends Component {
//   constructor() {
//     super()
//     this.state = {
//       image: "",
//       curIdx: 0,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     let nextIdx = this.state.curIdx + 1
//     if (images[nextIdx] == null) {
//       this.setState(state => ({
//         image: images[0],
//         curIdx: 0,
//       }))
//     } else {
//       this.setState(state => ({
//         image: images[nextIdx],
//         curIdx: nextIdx,
//       }))
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={this.handleClick} type="button">
//             ◀
//           </button>
//           {!this.state.image ? (
//             <div className="hvrbox">
//               <img
//                 className="hvrbox-layer_bottom"
//                 src={this.state.image}
//                 alt="tech"
//               />
//               <div className="hvrbox-layer_top">
//                 <h4 className="hvrbox-text">ES6</h4>
//               </div>
//             </div>
//           ) : (
//             <div className="hvrbox">
//               <img
//                 className="hvrbox-layer_bottom"
//                 src={this.state.image}
//                 alt="tech"
//               />
//               <div className="hvrbox-layer_top">
//                 <h4 className="hvrbox-text">ES6</h4>
//               </div>
//             </div>
//           )}
//           <button onClick={this.handleClick} type="button">
//             ▶
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Carousel
