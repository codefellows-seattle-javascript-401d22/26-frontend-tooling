'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({text: faker.hacker.phrase()}),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return { content: say({text: faker.hacker.phrase()}) };
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <button onClick={this.handleClick}>Click me!</button>
        <pre>{this.state.content}</pre>
      </div> 
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));