import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {toggleCourse} from '../actions/CoursesActions';
import Course from "./Course";

const Day = ({day, courses}) => (
        <li style = {{display:"inline"}}>
            <h1>{day}</h1>
            <ul>
                {
                courses.filter(course => (course.slots[day]))
                        .map(course => (
                        <Course name={course.name} 
                            visible={course.visible} 
                            toggle={() => {console.log("epic1")}} 
                        />))
                }
            </ul>
        </li>
)

export default connect(
    (state) => ({
            courses: state.CoursesReducer.courses,
    }),
    (dispatch) => ({
        
    }),
)(Day);;