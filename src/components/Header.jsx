/* // src/components/Header.jsx
import { Link } from 'react-router-dom';
import '../assets/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/generate" className="nav-link">Generate Password</Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/advance-generate" className="nav-link">Advanced Generator</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/check" className="nav-link">Check Password</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/phishing-simulation" className="nav-link">Phishing Simulation</Link>
                    </li>
                     <li className="nav-item">
                       <Link to="/bulk-generate" className="nav-link">Bulk Generator</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tips" className="nav-link">Security Tips</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faKey, faCheck, faShield, faList, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="../../public/yourpassword.png" alt="YourPassword Logo" className="logo-image" /> {/* Replace with your logo */}
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faHome} className="nav-icon" />Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/generate" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faKey} className="nav-icon" />Generate Password
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/advance-generate" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faKey} className="nav-icon" />Advanced Generator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/check" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faCheck} className="nav-icon" />Check Password
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/phishing-simulation" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faShield} className="nav-icon" />Phishing Simulation
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bulk-generate" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faList} className="nav-icon" />Bulk Generator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tips" className="nav-link" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faNetworkWired} className="nav-icon" />Security Tips
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;