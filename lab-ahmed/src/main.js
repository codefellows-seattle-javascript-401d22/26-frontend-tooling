'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return{ 
        content: cowsay.say({text : faker.lorem.sentence(10)
        })
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));