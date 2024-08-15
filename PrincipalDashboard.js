import React, { useState } from 'react';
import './PrincipalDashboard.css'; // Import CSS file

function PrincipalDashboard() {
    const [classroomName, setClassroomName] = useState('');
    const [error, setError] = useState('');

    const handleCreateClassroom = () => {
        // Implement the logic for creating a classroom
        if (classroomName.trim() === '') {
            setError('Classroom name cannot be empty');
            return;
        }

        // Reset the state after creating the classroom
        setClassroomName('');
        setError('');
        alert('Classroom created successfully');
    };

    return (
        <div className="principal-dashboard">
            <h1>Principal Dashboard</h1>
            <div className="create-classroom">
                <h2>Create Classroom</h2>
                {error && <div className="error">{error}</div>}
                <input
                    type="text"
                    placeholder="Classroom Name"
                    value={classroomName}
                    onChange={(e) => setClassroomName(e.target.value)}
                />
                <button onClick={handleCreateClassroom}>Create Classroom</button>
            </div>
            <div className="manage-teachers">
                <h2>Manage Teachers</h2>
                {/* Add logic to assign teachers to classrooms */}
            </div>
            <div className="manage-students">
                <h2>Manage Students</h2>
                {/* Add logic to manage students */}
            </div>
        </div>
    );
}

export default PrincipalDashboard;
