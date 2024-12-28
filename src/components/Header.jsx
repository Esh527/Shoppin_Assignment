import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Apple Watch Studio</h1>
            </div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/customize">Customize</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
