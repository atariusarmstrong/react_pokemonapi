import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trainer from './components/Trainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokemon React App</h1>
        <Trainer />
      </div>
    );
  }
}

export default App;
