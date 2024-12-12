// src/pages/PasswordManagerGuidePage.jsx
import '../otherStyles/PasswordManagerGuidePage.css';

function PasswordManagerGuidePage() {
    return (
        <div className="password-manager-guide-page">
            <h1 className="password-manager-title">Password Manager Guide</h1>
            <div className="password-manager-content">
                 <section className="password-manager-section">
                    <h2 className="password-manager-section-title">Why Use a Password Manager?</h2>
                    <p>
                        Password managers are essential tools for anyone who wants to improve their online security. Instead of reusing the same password or having easily guessed passwords, password managers generate strong, unique passwords for every account and store them safely for you.
                    </p>
                </section>
                <section className="password-manager-section">
                    <h2 className="password-manager-section-title">Benefits of Password Managers</h2>
                    <ul>
                        <li><strong>Strong and Unique Passwords:</strong> Generate complex, unique passwords for each account, greatly improving your security.</li>
                        <li><strong>Reduced Password Fatigue:</strong> Only need to remember one master password.</li>
                         <li><strong>Auto-filling:</strong> Automatically log you into websites, saving you time and effort.</li>
                          <li><strong>Secure Storage:</strong> Store passwords in encrypted vaults, keeping them safe from hackers.</li>
                         <li><strong>Protection from Phishing:</strong> Since the password manager will auto-fill on valid websites, it can protect you from phishing attacks, where you are redirected to fake websites.</li>
                     </ul>
                 </section>
                <section className="password-manager-section">
                      <h2 className="password-manager-section-title">Password Manager Comparisons</h2>
                    <p>
                         There are multiple good options for password managers, here are a few reputable ones:
                    </p>
                     <ul>
                           <li><a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer">Bitwarden</a></li>
                           <li><a href="https://1password.com/" target="_blank" rel="noopener noreferrer">1Password</a></li>
                            <li><a href="https://www.dashlane.com/" target="_blank" rel="noopener noreferrer">Dashlane</a></li>
                           <li><a href="https://lastpass.com/" target="_blank" rel="noopener noreferrer">LastPass</a></li>
                      </ul>
                </section>
                   <section className="password-manager-section">
                      <h2 className="password-manager-section-title">How to Choose a Password Manager</h2>
                       <p>
                           When choosing a password manager, look for the following features:
                       </p>
                    <ul>
                      <li> End-to-End encryption to protect your passwords.</li>
                       <li>Compatibility with different platforms (mobile, PC and browsers).</li>
                       <li>A good user interface that you are comfortable using.</li>
                       <li>Good reviews from other users.</li>
                     </ul>
                    </section>
            </div>
         </div>
    );
}

export default PasswordManagerGuidePage;