import { useState } from "react";
import React from 'react'
import SignIn from './SignIn/SignIn'

const App = () => {
  const [userName, setUserName] = useState(null);
  const [showSignIn, updateShowSignIn] = useState(false);

  const handleLoginClick = () => {
    updateShowSignIn(true);
  };

  const updateUserName = (name) => {
    setUserName(name);
  };

  return (
    <div className="App">
      {userName && <h1>welcome {userName}</h1>}
      {showSignIn && <SignIn updateUserName={updateUserName} />}
      {!showSignIn && <button onClick={handleLoginClick}>login</button>}
    </div>
  );
}
export default App