import React from 'react';
import logo from './../../Assets/logo1.png';
import './Nav.css';
const Nav = ()=>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="app-logo" src={logo} alt="logo"/>
                <p className="app-logo-text">TypeIt</p>
            </div>
            <div className="nav-right">
                <a 
                target="_blank"
                className="nav-nameit-link"
                href="http://Sudipta2002.github.io/nameIt/"
                rel="noreferrer">NameIt</a>
            </div>
        </div>
    )
}
export default Nav;