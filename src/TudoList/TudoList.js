import React from "react";

function TudoList({ list }) {
  return (
    <div>
      List
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default TudoList