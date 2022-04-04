import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home'>
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
            <div className="review-section">
                <h3>Customer Review</h3>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review =>
                            <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                    }
                </div>
                <Link to="/reviews">See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;