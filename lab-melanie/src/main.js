'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className='cowsay-header'>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Cowsay lab',
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState( state => {
      return { content: cowsay.say({
        text : faker.lorem.sentence(),
        e : 'oO',
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.clickEvent}>Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));