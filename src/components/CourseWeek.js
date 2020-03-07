import React from 'react'
import {connect} from 'react-redux';
import * as dates from 'date-arithmetic'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'
import { WEEKSTART } from '../constants/DefaultDateInfo'

class CourseWeek extends React.Component {
    static navigate = (date, action) => {
        return date
    }
    static title = date => {
      return `My Awesome Course Schedule`
    }
    render() {
        const range = Array.from({length: 7}, (x,i) => dates.add(WEEKSTART, i, 'day'));
        return (
            <TimeGrid
                {...this.props} 
                min={new Date(0, 0, 0, 7, 0, 0, 0)} 
                max={new Date(0, 0, 0, 22, 0, 0, 0)} 
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
