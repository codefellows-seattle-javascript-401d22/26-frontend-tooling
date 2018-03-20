'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say } from 'cowsay';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1> Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

// <Navbar />

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.happening = 'first day of react';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( () => {
      return { content: say({
        text: faker.lorem.paragraph(),
      }),
      };
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <button onClick={this.handleClick}>Click Me</button>
        <pre>  {this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));