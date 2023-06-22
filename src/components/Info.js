import React from "react";

const Info = (props) => {
  return (
    <div className="info-wrapper">
      <div className="country-title">
        <h1 className="country-name">{props.common}</h1>
      </div>
      <div className="country-flag">
        <img src={props.flags} alt={"flag of " + props.common} className="flag" />
      </div>
      <div className="country-row-1">
        <div className="info-item">
          <h2 className="info-item-title">Names:</h2>
          <div className="info-item-details">
            <div className="info-item-row">
              <p className="info-item-label">Common name: </p>
              <h4 className="info-item-content">{props.common}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">{"Native name(official): "} </p>
              <h4 className="info-item-content">{props.nativename1}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">{"Native name(common): "} </p>
              <h4 className="info-item-content">{props.nativename2}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Alternative spellings: </p>
              <h4 className="info-item-content">{props.altspel}</h4>
            </div>
          </div>
        </div>
        <div className="info-item">
          <h2 className="info-item-title">Language:</h2>
          <div className="info-item-details">
            <div className="info-item-row">
              <p className="info-item-label">Native language: </p>
              <h4 className="info-item-content">{props.nativelang}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Languages: </p>
              <h4 className="info-item-content">{props.languages}</h4>
            </div>
          </div>
        </div>
        <div className="info-item">
          <h2 className="info-item-title">Geography:</h2>
          <div className="info-item-details">
            <div className="info-item-row">
              <p className="info-item-label">Region: </p>
              <h4 className="info-item-content">{props.region}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Subregion: </p>
              <h4 className="info-item-content">{props.subregion}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Capital: </p>
              <h4 className="info-item-content">{props.capital}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Area: </p>
              <h4 className="info-item-content">{props.area + "km2"}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Land borders: </p>
              <h4 className="info-item-content">{props.borders}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Landlocked: </p>
              <h4 className="info-item-content">{props.landlocked}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="country-row-2">
        <div className="info-item">
          <h2 className="info-item-title">Codes:</h2>
          <div className="info-item-details">
            <div className="info-item-row">
              <p className="info-item-label">ISO 3166-1 alpha-2: </p>
              <h4 className="info-item-content">{props.isoa2}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">ISO 3166-1 alpha-3: </p>
              <h4 className="info-item-content">{props.isoa3}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">ISO 3166-1 numeric: </p>
              <h4 className="info-item-content">{props.ison}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">International calling code: </p>
              <h4 className="info-item-content">{props.icc}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">ISO 4217 currency code: </p>
              <h4 className="info-item-content">{props.isocc}</h4>
            </div>
          </div>
        </div>
        <div className="info-item">
          <h2 className="info-item-title">Other information:</h2>
          <div className="info-item-details">
            <div className="info-item-row">
              <p className="info-item-label">Population: </p>
              <h4 className="info-item-content">{props.population}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Timezone: </p>
              <h4 className="info-item-content">{props.timezone}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Currency: </p>
              <h4 className="info-item-content">{props.currency}</h4>
            </div>
            <div className="info-item-row">
              <p className="info-item-label">Top level domain: </p>
              <h4 className="info-item-content">{props.tldomain}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;