import React, { Component } from 'react'

class Car extends Component {
  constructor() {
    super();
    this.state = {brand: "ford"}
  }
  render() {
    return (
      <>
        <h2>I am a {this.state.brand} Car!</h2>
      </>
    )
  }
}

export default Car;


//  class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }
// export default Car