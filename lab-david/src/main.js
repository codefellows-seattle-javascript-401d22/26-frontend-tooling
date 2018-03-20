'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import cowsay from 'cowsay-browser';

class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Cowsay what?!?</h1>
      </header>
    );
  }
}

class Cowsay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const cow = cowsay.say({
      text: this.props.text,
      e: 'O0',
      cow: cowsay.DRAGON,
    });
    return (
      <div>
        <pre>{cow}</pre>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: Faker.lorem.sentence(),
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return {content: Faker.lorem.sentence()}
    });
  }

  render() {
    const cow = cowsay.say({ text: this.state.content});
    return(
      <div>
        <Navbar />
        <Cowsay text={this.state.content}/>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));