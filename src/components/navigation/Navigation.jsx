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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/newpost">New post</NavLink></li>
                    <li><NavLink to="/overview">Overview</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;