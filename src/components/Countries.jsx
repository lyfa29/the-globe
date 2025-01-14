import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  // to do a javascript in a return always use a curly bracket
  //<b> is an inline tag which means bold
  return (
    <div className="all-countries p-5">
      {allCountries.map((country) => {
        return (
          <Link
            to={`/${country.name.common}`}
            key={country.name.common}
            className="text-decoration-none text-black"
          >
            <div className="shadow rounded-2 bg-elements">
              <img className="rounded-top-2" src={country.flags.png} alt="" />
              <div className="text-start p-4 custom-text-color">
                <h3 className="mb-1">{country.name.common}</h3>
                <p className="mb-1">
                  <b>Population</b>: {country.population.toLocaleString()}
                </p>
                <p className="mb-1">
                  <b>Region</b>: {country.region}
                </p>
                <p className="mb-1">
                  <b>Capital</b>: {country.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
