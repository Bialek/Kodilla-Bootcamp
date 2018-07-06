import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './flag.component'

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country=> {
            return (
                <div className="single-country" key={country.numericCode}>
                    <Link className='logo' key={country.numericCode} to={'countries/country/' + country.numericCode}>
                        <CountryFlag country={country} />
                    </Link>
                    <button className="delete-btn" onClick={props.deleteCountry.bind(null, country.numericCode)}>X</button>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;