import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div className='main-section'>
            <div className="text-section">
                <h1 className='tag-line'>If you want to be happy for a lifetime, ride a <span className='colored-text'>BMW.</span></h1>
                <p className='description'>
                    The performance to go fast. The technology to go far.
                    <br />
                    BMW, Where performance and sustainability go hand in hand.
                </p>
                <a href="https://www.bmw.com.bd/">More Details</a>
            </div>
            <div className="img-section">
                <img className='main-image' src="/images/main-section.png" alt="" />
            </div>
        </div>
    );
};

export default Main;