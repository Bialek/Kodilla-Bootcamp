import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-container.component';

if (!!window.performance && window.performance.navigation.type === 2) {
    // value 2 means "The page was accessed by navigating into the history"
    console.log('Reloading');
    window.location.reload(); // reload whole page

}
export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries' >
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentsContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);