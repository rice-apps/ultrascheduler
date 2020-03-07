import * as ACTIONS from "../actions/CoursesActions"

const defaultCoursesReducerState = {
        courses: [
                {
                        "days": "TRF",
                        "startTime": [9, 25],
                        "endTime": [10, 30],
                        "courseName": "COMP 182",
                        "instructors": ["Luay, Nakleh"],
                        "crn": 123456,
                        "visible": true,
                },
                {
                        "days": "MWF",
                        "startTime": [14, 0],
                        "endTime": [14, 50],
                        "courseName": "CAAM 210",
                        "instructors": ["Sershen", "Protasov"],
                        "crn": 654321,
                        "visible": true,
                },
                {
                        "days": "MWF",
                        "startTime": [10, 0],
                        "endTime": [11, 0],
                        "courseName": "FWIS 151",
                        "instructors": ["Smith", "Doe"],
                        "crn": 655657,
                        "visible": true,
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
