import React from "react";

function Input({ changeHandler, text, clickHandler }) {
  return (
    <div>
      <input value={text} onChange={changeHandler} />
      <button onClick={() => clickHandler(text)}>Add Todo</button>
    </div>
  );
}
export default Input