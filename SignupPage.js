import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert('Signup successful');
                // Redirect to login page
                window.location.href = '/login';
            } else {
                const errMessage = await response.json();
                setError(errMessage.error || 'Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-root">
            <div className="signup-box">
                <h1 className="signup-title">Sign Up</h1>
                {error && <div className="signup-error">{error}</div>}
                <input
                    type="email"
                    className="signup-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="signup-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    className="signup-input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="signup-button" onClick={handleSignup}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignupPage;
