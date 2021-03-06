import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayRoot from './components/DisplayRoot';

class App extends Component {
  state = {number:0}
  render() {
    return (
      <div className="App">
        Hello World
        <AddNumberRoot onClick={function(size){this.setState({number:this.state.number+size});}.bind(this)}></AddNumberRoot>
        <DisplayRoot number={this.state.number}></DisplayRoot>
      </div>
    );
  }
}

export default App;
