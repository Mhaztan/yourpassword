// src/pages/TermsPage.jsx
import '../assets/TermsPage.css';

function TermsPage() {
    return (
        <div className="terms-page">
            <h1 className="terms-title">Terms of Service</h1>
            <div className="terms-content">
                <p>
                    Welcome to the Password Generator website and mobile application (the `Service`). By accessing or using our Service, you agree to comply with and be bound by these Terms of Service (`Terms`). Please read them carefully.
                </p>
                <section className="terms-section">
                    <h2 className="terms-section-title">1. Acceptance of Terms</h2>
                    <p>
                        By using the Service, you confirm your agreement to these Terms. If you do not agree to these Terms, please do not use this Service.
                    </p>
                </section>
                <section className="terms-section">
                    <h2 className="terms-section-title">2. Description of Service</h2>
                    <p>
                        The Service provides a password generator that creates unique, strong passwords based on your selections. The passwords are generated on your browser, we do not save nor have access to your passwords.
                    </p>
                </section>
               <section className="terms-section">
                    <h2 className="terms-section-title">3. User Responsibilities</h2>
                    <p>
                      You are responsible for keeping any generated passwords secure. We are not responsible for any losses or damages that may occur as a result of your use of the passwords generated.
                    </p>
                </section>
                 <section className="terms-section">
                    <h2 className="terms-section-title">4. Modifications to Terms</h2>
                     <p>
                        We reserve the right to modify these Terms at any time. We will not notify you of changes. The current version of the terms is the one on this page.
                    </p>
                </section>
                 <section className="terms-section">
                    <h2 className="terms-section-title">5. Limitation of Liability</h2>
                    <p>
                      The use of this tool is at your own risk. We are not liable for any losses or damages resulting from the use of this website.
                    </p>
                </section>
                 <section className="terms-section">
                    <h2 className="terms-section-title">6. Governing Law</h2>
                    <p>
                         These Terms shall be governed by and construed in accordance with the laws of your location.
                     </p>
                </section>
                 <section className="terms-section">
                    <h2 className="terms-section-title">7. Contact</h2>
                     <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:contact@example.com">contact@example.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default TermsPage;