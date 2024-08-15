import React, { useState } from 'react';
import './TeacherDashboard.css'; // Import CSS file

function TeacherDashboard() {
    const [timetable, setTimetable] = useState([]);
    const [newTimetableEntry, setNewTimetableEntry] = useState('');

    const handleAddTimetableEntry = () => {
        if (newTimetableEntry) {
            setTimetable([...timetable, newTimetableEntry]);
            setNewTimetableEntry('');
        }
    };

    return (
        <div className="teacher-dashboard">
            <h1>Teacher Dashboard</h1>
            <div className="manage-timetable">
                <h2>Manage Timetable</h2>
                <input
                    type="text"
                    placeholder="Add new timetable entry"
                    value={newTimetableEntry}
                    onChange={(e) => setNewTimetableEntry(e.target.value)}
                />
                <button onClick={handleAddTimetableEntry}>Add</button>
                <ul>
                    {timetable.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </ul>
            </div>
            <div className="view-students">
                <h2>View Students</h2>
                {/* Add logic to view and edit students */}
            </div>
        </div>
    );
}

export default TeacherDashboard;
