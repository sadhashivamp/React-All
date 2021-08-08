import { useState } from "react";
import SignIn from "./SignIn-Welcome/SignIn";


export default function App() {
  const [userName, setUserName] = useState(null);
  const [showSignIn, updateShowSignIn] = useState(false);

  const handleLoginClick = () => {
    updateShowSignIn(true);
  };

  const updateUserName = (name) => {
    setUserName(name);
  };

  return (
    <center><div className="App">
      {userName && <h1>welcome {userName}</h1>}
      {showSignIn && <SignIn updateUserName={updateUserName} />}
      {!showSignIn && <button onClick={handleLoginClick}>login</button>}
    </div></center>
  );
}
