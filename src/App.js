import './App.css'
import React, {Component} from 'react'
import Header from "./components/Header";
import MyCalendar from "./components/Calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, Views, momentLocalizer }  from "react-big-calendar"
import CourseView from "./components/CourseView"
import events from "./constants/TestEvents";
import moment from 'moment'

const localizer = momentLocalizer(moment)

class App extends Component {
  render() {
    return <div className="App" stle={{ display: "inline" }}>
        <Header />
        <CourseView 
          events={events}
          localizer={localizer}
        />
        {/* <Calendar
        step={15}
        timeslots={8}
        localizer={localizer}
        defaultView={Views.WEEK}
        defaultDate={new Date(2015, 3, 0)}
        views={{ month: true, week: CourseView }}
         /> */}
         {/* <MyCalendar /> */}
    </div>
  }
}

export default App;
