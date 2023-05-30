import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const LogoutSuccessful = () => {
    return (
        <div>
            <h1>Successfully Logged Out</h1>
            <h1>You can safely close this window</h1>
            <h2><Link to="/login">SEU Exam Portal</Link></h2>
        </div>
    );
};

export default LogoutSuccessful;