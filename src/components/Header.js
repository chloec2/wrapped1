import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div className='header'>
            <h1>Wrapped1</h1>
            <div className='links'>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/wrapped">Latest Wrapped</Link>
            </div>
        </div>
    )
}

export default Header
