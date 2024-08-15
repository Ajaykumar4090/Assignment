import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './App.css';
import App from './App';
import { UserProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </React.StrictMode>
);
