import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] contructor');
  }

  state = {
    persons: [
      { id: 'aaa', name: 'Fede', age: 27},
      { id: 'aab', name: 'Manu', age: 29},
      { id: 'aac', name: 'Max', age: 22}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log(['App.js shouldComponentUpdate']);
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
        return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    let cockpit = null;
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}
          login={this.loginHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit })}}>Toggle Cockpit</button>
        { cockpit }
        { persons }
      </Aux>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default withClass(App, styles.App);