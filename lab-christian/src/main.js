'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="custom-header">
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: 'content propery baby' };
    this.handleButton = this.handleButton.bind(this)
  }

  handleButton(e) {
    this.setState(state => {
      return { content: faker.lorem.sentence() }
    });
  }

  render() {
    const cow = cowsay.say({ text: this.state.content });
    return (
      <section>
        <Header />
        <pre onClick={this.handleButton}>click me {this.state.content}</pre>
      </section>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));