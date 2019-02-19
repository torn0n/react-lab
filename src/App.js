import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
        <header className="App-header">
          <h1>Hey, I'm Thomas !</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is really working !
          </p>
          <Person name="Thomas" age="28" />
          <Person name="Nutella" age="24" > My Hobbies : VideoGames </Person>
          <Person name="Computer" age="21" />
        </header>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I\'m Thomas !')); */
  }
}

export default App;
