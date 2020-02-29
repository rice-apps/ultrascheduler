import React from 'react'
import * as dates from 'date-arithmetic'
import { Navigate } from 'react-big-calendar'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

class CourseWeek extends React.Component {
    static range = date => {
      let start = new Date(2015, 3, 12)
      let end = new Date(2015, 3, 18)
    
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
        return <TimeGrid
          {...this.props} 
          min={new Date(2015, 3, 12, 7, 0, 0, 0)} 
          max={new Date(2015, 3, 12, 22, 0, 0, 0)} 
          range={range}
          eventOffset={15} />
    }
}

export default CourseWeek;
