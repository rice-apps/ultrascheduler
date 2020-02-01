import './App.css'

import React, {Component} from 'react'
import TodoControls from './components/TodoControls'
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
      <TodoControls />
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
    </div>
  }
}

export default App;
