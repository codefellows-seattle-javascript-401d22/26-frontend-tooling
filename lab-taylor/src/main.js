'use strict';

import './style/main.scss';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick(e) {
    this.setState(state => {
      return { content: faker.lorem.sentence() }
    });
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <pre>{cowsay.say({
          text: this.state.content
        })}</pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
