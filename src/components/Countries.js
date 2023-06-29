import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Country from "./Country";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current.focus();

    axios
      .get("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="countries-app">
      <div className="country-search">
        <h1 className="country-text">Search a country</h1>
        <form>
          <input
            type="text"
            className="country-input"
            placeholder="Enter a country..."
            onChange={handleChange}
            ref={focusInput}
          />
        </form>
      </div>
      <div className="countries-container">
        <div className="countries-wrapper">
          <ul className="countries-items">
            {filteredCountries.map((country) => {
              return (
                <Country
                  key={country.cca3}
                  flag={country.flags.png}
                  name={country.name.common}
                  capital={country.capital}
                  language={Object.values(country.languages)[0]}
                  currency={Object.values(country.currencies)[0].name}
                  currencySign={
                    Object.values(country.currencies)[0].symbol !== undefined
                      ? "(" + Object.values(country.currencies)[0].symbol + ")"
                      : ""
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Countries;
