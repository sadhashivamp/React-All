import React, { useState, useEffect } from "react";

const Api_Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane")
      .then((resp) => resp.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return <div>{data}</div>;
};

export default Api_Table;
