import React from 'react';

const CountryDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img className="country-photo" src={props.country.flag} alt="country photo" />
        </header>
        <div className="country-info">
            <h1>{props.country.name}</h1>
            <h2>Continent: {props.country.region}</h2>

            <div className="info">
                <div>
                    <span>{Math.floor(props.country.population)}</span>
                    <span>Population</span>
                </div>

                <div>
                    <span>{props.country.capital}</span>
                    <span>Capital</span>
                </div>

                <div>
                    <span>{props.country.area}</span>
                    <span>Area</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;