import './App.css'
import Header from "./components/Header";
import Calendar from "./components/Calendar";


import React, {Component} from 'react'

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
        <Header />
        <Calendar />
    </div>
  }
}

export default App;
