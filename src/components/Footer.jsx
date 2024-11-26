import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; //assisted by Xpert Assistant
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/sc-ltc" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;