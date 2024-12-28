import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Apple Watch Studio. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://www.facebook.com/apple/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://x.com/Apple" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/apple/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
