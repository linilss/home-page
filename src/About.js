import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class About extends Component {
    render() {
        return (
                <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome About</h1>
                </header>
                <p className="App-intro">
                To get saksldn akldsn aksd tarted, edit <code>src/App.js</code> and save to reload.
                </p>
                </div>
        );
    }
}

export default About;
