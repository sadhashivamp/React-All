import React, { useState } from "react";

function SignIn(props) {
    const [userName, setUserName] = useState("");
  const passUserName = () => {
    props.updateUserName(userName);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <input
        placeholder="enter user name"
        type="text"
        value={userName}
        onChange={handleUserName}
      />
      <button onClick={passUserName}>SignIn</button>
    </>
  );
}
export default SignIn