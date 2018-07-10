import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
    componentDidMount() {
        setTimeout(() => this.props.dispatch(getCountry(this.props.params.id)), 1000);
    }

    render() { 
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps =  function (store) { 
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);