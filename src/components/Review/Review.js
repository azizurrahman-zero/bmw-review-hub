import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { picture, rating, name, reviewText } = review;
    return (
        <div className='review'>
            <div className="img-section">
                <img src={picture} alt={name} />
                <small className='rating'>{rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></small>
            </div>
            <div className="text-section">
                <h3 className='reviewer'>{name}</h3>
                <p className='review-text'>{reviewText}</p>
            </div>
        </div>
    );
};

export default Review;