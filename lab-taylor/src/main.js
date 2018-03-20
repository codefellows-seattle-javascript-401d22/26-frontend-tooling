'use strict';

import './style/main.scss';
import { say, DEFAULT, DOGE, DRAGON, HEDGEHOG, KITTY, VADER, TURTLE } from 'cowsay';
import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({
        text: 'Click dat button to generate some random text!',
        cow: DEFAULT,
      }),
      
    }
    this.cowSelect = this.cowSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick(e) {
    this.setState(state => {
      return { content: say({
        text: faker.hacker.phrase(),
        cow: this.state.cow
      })
      }
    });
  }

  cowSelect(e) {
    this.setState({
      cow: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <form>
          <label>Select a "cow":
            <select value={this.state.cow} onChange={this.cowSelect}>
              <option value={DEFAULT}>Cow</option>
              <option value={DOGE}>Doge</option>
              <option value={DRAGON}>Dragon</option>
              <option value={HEDGEHOG}>Hedgehog</option>
              <option value={KITTY}>Kitty</option>
              <option value={VADER}>Vader</option>
              <option value={TURTLE}>I like turtles</option>
            </select>
          </label>
        </form>
        <pre>{ this.state.content }</pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
