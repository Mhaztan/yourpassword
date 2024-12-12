// src/pages/AdvancedGeneratorPage.jsx
import React, { useState, useEffect } from 'react';
import '../assets/AdvancedGeneratorPage.css';

function AdvancedGeneratorPage() {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [patternType, setPatternType] = useState('none');
    const [customPattern, setCustomPattern] = useState('');
    const [wordCount, setWordCount] = useState(3);
    const [syllableCount, setSyllableCount] = useState(4);
    const [customSyllables, setCustomSyllables] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('Weak');

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

    const wordList = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince"];

    const commonSyllables = ['ba', 'be', 'bi', 'bo', 'bu', 'ca', 'ce', 'ci', 'co', 'cu', 'da', 'de', 'di', 'do', 'du', 'fa', 'fe', 'fi', 'fo', 'fu'];

    const generateRandomWord = () => {
        return wordList[Math.floor(Math.random() * wordList.length)];
    };
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    };
     const generateRandomSymbol = () => {
        const symbols = "!@#$%^&*()_+";
         return symbols.charAt(Math.floor(Math.random() * symbols.length));
    };
    const generateRandomSyllable = (syllableList) => {
        return syllableList[Math.floor(Math.random() * syllableList.length)];
    };
    const generateCustomPatternPassword = () => {
         if (!customPattern) {
           setErrorMessage('Please enter a custom pattern.')
            return;
        }
         setErrorMessage('');

        let generated = '';
        const patternParts = customPattern.split('-');

      for(let part of patternParts) {
          if (part === "word") {
               generated += generateRandomWord()
          } else if (part === "number") {
            generated += generateRandomNumber()
          } else if (part === "symbol") {
              generated += generateRandomSymbol()
          } else {
              generated += part; // Literal characters
           }
        }
         setGeneratedPassword(generated);
         updatePasswordStrength(generated);
    };


    const generateWordBasedPassword = () => {
        if (wordCount <= 0 ) {
            setErrorMessage('Please specify a word count');
             return;
        }
        setErrorMessage('');
      let password = [];
         for (let i = 0; i < wordCount; i++) {
             password.push(generateRandomWord());
             password.push(generateRandomNumber());
              password.push(generateRandomSymbol());
         }
         setGeneratedPassword(password.join(""));
        updatePasswordStrength(password.join(""));
    };

    const generateSyllableBasedPassword = () => {
      if (syllableCount <= 0 ) {
        setErrorMessage('Please specify a syllable count');
          return;
      }
      setErrorMessage('');
      const syllables = customSyllables ? customSyllables.split(',').map(s => s.trim()) : commonSyllables;
       let password = "";
       for (let i = 0; i < syllableCount; i++) {
            password += generateRandomSyllable(syllables);
       }
        setGeneratedPassword(password);
        updatePasswordStrength(password);
    };

    useEffect(() => {
        if (patternType === "custom") {
             generateCustomPatternPassword();
          }
         else if (patternType === "word") {
            generateWordBasedPassword();
         } else if (patternType === "syllable") {
            generateSyllableBasedPassword();
        }
    }, [patternType, customPattern, wordCount, syllableCount, customSyllables]);

     const updatePasswordStrength = (password) => {
        let strength = 'Weak';
        if (password.length >= 10 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
             strength = "Strong";
          }
       else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
              strength = "Medium";
        }
         setPasswordStrength(strength);
    }

     const handleCopyPassword = () => {
      if (generatedPassword) {
           navigator.clipboard.writeText(generatedPassword)
              .then(() => {
                   alert('Password copied to clipboard!');
                })
                .catch(err => {
                    alert('Error copying password to clipboard:', err);
                });
        }
    };


    return (
        <div className="advanced-generator-page">
            <h1 className="advanced-generator-title">Advanced Password Generator</h1>

            <div className="pattern-type-section">
               <label htmlFor="patternSelect">Choose Pattern Type:</label>
                    <select id="patternSelect" value={patternType} onChange={e => setPatternType(e.target.value)}>
                         <option value="none">None</option>
                        <option value="custom">Custom Pattern</option>
                        <option value="word">Word Based</option>
                        <option value="syllable">Syllable Based</option>
                   </select>
            </div>

            {patternType === 'custom' && (
                <div className="custom-pattern-section">
                   <label htmlFor="customPatternInput">Custom Pattern (e.g., word-number-symbol-word):</label>
                    <input type="text"
                           id="customPatternInput"
                           value={customPattern}
                           onChange={e => setCustomPattern(e.target.value)}
                           placeholder="word-number-symbol-word"
                    />
                 </div>
            )}
            {patternType === 'word' && (
                <div className="word-pattern-section">
                      <label htmlFor="wordCountInput">Word Count:</label>
                      <input
                        type="number"
                        id="wordCountInput"
                        value={wordCount}
                        onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
                    />
                </div>
            )}
             {patternType === 'syllable' && (
               <div className="syllable-pattern-section">
                      <label htmlFor="syllableCountInput">Syllable Count:</label>
                    <input
                        type="number"
                        id="syllableCountInput"
                        value={syllableCount}
                        onChange={e => setSyllableCount(parseInt(e.target.value, 10))}
                    />
                    <label htmlFor="customSyllablesInput">Custom Syllables (comma separated):</label>
                     <input
                            type="text"
                            id="customSyllablesInput"
                            value={customSyllables}
                            onChange={e => setCustomSyllables(e.target.value)}
                            placeholder="ba, be, bi"
                    />
                </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
               {generatedPassword && (
                <div className="password-display">
                 <p style={{ color: strengthLabel[passwordStrength].color }}>Password Strength: {passwordStrength}</p>
                    <p>{generatedPassword}</p>
                    <button onClick={handleCopyPassword} className="copy-button">Copy to Clipboard</button>
                 </div>
            )}
        </div>
    );
}

export default AdvancedGeneratorPage;