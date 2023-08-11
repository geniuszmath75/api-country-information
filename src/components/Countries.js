import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Country from "./Country";
import "./Countries.css";
import { TiSortAlphabetically } from "react-icons/ti";
import { HiLanguage, HiOutlineCurrencyDollar } from "react-icons/hi2";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("alphabetically");

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

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  }

  const filtering = countries.sort((country1, country2) => {
    let c1 = Object.values(country1.currencies)[0].name.toLowerCase();
    let c2 = Object.values(country2.currencies)[0].name.toLowerCase();
    let c3 = Object.values(country1.languages)[0].toLowerCase();
    let c4 = Object.values(country2.languages)[0].toLowerCase();
    let c5 = country1.name.common.toLowerCase();
    let c6 = country2.name.common.toLowerCase();

    if (filter === "alphabetically") {
      if (c5 < c6) return -1;
      if (c5 > c6) return 1;
    }

    if (filter === "language") {
      if (c3 < c4) return -1;
      if (c3 > c4) return 1;
    }

    if (filter === "currency") {
      if (c1 < c2) return -1;
      if (c1 > c2) return 1;
    }

    return 0;
  });

  const filteredCountries = filtering.filter((country) =>
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
        <div className="info-text">
          {search !== "" &&
            filteredCountries.length === 0 &&
            `No countries found for "${search}".`}
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-wrapper">
          <h3 className="filter-header">FILTER</h3>
          <div className="filter-icons">
            <abbr title="Alphabetically">
              <button
                id="firstFilter"
                className={
                  filter === "alphabetically"
                    ? "active-filter"
                    : "non-active-filter"
                }
                onClick={() => handleFilter("alphabetically")}
              >
                <TiSortAlphabetically id="alphabetically" />
              </button>
            </abbr>
            <abbr title="By language">
              <button
                id="secondFilter"
                className={
                  filter === "language" ? "active-filter" : "non-active-filter"
                }
                onClick={() => handleFilter("language")}
              >
                <HiLanguage id="filteringLanguage" />
              </button>
            </abbr>
            <abbr title="By currency">
              <button
                id="thirdFilter"
                className={
                  filter === "currency" ? "active-filter" : "non-active-filter"
                }
                onClick={() => handleFilter("currency")}
              >
                <HiOutlineCurrencyDollar id="filteringCurrency" />
              </button>
            </abbr>
          </div>
        </div>
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
