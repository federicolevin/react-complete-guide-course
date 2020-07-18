import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fede', age: 27},
      { name: 'Manu', age: 29},
      { name: 'Max', age: 22}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log("Switch name clicked");
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Manu', age: 29},
        { name: 'Max', age: 22}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Fede', age: 27},
        { name: event.target.value, age: 29},
        { name: 'Max', age: 22}
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
        { persons }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;