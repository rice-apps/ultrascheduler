import './App.css'
import React, {Component} from 'react'
import Header from "./components/Header";
import MyCalendar from "./components/Calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, Views, momentLocalizer }  from "react-big-calendar"
import moment from 'moment'

const localizer = momentLocalizer(moment)

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
        <Header />
        <MyCalendar />
        <Calendar
        events={[{
          id: 0,
          title: ";lakjf;aldfjs;",
          desc: "hello world :)",
          allDay:true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
        },
        {
          id: 1,
          title: "hour event",
          allDay:false,
          start: new Date(2015, 3, 0, 9, 25, 0, 0),
          end: new Date(2015, 3, 1, 10, 40, 0, 0),
        }]}
        step={5}
        timeslots={8}
        localizer={localizer}
        defaultView={Views.WEEK}
        defaultDate={new Date(2015, 3, 12)}
         />
    </div>
  }
}

export default App;
