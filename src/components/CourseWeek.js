import React from 'react'
import * as dates from 'date-arithmetic'
import { Navigate } from 'react-big-calendar'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

class CourseWeek extends React.Component {
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
        let range = CourseWeek.range(date)
        return <TimeGrid {...this.props} range={range} eventOffset={15} />
    }
}

export default CourseWeek;
