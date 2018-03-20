'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import cowsay from 'cowsay-browser';

class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Cowsay what?!?</h1>
      </header>
    );
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: Faker.lorem.sentence(),
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return {content: Faker.lorem.sentence()}
    });
  }

  render() {
    const cow = cowsay.say({ text: this.state.content});
    return(
      <div>
        <Navbar />
        <pre onClick={this.handleClick}>{cow}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));