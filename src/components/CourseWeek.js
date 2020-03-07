import React from 'react'
import {connect} from 'react-redux';
import * as dates from 'date-arithmetic'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

const max = Math.max
const min = Math.min

class CourseWeek extends React.Component {
    static navigate = (date, action) => {
        return date
    }
    static title = date => {
      return `My Awesome Course Schedule`
    }
    render() {
        const {date, courses} = this.props
        const range = Array.from({length: 7}, (x,i) => dates.add(date, i, 'day'));
        const visible = courses.filter(c => c.visible);
        const startHr = min(8, min.apply(null, visible.map(c => (c.startTime[0] - 1) % 24)));
        const endHr = max(14, max.apply(null, visible.map(c => (c.endTime[0] + 1) % 24)));
        return (
            <TimeGrid
                {...this.props} 
                min={new Date(0, 0, 0, startHr, 30)} 
                max={new Date(0, 0, 0, endHr)} 
                range={range}
                eventOffset={15}/>
        );
    }
}

export default connect(
  (state) => ({
          courses: state.CoursesReducer.courses,
  }),
  (dispatch) => ({}),
)(CourseWeek);
