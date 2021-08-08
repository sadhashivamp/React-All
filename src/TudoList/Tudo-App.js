import React, { useState } from "react";
import Input from "./TudoList/Input";
import TudoList from "./TudoList/TudoList";

export default function App() {
  const [text, setText] = useState("");
  const [list, setlist] = useState([]);
  const changeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const clickHandler = (value) => {
    setlist([...list, value]);
    setText("");
  };
  return (
    <div className="App">
      <Input
        changeHandler={changeHandler}
        text={text}
        clickHandler={clickHandler}
      />
      <TudoList list={list} />
    </div>
  );
}