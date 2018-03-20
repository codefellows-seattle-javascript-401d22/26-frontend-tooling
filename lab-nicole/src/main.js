'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: null,
      hasClickedButton: false,
    };
    this.title = 'Generate Cowsay Lorem';
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    this.setState(state => {
      return {
        hasClickedButton: true,
        content: cowsay.say({text: faker.lorem.sentence()})
      }
    });
  }

  render() {
    const content = <pre>{this.state.content}</pre>;

    return(
      <div> 
        <div>{this.title}</div>
        {this.state.hasClickedButton && content}
        <button onClick={this.handleEvent}>Click me</button>
      </div>
    )
  }
};

ReactDom.render(<App />, document.getElementById('root'));