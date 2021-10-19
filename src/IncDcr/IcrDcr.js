import React, { useState } from "react";

function IcrDcr() {
  const [counter, setCounter] = useState(0);

  const incrHandler = () => {
    setCounter(counter + 1);
  };
  const dcrkHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div style={{ backgroundColor: "grey", width: "300px", height: "100px" }}>
      <h1 style={{ color: "blue" }}>{counter}</h1>
      <div>
        <button
          style={{ color: "white", backgroundColor: "green" }}
          onClick={incrHandler}
          id="increment"
        >
          Increment
        </button>
        <button
          style={{ color: "white", backgroundColor: "red" }}
          onClick={dcrkHandler}
          id="decrement"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default IcrDcr;

// using class component and no hooks
// import React, {Component} from "react";

// class useState extends Component {
//     state = {
//       count: 0,
//     };

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count + 1,
//         };
//       });
//     };

//     decrementCount = () => {
//       this.setState((prevState) => {
//         return {
//           count: prevState.count - 1,
//         };
//       });
//     };

//     render() {
//       return (
//         <div>
//           <center>
//             <strong>{this.state.count}</strong> <br />
//             <button onClick={this.incrementCount}>Increment</button> <br />
//             <button onClick={this.decrementCount}>Decrement</button>
//           </center>
//         </div>
//       );
//     }
//   }
//   export default useState;
