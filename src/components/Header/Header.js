import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <h3 className='logo-text'>
                <Link to='/'>
                    <span className='colored-text'>BMW</span> Review Hub
                </Link>
            </h3>
            <NavBar></NavBar>
        </header>
    );
};

export default Header;