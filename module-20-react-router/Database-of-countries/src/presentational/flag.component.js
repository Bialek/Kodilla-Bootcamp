import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.flag} alt="country flag" />
        <h2>{props.country.name}</h2>
    </div>
);

export default CountryFlag;