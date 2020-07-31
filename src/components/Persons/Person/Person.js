import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    let authMessage = <p>Please log in</p>;

    if (this.props.isAuthenticated) {
      authMessage = <p>Authenticated!</p>;
    }

    return (
      <Aux>
        { authMessage }
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default withClass(Person, styles.Person);