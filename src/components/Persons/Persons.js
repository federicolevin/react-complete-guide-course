import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person';

class Persons extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...')

    return this.props.persons.map((person, index) => {
      return <Person key={person.id} name={person.name} age={person.age} click={() => this.props.clicked(index)} changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object),
  click: PropTypes.func,
  changed: PropTypes.func
}

export default Persons;