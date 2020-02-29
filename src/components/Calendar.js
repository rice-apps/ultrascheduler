import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import coursetimes from "../utils/coursetimes";
import moment from 'moment'
import { Calendar, Views, momentLocalizer }  from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const days = ["M", "T", "W", "R", "F", "S", "U"];

const CourseCalendar = ({courses}) => {
    return (
        <div>
            <Calendar
            events = {coursetimes(courses)}
            step={5}
            timeslots={8}
            localizer={localizer}
            defaultView={Views.WEEK}
            defaultDate={new Date(2015, 3, 12)}
            toolbar={false}
            />
        </div>
    )
}

export default connect(
    (state) => ({
            courses: state.CoursesReducer.courses,
    }),
    (dispatch) => ({
        
    }),
)(CourseCalendar);
