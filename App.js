import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrincipalDashboard from './components/PrincipalDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/principal" element={<PrincipalDashboard />} />
                <Route path="/teacher" element={<TeacherDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/" exact element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
