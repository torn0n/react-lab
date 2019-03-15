import React from 'react';
import Radium from 'radium';
import logo from '../../assets/logo.svg';
import './Cockpit.css';

const cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

    if (props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    } 

    const classes = [];
    if (props.persons.length <= 2){
      classes.push('red');
    }

    if (props.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hey, I'm Thomas !</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p className={classes.join(' ')} >
            This is really working !
            </p>
            <button 
                style={style}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default Radium(cockpit);