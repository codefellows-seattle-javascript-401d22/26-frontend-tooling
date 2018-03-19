'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say, DEFAULT, SQUIRREL, KITTY, DRAGON, DOGE, SATANIC } from 'cowsay';
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
      title: 'Cowsay Lab',
    };
    this.selectMenuChange = this.selectMenuChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  selectMenuChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  buttonClick(e) {
    this.setState( state => {
      return { content: say({
        text : faker.lorem.sentence(),
        cow: this.state.value,
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label>Pick an animal:
            <select value={this.state.value} onChange={this.selectMenuChange}>
              <option value={DEFAULT}>Cow</option>
              <option value={SQUIRREL}>Squirrel</option>
              <option value={KITTY}>Cat</option>
              <option value={DRAGON}>Dragon</option>
              <option value={DOGE}>Doge</option>
              <option value={SATANIC}>Satan</option>
            </select>
          </label>
        </form>
        <button onClick={this.buttonClick}>Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));