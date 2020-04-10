import React, { useState, useEffect } from 'react'
import Header from "./header/Header";
import CourseCalendar from "./calendar/Calendar";
import ClassSelector from "./search/ClassSelector";
import CourseSearch from "./search/CourseSearch";
import config from './config';

const Main = () => {
    const [depts, setDepts] = useState([]);
    const fetchDepts = async () => {
        let response = await fetch(config.backendURL + "/courses/getAllSubjects");
        let result = await response.json();
        return result;
    }
    useEffect(
        () => {
            fetchDepts()
            .then(subjects => {
                setDepts(subjects.map(dept => ({label: dept, value: dept})));
            })
        }, []
    );
    return (
        <div className="App" stle={{ display: "inline" }}>
			<Header />
            <ClassSelector />
            <CourseSearch depts={depts} term="Fall 2017"/>
			<CourseCalendar />
		</div>
    )
}

export default Main;