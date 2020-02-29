import React from 'react'

import * as dates from 'date-arithmetic'
import { Calendar, Views, Navigate } from 'react-big-calendar'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

class MyWeek extends React.Component {
    static range = date => {
      let start = date
      let end = dates.add(start, 6, 'day')
    
      let current = start
      let range = []
    
      while (dates.lte(current, end, 'day')) {
        range.push(current)
        current = dates.add(current, 1, 'day')
      }
    
      return range
    }
    static navigate = (date, action) => {
        return date
    }
    static title = date => {
      return `My Awesome Course Schedule`
    }
    render() {
        let { date } = this.props
        let range = MyWeek.range(date)

        return <TimeGrid {...this.props} range={range} eventOffset={15} />
    }
}

let CustomView = ({ localizer, events }) => (
    <React.Fragment>
        <Calendar
        events={events}
        localizer={localizer}
        defaultView={Views.WEEK}
        defaultDate={new Date(2015, 3, 12)}
        views={{ month: true, week: MyWeek }}
        />
    </React.Fragment>
)

export default CustomView;
