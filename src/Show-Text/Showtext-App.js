import { useState } from "react";
import Input from "./Show-Text/Input";

import Text from "./Show-Text/Text";

function App() {
  const [text, setText] = useState("");
  const handleClick = (value) => {
    setText(value);
  };
  return (
    <div className="App">
      <Input handleClick={handleClick} />
      <Text text={text} />
    </div>
  );
}
export default App