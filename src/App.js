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

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        { name: newName, age: 18},
        { name: 'Compote', age: 14},
        { name: 'Console', age: 11}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: 'Thomas', age: 18},
        { name: event.target.value, age: 14},
        { name: 'Console', age: 11}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

     return (
      <div className="App">
        <header className="App-header">
          <h1>Hey, I'm Thomas !</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is really working !
          </p>
          <button 
          style={style}
          onClick={() => this.switchNameHandler('Jesus')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Japon')} 
            changed={this.nameChangedHandler}> My Hobbies : VideoGames </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </header>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, I\'m Thomas !')); */
  }
}

export default App;
