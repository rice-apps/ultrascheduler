import './App.css'
import Header from "./components/Header";
import MyCalendar from "./components/Calendar";
import { Calendar, Views }  from "react-big-calendar"
import localizer from 'react-big-calendar/lib/localizers/globalize'
import Globalize from 'globalize'


import React, {Component} from 'react'

Globalize.locale("en");

Globalize.load(
// Core
require( "cldr-data/supplemental/likelySubtags" ),
require( "cldr-data/main/en/numbers" ),
require( "cldr-data/supplemental/plurals" )
);

// Set "en" as our default locale.
const globalizeLocalizer = localizer(Globalize);

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
        localizer={globalizeLocalizer}
        defaultView={Views.WEEK}
        defaultDate={new Date(2015, 3, 12)}
         />
    </div>
  }
}

export default App;
