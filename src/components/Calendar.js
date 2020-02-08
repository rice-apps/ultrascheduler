import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {toggleCourse} from '../actions/CoursesActions';
import Course from "./Course";
import Day from "./Day";

const days = ["M", "T", "W", "R", "F", "S", "U"];

const Calendar = ({courses}) => {
    return (
        <div>
            <h1>{"Days"}</h1>
            <ul style = {{display:"flex", flexDirection:"row"}}>
                {
                    days.map(day => (
                        <Day day={day} courses={courses}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default connect(
    (state) => ({
            courses: state.CoursesReducer.courses,
    }),
    (dispatch) => ({
        
    }),
)(Calendar);;