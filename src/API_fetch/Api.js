import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://prototype.sbulltech.com/api/v2/quotes/{symbol}")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default App;

// // how to integrate api in react js // //

// JSON_URL - jsonplaceholder.typicode.com/todos
/*
    -MOstly we use useEffect, So firstly we declared useEffect hook
    -Take the URL or copy to paste in fetch .
    -Ofter fetch, then convert data in to Json
    -Ofter converting, console to that json

  ofter fetching process completed, then we store that data
  in to a variable for that we use useState.
    -Ofter converting fetching data then assign that data to setData
*/
