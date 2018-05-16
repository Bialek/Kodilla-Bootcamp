import React, { Component } from 'react';
import './style.css';
import Contact from './contact.js';
import ContactForm from './contactForm.js';
import Contacts from './contacts.js'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ContactForm contact={contactForm}/>
        <Contacts items={contacts}/>
      </div>
    );
  }
};


var contacts = [
{
id: 1,
firstName: 'Jan',
lastName: 'Nowak',
email: 'jan.nowak@example.com',
},
{
id: 2,
firstName: 'Adam',
lastName: 'Kowalski',
email: 'adam.kowalski@example.com',
},
{
id: 3,
firstName: 'Zbigniew',
lastName: 'Koziol',
email: 'zbigniew.koziol@example.com',
}
];

var contactForm = {
firstName: '',
lastName: '',
email: ''
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();