import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <img className='desktop-img' src="/images/construction.png" alt="construction" />
            <img className='mobile-img' src="/images/construction-responsive.png" alt="construction" />
            <Link to="/">Back to Homepage</Link>
        </div>
    );
};

export default About;