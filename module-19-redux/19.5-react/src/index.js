import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({
    comments,
    users
});
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root')
);
