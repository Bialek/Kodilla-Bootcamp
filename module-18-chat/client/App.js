import React, { Component } from 'react';
import io from 'socket.io-client';
import styles from './css/App.css'

import UsersList from './UsersList';
import MessageList from './MessageList';
import UserForm from './UserForm';
import MessageForm from './MessageForm';

const socket = io('/');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            messages: [],
            text: '',
            name: '',
            color: ''
        };
    }

    componentDidMount() {
        socket.on('message', message => this.messageReceive(message));
        socket.on('update', ({users}) => this.chatUpdate(users));
    }

    messageReceive(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
    }

    chatUpdate(users) {
        this.setState({users});
    }
s
    handleMessageSubmit(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
        socket.emit('message', message);
    }

    handleUserSubmit(name) {
        this.setState({name});
        socket.emit('join', name);
    }
    
    handleUserColor(color) {
        this.setState({color});
        console.log(this.state.color);
    }

    // componentWillUnmount() {
    //     socket.on('message', message => this.messageReceive(message));
    //     socket.on('update', ({users}) => this.chatUpdate(users));
    // }

    render() {
        return this.state.name !== '' ? ( this.renderLayout() ): this.renderUserForm()
    }

    renderLayout() {
        return (
            <div className={styles.App}>
                <div className={styles.AppHeader}>
                    <div className={styles.AppTitle}>
                        ChatApp
                    </div>
                    <div className={styles.AppRoom}>
                        Chat room
                    </div>
                </div>
                    <div className={styles.AppBody}>
                        <UsersList
                            users={this.state.users}
                        />
                    <div className={styles.MessageWrapper}>
                        <MessageList
                            messages={this.state.messages}
                        />
                        <MessageForm
                            onMessageSubmit={message => this.handleMessageSubmit(message)}
                            name={this.state.name}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderUserForm() {
        return (
            <UserForm 
                onUserSubmit= {
                    (name, color) => {
                        this.handleUserSubmit(name);
                        this.handleUserColor(color);
                    } 
                }
               
            />
        )
     }

};

export default App;