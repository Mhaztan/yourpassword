// src/pages/TipsPage.jsx
import '../assets/TipsPage.css';

function TipsPage() {
    const tips = [
        {
            title: "Why Strong Passwords Matter",
            content: "Strong passwords are the first line of defense against cyber threats. They protect your personal information and accounts from unauthorized access. Using weak or easily guessed passwords can make you an easy target for hackers."
        },
        {
            title: "Common Password Mistakes to Avoid",
            content: "Many people make the mistake of using common words, personal details, or sequential numbers in their passwords. Avoid using your name, date of birth, address, or pet's name. Also, avoid predictable patterns like '123456' or 'password'."
        },
         {
            title: "How to Create Memorable but Strong Passwords",
            content: "A good technique for creating strong but memorable passwords is to use a passphrase, which is a phrase or sentence you can remember. For example, 'My favorite car is a red Ferrari' can be used as a base, and then change some letters, use numbers or special characters like: 'M@ fav0rite c@r is @ r3d F3rrari!'."
        },
         {
            title: "Password Manager Basics",
            content: "Password managers help you generate strong unique passwords for all of your online accounts, without the need of remembering all of them. They can auto-fill the login fields in websites, making logging in a breeze, they are encrypted, and can be safely used."
        },
         {
            title: "Recognizing Phishing Attempts",
            content: "Phishing is a technique that hackers use to steal your passwords and sensitive data by pretending to be a legitimate entity. Always be skeptical about unsolicited emails or messages that ask you for personal information or passwords. Always check the email address and the links provided."
        }

    ];


    return (
        <div className="tips-page">
            <h1 className="tips-title">Password Security Tips</h1>
            <div className="tips-list">
                {tips.map((tip, index) => (
                    <article key={index} className="tip-article">
                         <h2 className="tip-title">{tip.title}</h2>
                        <p className="tip-content">{tip.content}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default TipsPage;