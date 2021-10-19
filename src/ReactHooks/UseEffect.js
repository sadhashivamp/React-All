import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Boom");
  });

  const updateState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={updateState}>State: {count}</button>
    </div>
  );
}
export default UseEffect;
