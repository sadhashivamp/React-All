// Here we have a class component with a state value.
// Each time the button in component is clicked, the count is incremented.

// import React, { Component } from "react";

// class useState extends Component {
//   state = {
//     count: 0,
//   };

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <center>
//           {this.state.count} <br />
//           <button onClick={this.incrementCount}>Count</button>
//         </center>
//       </div>
//     );
//   }
// }
// export default useState;

// using Hooks and Functional component

// import React, { useState } from "react";

// const UseState = () => {
//   const [name, setName] = useState("MyOwnApp");
//   return (
//     <div>
//       <center>
//         <h1>{name}</h1>
//         <button onClick={() => setName("Welcome To MyOwnApp")}>Change</button>
//       </center>
//     </div>
//   );
// };
// export default UseState;

// 2nd Example

// const UseState = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log(setCount(count + 1));
//   };
//   return (
//     <div>
//       <center>
//         <h1>{count}</h1>
//         <button onClick={handleClick}>Click</button> {/*or*/}
//         <button onClick={() => console.log(setCount(count + 1))}>Press</button>
//       </center>
//     </div>
//   );
// };
// export default UseState;

// Here we have class component that updates the state using the input from a form.
// import React, { Component } from "react";

// class UseState extends Component {
//   state = {
//     name: "Backbencher",
//     age: 23,
//   };

//   onNameChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   onAgeChange = (e) => {
//     this.setState({
//       age: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <center>
//           <form>
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.onNameChange}
//             />
//             <input
//               type="text"
//               value={this.state.age}
//               onChange={this.onAgeChange}
//             />
//             <h2>
//               Name: {this.state.name} <br />
//               Age: {this.state.age}
//             </h2>
//           </form>
//         </center>
//       </div>
//     );
//   }
// }
// export default UseState;

// Rewrite the same component using React hooks.

import React, { useState } from "react";

function UseState() {
  const [profile, setProfile] = useState({
    name: "Backbencher",
    age: 24,
  });

  const onNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };

  const onAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={profile.name} onChange={onNameChange} />
        <input type="text" value={profile.age} onChange={onAgeChange} />
        <h2>
          Name: {profile.name}, Age: {profile.age}
        </h2>
      </form>
    </div>
  );
}
export default UseState;
