import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";
import logo from '/src/assets/logo-medium.png'

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-items">
                    <span className="logo-header"><img src={logo} alt="logo"/></span>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/newpost" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>New Post</NavLink></li>
                    <li><NavLink to="/blog-overview" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Blogs overview</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;