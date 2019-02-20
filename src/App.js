import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Thomas', age: 28},
      { name: 'Nutella', age: 24},
      { name: 'Computer', age: 21}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons : [
        { name: 'Toto', age: 18},
        { name: 'Compote', age: 14},
        { name: 'Console', age: 11}
      ]
    });
  }

  render() {
     return (
      <div className="App">
        <header className="App-header">
          <h1>Hey, I'm Thomas !</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is really working !
          </p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies : VideoGames </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </header>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I\'m Thomas !')); */
  }
}

export default App;
