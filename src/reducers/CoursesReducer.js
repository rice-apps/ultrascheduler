import * as ACTIONS from "../actions/CoursesActions"

const defaultCoursesReducerState = {
        courses: [
                {
                        "name": "COMP 182",
                        "CRN" : 123456,
                        "instructors": ["Luay, Nakleh"],
                        "visible" : true,
                        "slots": {
                                "T" : [1040, 1105],
                                "R" : [1040, 1105],
                                "F" : [1100, 1215]
                        }
                }
        ]
}

const CoursesReducer = (state=defaultCoursesReducerState, action) => {
        switch (action.type) {
                case ACTIONS.ADD_COURSE:
                        return {...state, courses: state.courses.push(action.course)};
                case ACTIONS.REMOVE_COURSE:
                        return {...state, courses: state.courses.filter(c => c.crn != action.crn)};
                case ACTIONS.TOGGLE_COURSE:
                        let course_index = state.courses.find(action.crn);
                        state.courses[course_index].visible = !state.courses[course_index].visible;
                        return {...state};
                default:
                        return {...state};
        }
}

export default CoursesReducer;
