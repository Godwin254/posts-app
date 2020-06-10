import React, { Component } from 'react';
import { render } from 'react-dom';
import PostApp from './PostApp';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <PostApp />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
