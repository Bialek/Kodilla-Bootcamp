import React, { Component } from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

class App extends Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
        )
    }
}

const Navigation = props => (
    <div>
       <ul>
            <li><Link to="/" activeClassName='active' onlyActiveOnIndex>Home</Link></li>
            <li><Link to="/contact" activeClassName='active' onlyActiveOnIndex>Contact</Link></li>
        </ul>
        {props.children}
    </div>
);
const Home = () => <h1>hej, tu Home component</h1>
const Contact = () => <h1>a tu Contact component</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;
const Hello = {props} => <h1>Witaj, {props.params.name}</h1>

export default App;
