import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <p className="footer-text">
                    © 2023, Copyright all rights reserved by PLSE
                </p>
                {/* <a href="/" className="footer-link">
                    <svg width={40} height={32} className="footer-svg">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                </a> */}
                <ul className="footer-nav">
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link">
                            Facebook
                        </a>
                    </li>
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link">
                            Twitter
                        </a>
                    </li>
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link">
                            Google
                        </a>
                    </li>
                    <li className="footer-nav-item">
                        <a href="#" className="footer-nav-link">
                            Twitter
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
