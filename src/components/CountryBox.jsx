import React from 'react';
import PropTypes from 'prop-types';
import './CountryBox.css'

export default function CountryBox({country, confirmed, deaths, active}) {
    const classes = country ? 'hidden country__box' : 'hidden'
    return (
        <div className={classes}>
            <p>Country: {country}</p>
            <p>Confirmed: {confirmed}</p>
            <p>Deaths: {deaths}</p>
            <p>Active: {active}</p>
        </div>
    )
}

CountryBox.propTypes = {
    country: PropTypes.string,
    confirmed: PropTypes.number,
    deaths: PropTypes.number,
    active: PropTypes.number
}
