import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer'

class App extends Component {
    render() {
        return (
            <CounterContainer>
                Counter
            </CounterContainer>
        );
    }
}

export default App;