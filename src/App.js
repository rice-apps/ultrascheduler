import './App.css'
import React, {Component} from 'react'
import Header from "./components/Header";
import CourseCalendar from "./components/Calendar";

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
        <Header />
        <CourseCalendar />
    </div>
  }
}

export default App;
