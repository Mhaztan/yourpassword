// src/pages/PrivacyPage.jsx
import '../assets/PrivacyPage.css';

function PrivacyPage() {
    return (
        <div className="privacy-page">
            <h1 className="privacy-title">Privacy Policy</h1>
            <div className="privacy-content">
                <p>
                    Welcome to the Password Generator website and mobile application (the `Service`). This Privacy Policy outlines how we handle information when you use our Service. We are committed to protecting your privacy.
                </p>
                <section className="privacy-section">
                    <h2 className="privacy-section-title">1. Information We Collect</h2>
                    <p>
                        We do not collect any personal identifiable information when you use this service. The application runs completely on your browser and your generated passwords do not leave your browser.
                    </p>
                </section>
                <section className="privacy-section">
                    <h2 className="privacy-section-title">2. How We Use Information</h2>
                    <p>
                      Since we do not collect any personal information, we cannot use it. We do not store, save, nor log any of your passwords.
                    </p>
                </section>
                <section className="privacy-section">
                    <h2 className="privacy-section-title">3. Third-Party Services</h2>
                    <p>
                     This service does not use any third party service for analytic or advertising purposes.
                    </p>
                </section>
                <section className="privacy-section">
                     <h2 className="privacy-section-title">4. Data Security</h2>
                    <p>
                         The passwords that you generate, never leave your computer, since it is generated in your browser. Because of this, we do not have access to them. We can guarantee this because the application is completely client-side.
                    </p>
                </section>
                 <section className="privacy-section">
                     <h2 className="privacy-section-title">5. Changes to This Policy</h2>
                     <p>
                          We reserve the right to modify this Privacy Policy at any time. We will not notify you of changes, please check this page often.
                     </p>
                </section>
                <section className="privacy-section">
                   <h2 className="privacy-section-title">6. Contact</h2>
                    <p>
                          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:itiriemmanuel2@gmail.com">itiriemmanuel2@gmail.com</a>
                    </p>
               </section>
            </div>
        </div>
    );
}

export default PrivacyPage;