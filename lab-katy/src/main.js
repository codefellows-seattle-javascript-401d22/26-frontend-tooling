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
      content: cowsay.say({ text: 'make me moooo'}),
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( () => {
      return { content: cowsay.say({
        text: faker.lorem.text(),
      }) };
    });
  }
  
  render() {
    return (
      <div>
        <header className='cowsay'>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <body>
          <pre>{this.state.content}</pre>
          <button onClick={this.handleClick}>Click Me!</button>
        </body>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));


