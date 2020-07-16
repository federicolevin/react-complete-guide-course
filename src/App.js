import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fede', age: 27},
      { name: 'Manu', age: 29},
      { name: 'Max', age: 22}
    ]
  };

  switchNameHandler = () => {
    // console.log("Switch name clicked");
    this.setState({
      persons: [
        { name: 'Federico', age: 27},
        { name: 'Manuel', age: 29},
        { name: 'Maximilian', age: 22}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My Hobbies: Soccer</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;