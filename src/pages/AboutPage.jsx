// src/pages/AboutPage.jsx
import '../assets/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-page">
            <h1 className="about-title">About Password Generator</h1>
             <div className="about-content">
                  <p>
                    This password generator was created with the goal of helping people create strong, secure, and unique passwords to protect their online accounts and data.
                    We believe that everyone deserves to have tools that make it easier to stay safe online.
                  </p>
                  <p>
                   This web application does not store, nor log any of your data, and the passwords are generated on your browser.
                    This is a free tool for anyone who wants to secure their passwords.
                  </p>

                 <h2 className="contact-title">Contact</h2>
                 <div className="contact-details">
                     <p>
                         If you have any questions, suggestions, or feedback, please feel free to contact us at:
                    </p>
                    <p>
                         Email: <a href="mailto:itiriemmanuel2@gmail.com">itiriemmanuel2@gmail.com</a>
                    </p>
                    <p>
                        Github: <a href="https://github.com/mhaztan" target="_blank" rel="noopener noreferrer">github.com/mhaztan</a>
                    </p>
                 </div>
              </div>
        </div>
    );
}

export default AboutPage;