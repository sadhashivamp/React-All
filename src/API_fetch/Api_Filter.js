import React, { useEffect, useState } from "react";

export default function Api_Filter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
