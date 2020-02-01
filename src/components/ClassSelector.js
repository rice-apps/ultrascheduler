import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {toggleCourse} from '../actions/CoursesActions';

const ClassSelector = ({courses, toggleCourse}) => {
    return <div />;
}

export default connect(
        (state) => ({
                courses: state.CoursesReducer.courses,
        }),
        (dispatch) => ({
                toggleCourse: crn => dispatch(toggleCourse(crn))
        }),
)(ClassSelector);