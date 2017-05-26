import React, { Component } from 'react';
import logo from './logo.svg';
import './css/main.css';

import Cart from './components/cart';
import Todo from './components/todo';
import TimeEvent from './components/timeEvent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Welcome to dockerized board</h3>
                </div>
                <div className="App-intro" id="scrollbar-style-5">
                    <Todo />
                    <Cart />
                    <TimeEvent />
                </div>
            </div>
        );
    }
}

export default App;
