function coursetimes(courseData) {
    /*
    Example:
    courseData = [{
        "days": "MWF",
        "startTime": [9, 25],
        "endTime": [10, 30],
        "courseName": "Calculus III",
        "instructors": ["Teacher A"],
        "CRN": 123456
    }]
    */
    const daysOfWeek = "UMTWRFS";
    let courseTimes = [];

    for (let course of courseData) {
        for (let day of course.days) {
            let hardcodedDay = 12 + daysOfWeek.indexOf(day);
            let courseStart = new Date(2015, 3, hardcodedDay, course.startTime[0], course.startTime[1]);
            let courseEnd = new Date(2015, 3, hardcodedDay, course.endTime[0], course.endTime[1]);

            let description = "Instructors: " + course.instructors.join(", ");
            description += "\nCRN: " + course.crn;

            courseTimes.push(
                {
                    id: coursetimes.id++,
                    title: course.courseName,
                    desc: description,
                    allDay: false,
                    start: courseStart,
                    end: courseEnd
                }
            );
        }
    }
    
    return courseTimes;
}

export default coursetimes;