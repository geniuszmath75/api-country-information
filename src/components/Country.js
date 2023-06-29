import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

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
          <p className="country-label">
            Country name: <span className="label-value">{name}</span>
          </p>
          <p className="country-label">
            Capital: <span className="label-value">{capital}</span>
          </p>
          <p className="country-label">
            Language: <span className="label-value">{language}</span>
          </p>
          <p className="country-label">
            Currency:{" "}
            <span className="label-value">{currency + currencySign}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Country;
