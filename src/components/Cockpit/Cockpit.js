import React, {useEffect} from "react";

import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Simulating an http request...
    setTimeout(() => {
      // alert('Saved data to cloud');
    }, 1000)
    return () => {
      console.log('[Cockpit.js] Cleanup in useEffect');
    };
  }, []);

  const assignedClasses = [];
  let btnClass = [styles.Button];

  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);