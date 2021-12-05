import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchData = () => {
    if (searchTerm !== "") {
      const filterData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredResults(filterData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            fontSize: 30,
            paddingLeft: "20px",
            width: 250,
            height: 50,
            border: "none",
            borderRadius: 10,
          }}
          icon="search"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={searchData}
          style={{
            backgroundColor: "#4CAF50",
            marginLeft: 10,
            width: 80,
            height: 50,
            borderRadius: 10,
          }}
        >
          Search
        </button>
      </div>

      <div>
        {searchTerm.length > 1
          ? filteredResults.map((item) => {
              return (
                <div
                  style={{
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                      width: "430px",
                      textAlign: "center",
                      lineHeight: "75px",
                      fontSize: "20px",
                    }}
                  >
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                  </div>
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div
                  style={{
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                      margin: "10px",
                      width: "430px",
                      textAlign: "center",
                      lineHeight: "75px",
                      fontSize: "20px",
                    }}
                  >
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
