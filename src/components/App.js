import React, { Component } from 'react';
import Counter from './Counter';
import CounterContainer from '../containers/CounterContainer'

class App extends Component {
  render() {
      return (
          <CounterContainer>
              <Counter />
          </CounterContainer>
      )
  };
};

export default App;