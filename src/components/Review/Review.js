import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { picture, rating, name, reviewText } = review;
    return (
        <div>
            <div className="img-section">
                <img src={picture} alt={name} />
                <p className='rating'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
            </div>
            <div className="text-section"></div>
        </div>
    );
};

export default Review;