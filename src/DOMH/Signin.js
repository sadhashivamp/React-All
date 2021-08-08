import React, { useState } from "react";

function Signin() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleButtonClick = () => {
    console.log(name.current.value);
    
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <input type="text" placeholder="enter userName" onChange={nameChange} />
      <input
        type="password"
        placeholder="enter password"
        onChange={passwordChange}
        value={password}
      />
      <button onClick={handleButtonClick}>SignIn</button>
    </>
  );
}
export default Signin