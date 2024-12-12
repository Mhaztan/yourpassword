// src/pages/HomePage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Homepage.css';

function HomePage() {
    const [quickPassword, setQuickPassword] = useState('');
    const [quickPasswordLength, setQuickPasswordLength] = useState(8);
    const [errorMessage, setErrorMessage] = useState('');

    const generateQuickPassword = () => {
        if (quickPasswordLength < 6 || quickPasswordLength > 20) {
             setErrorMessage("Password length must be between 6 and 20.");
            return;
         }
         setErrorMessage("");
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        const cryptoRandom = new Uint32Array(quickPasswordLength);
        window.crypto.getRandomValues(cryptoRandom)
        for (let i = 0; i < quickPasswordLength; i++) {
             password += chars.charAt(cryptoRandom[i] % chars.length);
          }
        setQuickPassword(password);
    };

    return (
        <div className="home-page">
            <section className="hero-section">
                <h1 className="hero-title">Generate Strong and Secure Passwords</h1>
                <p className="hero-subtitle">Protect your online accounts with robust, random passwords.</p>
                <Link to="/generate" className="hero-cta">Generate Password Now</Link>
            </section>

            <section className="quick-generator-section">
                <h2 className="section-title">Quick Password Generator</h2>
                  <div className="quick-generator-form">
                     <label htmlFor="quick-password-length">Length (6-20): </label>
                    <input type="number" id="quick-password-length" value={quickPasswordLength} onChange={e => setQuickPasswordLength(parseInt(e.target.value))}/>
                    <button onClick={generateQuickPassword} className="quick-generate-button">Generate</button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {quickPassword && <p className="quick-password-display">{quickPassword}</p>}
            </section>

            <section className="features-section">
                <h2 className="section-title">Key Features</h2>
                <ul className="features-list">
                    <li className="feature-item">Highly random password generation</li>
                    <li className="feature-item">Customizable character sets</li>
                    <li className="feature-item">Password strength indication</li>
                    <li className="feature-item">Secure client-side generation</li>
                     <li className="feature-item">Password history (optional and local)</li>
                </ul>
            </section>


            <section className="call-to-action-section">
                <h2 className="section-title">Explore More Features</h2>
                 <p className="call-to-action-text">
                    Ready to take control of your password security? Dive into our feature-rich password generator and discover how easy it is to create and manage secure passwords.
                    </p>
                <Link to="/generate" className="cta-button">Go to Generator</Link>
            </section>
        </div>
    );
}

export default HomePage;