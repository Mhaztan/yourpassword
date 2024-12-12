// src/pages/CheckPage.jsx
import { useState } from 'react';
import '../assets/CheckPage.css';

function CheckPage() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('Weak');
    const [analysis, setAnalysis] = useState([]);
     const strengthLabel = {
        "Weak": {
            color: "red"
        },
        "Medium": {
            color: "blue"
        },
        "Strong": {
            color: "green"
        }
    };

    const analyzePassword = (password) => {
        let strength = 'Weak';
        let analysis = [];

        if (!password) {
            setStrength('Weak');
            setAnalysis([]);
            return;
        }

         if (password.length >= 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
            strength = "Strong";
          }
        else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
              strength = "Medium";
        }

          if (password.length < 8) {
             analysis.push("Password is too short. Use 8 characters at least.");
         }
         if (!/[a-z]/.test(password)) {
            analysis.push("Use at least one lowercase letter.");
         }
        if (!/[A-Z]/.test(password)) {
            analysis.push("Use at least one uppercase letter.");
         }
        if (!/[0-9]/.test(password)) {
            analysis.push("Use at least one number.");
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            analysis.push("Use at least one special character.");
        }


        setStrength(strength);
        setAnalysis(analysis);
    };


    const handlePasswordChange = (event) => {
          const newPassword = event.target.value;
          setPassword(newPassword);
          analyzePassword(newPassword);
        };


    return (
        <div className="check-page">
            <h1 className="check-title">Password Strength Checker</h1>
              <div className="password-input-group">
                 <label htmlFor="passwordInput">Enter your password:</label>
                 <input
                        type="password"
                        id="passwordInput"
                        value={password}
                        onChange={handlePasswordChange}
                 />
              </div>
            {password && (
                 <div className="analysis-section">
                      <p>Password Strength: <span style={{ color: strengthLabel[strength].color }}>{strength}</span></p>
                       {analysis.length > 0 && (
                          <>
                              <h3>Recommendations:</h3>
                                  <ul className="recommendations-list">
                                    {analysis.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                          </>
                      )}
                 </div>
            )}
        </div>
    );
}

export default CheckPage;