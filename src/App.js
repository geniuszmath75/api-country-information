import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchCountry from "./components/pages/SearchCountry";
import CountryInfo from "./components/pages/CountryInfo";
import axios from "axios";

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const names = data.map((country) =>
    country.name.common.includes(" ") === true
      ? country.name.common.replace(/\s/g, "_")
      : country.name.common
  );

  names.sort();

  const keys = data.map((country) => country.cca3);

  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          <Route path="/" Component={SearchCountry} />
          {/* {pages.length > 0 && pages[7].map((country, key) => {
            return (
              <Route
                key={keys[key]}
                path={`/${country}`}
                Component={CountryInfo}
              />
            );
          })} */}
          {names.map((country, key) => {
            return (
              <Route key={keys[key]} path={`/${country}`} Component={CountryInfo} />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
