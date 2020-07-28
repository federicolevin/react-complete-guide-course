import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import './App.css';

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
    showCockpit: true
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

    this.setState({
      persons: persons
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

  render() {
    console.log('[App.js] render');
    let cockpit = null;
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    if (this.state.showCockpit) {
      cockpit = <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} title={this.props.appTitle} />;
    }

    return (
      <div className="App">
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit })}}>Toggle Cockpit</button>
        { cockpit }
        { persons }
      </div>
    );
  }
}

export default App;