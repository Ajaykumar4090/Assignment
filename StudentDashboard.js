import React, { useState, useEffect } from 'react';
import './StudentDashboard.css'; // Import CSS file

function StudentDashboard() {
    const [timetable, setTimetable] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch timetable and students from API
        setTimetable(['Math', 'Science', 'History']);
        setStudents(['Student A', 'Student B', 'Student C']);
    }, []);

    return (
        <div className="student-dashboard">
            <h1>Student Dashboard</h1>
            <div className="view-timetable">
                <h2>Your Timetable</h2>
                <ul>
                    {timetable.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </ul>
            </div>
            <div className="view-students">
                <h2>Your Classmates</h2>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StudentDashboard;
