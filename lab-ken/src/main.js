'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay';

class Navbar extends React.Component {
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
      content: '',
    }

    this.happening = 'coffee';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return { content: cowsay({
        text: faker.lorem.slug
      }), 
      };
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <p onClick={this.handleClick}>Click Me</p>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));