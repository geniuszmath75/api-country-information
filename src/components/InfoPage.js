import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./Info";
import { useLocation, Link } from "react-router-dom";
import "../ShortNames.js";
import ShortNames from "../ShortNames.js";

function InfoPage() {
  const [countryInfo, setCountryInfo] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const location = useLocation();
  const name =
    location.pathname.includes("_") === true
      ? location.pathname.replace(/_/g, " ").substring(1)
      : location.pathname.substring(1);

  const clickedLink = () => {
    setRefresh(true);
  };

  useEffect(() => {
    if (refresh) window.location.reload();

    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => {
        const data = Object.assign({}, ...res.data);
        setCountryInfo(data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="info-container">
      {countryInfo &&
        countryInfo.flags &&
        countryInfo.name &&
        countryInfo.languages &&
        countryInfo.idd &&
        countryInfo.currencies &&
        countryInfo.timezones &&
        ShortNames && (
          <Info
            key={countryInfo.cca3}
            flags={countryInfo.flags.png}
            common={countryInfo.name.common}
            nativename1={Object.values(countryInfo.name.nativeName)[0].official}
            nativename2={Object.values(countryInfo.name.nativeName)[0].common}
            altspel={countryInfo.altSpellings.map((alt, index) => {
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
            borders={
              countryInfo["borders"] === undefined
                ? "None (island)"
                : countryInfo.borders.map((border, index) => {
                    for (let i = 0; i < ShortNames.length; i++) {
                      for (const key in ShortNames[i]) {
                        if (
                          ShortNames[i].hasOwnProperty(key) &&
                          ShortNames[i][key] === border.toLowerCase()
                        ) {
                          return index === countryInfo.borders.length - 1 ? (
                            <Link
                              key={index}
                              className="border-links"
                              to={"/" + ShortNames[i].name}
                              onClick={clickedLink}
                            >
                              {border}
                            </Link>
                          ) : (
                            <Link
                              key={index}
                              className="border-links"
                              to={"/" + ShortNames[i].name}
                              onClick={clickedLink}
                            >
                              {border + ", "}
                            </Link>
                          );
                        }
                      }
                    }
                  })
            }
            landlocked={countryInfo.landlocked === true ? "Yes" : "No"}
            isoa2={countryInfo.cca2}
            isoa3={countryInfo.cca3}
            ison={countryInfo.ccn3}
            icc={
              countryInfo.idd.suffixes.length > 1
                ? countryInfo.idd.root
                : countryInfo.idd.root + countryInfo.idd.suffixes
            }
            isocc={Object.keys(countryInfo.currencies)[0]}
            population={countryInfo.population}
            timezone={countryInfo.timezones[0]}
            currency={
              Object.values(countryInfo.currencies)[0].symbol !== undefined
                ? Object.values(countryInfo.currencies)[0].name +
                  "(" +
                  Object.values(countryInfo.currencies)[0].symbol +
                  ")"
                : Object.values(countryInfo.currencies)[0].name
            }
            tldomain={countryInfo.tld[0]}
          />
        )}
    </div>
  );
}

export default InfoPage;