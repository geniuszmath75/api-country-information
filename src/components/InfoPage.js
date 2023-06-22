import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./Info";
import { useLocation } from "react-router-dom";

function InfoPage() {
  const [countryInfo, setCountryInfo] = useState([]);
  const location = useLocation();
  const name =
    location.pathname.includes("_") === true
      ? location.pathname.replace("_", " ").substring(1)
      : location.pathname.substring(1);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        const data = Object.assign({}, ...res.data);
        setCountryInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="info-container">
      {countryInfo &&
        countryInfo.flags &&
        countryInfo.name &&
        countryInfo.languages &&
        countryInfo.idd &&
        countryInfo.currencies &&
        countryInfo.timezones && (
          <Info
            key={countryInfo.population}
            flags={countryInfo.flags.png}
            common={countryInfo.name.common}
            nativename1={Object.values(countryInfo.name.nativeName)[0].official}
            nativename2={Object.values(countryInfo.name.nativeName)[0].common}
            altspel={countryInfo.altSpellings?.map((alt, index) => {
              return index === countryInfo.altSpellings.length - 1
                ? alt
                : alt + ", ";
            })}
            nativelang={Object.values(countryInfo.languages)[0]}
            languages={Object.values(countryInfo.languages)
              .flat()
              .map((lang, index) => {
                return index ===
                  Object.values(countryInfo.languages).flat().length - 1
                  ? lang
                  : lang + ", ";
              })}
            region={countryInfo.region}
            subregion={countryInfo.subregion}
            capital={countryInfo.capital}
            area={countryInfo.area}
            borders={countryInfo.borders?.map((border, index) => {
              return index === countryInfo.borders.length - 1
                ? border
                : border + ", ";
            })}
            landlocked={countryInfo.landlocked === true ? "Yes" : "No"}
            isoa2={countryInfo.cca2}
            isoa3={countryInfo.cca3}
            ison={countryInfo.ccn3}
            icc={countryInfo.idd.root + countryInfo.idd.suffixes}
            isocc={Object.keys(countryInfo.currencies)[0]}
            population={countryInfo.population}
            timezone={countryInfo.timezones[0]}
            currency={
              Object.values(countryInfo.currencies)[0].name +
              "(" +
              Object.values(countryInfo.currencies)[0].symbol +
              ")"
            }
            tldomain={countryInfo.tld[0]}
          />
        )}
    </div>
  );
}

export default InfoPage;
