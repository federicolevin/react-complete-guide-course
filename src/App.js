import React, {Component} from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

import './App.css';

const StyledButton = styled.button`
  background-color: green;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  color: white;
  
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'aaa', name: 'Fede', age: 27},
      { id: 'aab', name: 'Manu', age: 29},
      { id: 'aac', name: 'Max', age: 22}
    ],
    showPersons: false
  };

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangedHandler(event, person.id)} />;
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        { persons }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;