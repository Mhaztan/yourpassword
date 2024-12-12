// src/pages/BulkGeneratorPage.jsx
import  { useState } from 'react';
import '../assets/BulkGeneratorPage.css';

function BulkGeneratorPage() {
    const [passwordCount, setPasswordCount] = useState(5);
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
     const [generatedPasswords, setGeneratedPasswords] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const generateBulkPasswords = () => {
         if (passwordCount <= 0 || passwordCount > 100) {
              setErrorMessage("Password count must be between 1 and 100.");
               return;
          }
        if (passwordLength < 6 || passwordLength > 50) {
            setErrorMessage("Password length must be between 6 and 50.");
               return;
        }
          setErrorMessage("");
           let chars = "";
          if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
          if (includeNumbers) chars += '0123456789';
          if (includeSpecialChars) chars += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

           if(chars.length === 0) {
                setErrorMessage("Please select at least one character set!")
                 return;
           }

          let newPasswords = [];
          for (let i = 0; i < passwordCount; i++) {
             let randomPassword = "";
            const cryptoRandom = new Uint32Array(passwordLength);
             window.crypto.getRandomValues(cryptoRandom)
            for (let j = 0; j < passwordLength; j++) {
                 randomPassword += chars.charAt(cryptoRandom[j] % chars.length);
              }
              newPasswords.push(randomPassword);
            }
          setGeneratedPasswords(newPasswords);
    };

     const downloadPasswords = () => {
         if (generatedPasswords.length === 0) {
            alert("Please generate passwords before downloading.");
               return;
          }
        const text = generatedPasswords.join('\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
         a.download = 'passwords.txt';
         document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bulk-generator-page">
            <h1 className="bulk-generator-title">Bulk Password Generator</h1>
            <div className="bulk-generator-form">
                 <div className="input-group">
                     <label htmlFor="passwordCount">Number of Passwords (1-100):</label>
                       <input
                           type="number"
                           id="passwordCount"
                           value={passwordCount}
                            onChange={e => setPasswordCount(parseInt(e.target.value))}
                       />
                </div>
                 <div className="input-group">
                      <label htmlFor="passwordLength">Password Length (6-50):</label>
                    <input type="number" id="passwordLength" value={passwordLength} onChange={e => setPasswordLength(parseInt(e.target.value))}/>
                </div>
                <div className="checkbox-group">
                      <label htmlFor="includeUppercase">Include Uppercase<input type="checkbox" id="includeUppercase" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} /></label>
                      <label htmlFor="includeLowercase">Include Lowercase<input type="checkbox" id="includeLowercase" checked={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)} /></label>
                      <label htmlFor="includeNumbers">Include Numbers<input type="checkbox" id="includeNumbers" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)}/></label>
                      <label htmlFor="includeSpecialChars">Include Special Characters<input type="checkbox" id="includeSpecialChars" checked={includeSpecialChars} onChange={e => setIncludeSpecialChars(e.target.checked)}/></label>
                 </div>
                  <button onClick={generateBulkPasswords} className="generate-button">Generate Passwords</button>
              </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
             {generatedPasswords.length > 0 && (
                 <div className="passwords-display">
                      <ul className="generated-passwords-list">
                             {generatedPasswords.map((password, index) => (
                                 <li key={index} className="password-item">{password}</li>
                             ))}
                     </ul>
                   <button onClick={downloadPasswords} className="download-button">Download Passwords</button>
               </div>
            )}
        </div>
    );
}

export default BulkGeneratorPage;