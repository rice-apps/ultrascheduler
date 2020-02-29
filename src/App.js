import './App.css'
import Header from "./components/Header";
import MyCalendar from "./components/Calendar";
import { BigCalendar, Calendar, Views }  from "react-big-calendar"
import moment from 'moment'
import localizer from 'react-big-calendar/lib/localizers/moment'
import React, {Component} from 'react'
// import Globalize from 'globalize'



// Globalize.load(
// // Core
// require( "cldr-data/supplemental/likelySubtags" ),
// require( "cldr-data/main/en/numbers" ),
// require( "cldr-data/supplemental/plurals" )
// );

// Globalize.locale("en");

// Set "en" as our default locale.
// const globalizeLocalizer = localizer(Globalize);

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
        <Header />
        <MyCalendar />
        <Calendar
        events={[{
          id: 0,
          title: "hello",
          allDay:true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
        }]}
        step={15}
        timeslots={8}
        localizer={localizer(moment)}
        defaultView={Views.WEEK}
        defaultDate={new Date(2015, 3, 12)}
         />
    </div>
  }
}

export default App;
