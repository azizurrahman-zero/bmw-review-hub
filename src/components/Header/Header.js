import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='header'>
            <div className='menu'>
                <h3 className='logo-text'>
                    <Link to='/'>
                        <span className='colored-text'>BMW</span> Review Hub
                    </Link>
                </h3>
                <button onClick={() => setOpen(!open)} className='menu-icon'>
                    {open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                </button>
            </div>
            <NavBar
                open={open}
            ></NavBar>
        </header>
    );
};

export default Header;