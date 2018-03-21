'use strict';

import './style/main.scss';
import { say, DEFAULT, DOGE, DRAGON, HEDGEHOG, KITTY, VADER, TURTLE } from 'cowsay';
import faker from 'faker';
import bobRoss from 'bob-ross-lipsum';
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
      say: bobRoss
      
      
    }
    this.handleClick = this.handleClick.bind(this);
    this.cowSelect = this.cowSelect.bind(this);
    this.saySelect = this.saySelect.bind(this);
    
  }
    
  handleClick(e) {
    this.setState(state => {
      return { content: say({
        text: this.state.say(),
        cow: this.state.cow
      })
      }
    });
  }

  cowSelect(e) {
    this.setState({
      cow: e.target.value,
      // say: this.state.say
    })
  }

  saySelect(e) {
    if(e.target.value === 'bob'){
      this.setState({
        say: bobRoss
      })
    }

    if(e.target.value === 'hack'){
      this.setState({
        say: faker.hacker.phrase
      })
    }

    if(e.target.value === 'lorem'){
      this.setState({
        say: faker.lorem.sentence
      })
    }
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

        <form>
          <label>Select a "say":
            <select onChange={this.saySelect}>
              <option value={'bob'}>Bob Ross</option>
              <option value={'hack'}>Hacker</option>
              <option value={'lorem'}>Lorem</option>
             
            </select>
          </label>
        </form>
        
        <pre>{ this.state.content }</pre>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
