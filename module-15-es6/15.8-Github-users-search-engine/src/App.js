import React from 'react';
import './styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      users: []
    };
  }

  onChangeHandle(event) {
    this.setState({searchText: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {searchText} = this.state;
    var url = '';
    (this.state.searchText === '') 
    ?  url = 'https://api.github.com/search/users?q=alex'
    :  url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({users: responseJson.items}));
  }

  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <h1>
              <i className="fa fa-github"></i>
              GitHub Users Search Engine
            </h1>
          </div>
          <form onSubmit={event => this.onSubmit(event)}>
            <label htmlFor="searchText">Search by user name: </label>
            <input
              type="text"
              id="searchText"
              onChange={event => this.onChangeHandle(event)}
              placeholder={"e.g. Alex"}
              value={this.state.searchText}
            />
            <button type="submit">search</button>
          </form>        
        </nav>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}

class UsersList extends React.Component {
  get users() {
    return this.props.users.map(user => <User key={user.id} user={user}/>);
  }

  render() {
    return (
      <div className="userContainer">
        {this.users}
      </div>
    );
  }
}

class User extends React.Component {
  render() { 
    return (
      <div className="user">   
        <a href={this.props.user.html_url} target="_blank">
          <img src={this.props.user.avatar_url} alt="avatar"/>
          {this.props.user.login}
        </a>
      </div>
    );
  }
}

export default App;
