import React, { Component } from 'react';
import './App.css';
import Todo  from './component/Todo'

class App extends Component {
  constructor(){
    super();
    this.state={

    };
  }

  render() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}

export default App;
