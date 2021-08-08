import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={() => props.handleClick(value)}>Add text</button>
    </div>
  );
}
export default Input