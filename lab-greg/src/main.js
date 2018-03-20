'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

let randomMoo = faker.lorem.sentence();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'cowsay app',
      content: null
    }
    this.happening = 'Says the cow';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return { content: say({ text: randomMoo, e: "Xx", T: "U" })}
    })  
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick}>Content: {this.state.content}</p>
        <p>{this.happening}</p>
      </div>  
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));