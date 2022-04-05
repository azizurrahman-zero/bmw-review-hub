import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src="/images/not-found.png" alt="not found" />
            <Link to="/">Back to Homepage</Link>
        </div>
    );
};

export default NotFound;