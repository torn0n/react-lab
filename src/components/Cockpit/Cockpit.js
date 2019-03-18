import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Saved data to the cloud!');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup in useEffect')
      };
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup in 2nd useEffect')
      };
    })

    let btnClass = '';
    if (props.showPersons){
        btnClass = styles.Red;
    } 

    const assignClasses = [];
    if (props.persons.length <= 2){
      assignClasses.push(styles.red);
    }

    if (props.persons.length <= 1){
      assignClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p className={assignClasses.join(' ')} >
            This is really working !
            </p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;