import * as ACTIONS from "../actions/CoursesActions"

const defaultCoursesReducerState = {
        courses: [
                {
                        "name": "COMP 182",
                        "crn" : 123456,
                        "instructors": ["Luay, Nakleh"],
                        "visible" : false,
                        "slots": {
                                "T" : [1040, 1105],
                                "R" : [1040, 1105],
                                "F" : [1100, 1215]
                        }
                },
                {
                        "name": "CAAM 210",
                        "crn" : 654321,
                        "instructors": ["Luay, Nakleh"],
                        "visible" : true,
                        "slots": {
                                "M" : [1040, 1105],
                                "W" : [1040, 1105],
                                "S" : [1100, 1215],
                                "U" : [1100, 1215]
                        }
                },
                {
                        "name": "FWIS 151",
                        "crn" : 111111,
                        "instructors": ["Celeste, Mark"],
                        "visible" : true,
                        "slots": {
                                "M" : [1040, 1105],
                                "W" : [1040, 1105],
                                "F" : [1100, 1215],
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
                        let copy = [...state.courses]
                        let crnIdx = copy.findIndex(c => c.crn === action.crn);
                        copy[crnIdx].visible = !copy[crnIdx].visible;
                        return {...state, courses: copy};
                default:
                        return {...state};
        }
}

export default CoursesReducer;
