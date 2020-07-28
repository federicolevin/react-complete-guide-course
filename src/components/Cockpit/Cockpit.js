import React, {useEffect} from "react";
import styles from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // Simulating an http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000)
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] Cleanup in useEffect');
    };
  }, []);

  const assignedClasses = [];
  let btnClass = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  if (props.showPersons) {
    btnClass.push(styles.Red);
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;