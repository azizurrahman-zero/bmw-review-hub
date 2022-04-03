import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default NavBar;