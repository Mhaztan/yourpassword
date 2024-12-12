/* // src/components/Footer.jsx
import { Link } from 'react-router-dom';
import '../assets/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <Link to="/about" className="footer-nav-link">About</Link>
                        </li>
                         <li className="footer-nav-item">
                            <Link to="/terms" className="footer-nav-link">Terms of Service</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/privacy" className="footer-nav-link">Privacy Policy</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/two-factor-education" className="footer-nav-link">Two Factor Auth</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/password-manager-guide" className="footer-nav-link">Password Manager</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/news" className="footer-nav-link">Security News</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/password-game" className="footer-nav-link">Password Game</Link>
                        </li>

                    </ul>
                </nav>
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Password Generator. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

 */

import { Link } from 'react-router-dom';
import '../assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-description">
                    We are passionate about helping you secure your digital life. Explore our resources and stay updated on
                    the latest security best practices and strategies!  Let us help improve your security practices.
                </p>

                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <Link to="/about" className="footer-nav-link">About</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/terms" className="footer-nav-link">Terms of Service</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/privacy" className="footer-nav-link">Privacy Policy</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/two-factor-education" className="footer-nav-link">Two Factor Auth</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/password-manager-guide" className="footer-nav-link">Password Manager</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/news" className="footer-nav-link">Security News</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/password-game" className="footer-nav-link">Password Game</Link>
                        </li>
                    </ul>
                </nav>

                <div className="footer-socials">
                    <a href="https://x.com/aionstech" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/mhaztan" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="www.linkedin.com/in/itiri-emmanuel-983273274" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/aionbyte" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                <p className="footer-copyright">
                    © {currentYear} YourPassword. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;