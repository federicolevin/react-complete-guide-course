import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
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
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass.join(' ')} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        { (context) => !context.authenticated ? <button onClick={context.login}>Log in</button> : null }
      </AuthContext.Consumer>
    </div>
  );
};

Cockpit.propTypes = {
  title: PropTypes.string,
  clicked: PropTypes.func,
  personsLength: PropTypes.number,
  showPersons: PropTypes.bool
}

export default React.memo(Cockpit);