import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css'

const NavBar = ({ open }) => {
    return (
        <nav className={open ? "show" : "hide"}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default NavBar;