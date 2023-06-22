import React from "react";
import { Link } from "react-router-dom";

const Country = ({ name, capital, flag, currency, language, currencySign }) => {
  return (
    <li className="country-item">
      <Link
        className="country-item-link"
        to={
          name.includes(" ") === true
            ? "/" + name.replace(/\s/g, "_")
            : "/" + name
        }
      >
        <figure className="country-item-pic-wrap">
          <img src={flag} alt={"flag of" + name} className="country-item-img" />
        </figure>
        <div className="country-short-info">
          <div className="country-short-info-item">
            <p className="country-label">Country name: {name}</p>
          </div>
          <div className="country-short-info-item">
            <p className="country-label">Capital: {capital}</p>
            <div className="country-short-info-item">
              <p className="country-label">Language: {language}</p>
            </div>
            <div className="country-short-info-item">
              <p className="country-label">
                Currency: {currency + ` (${currencySign})`}{" "}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Country;
