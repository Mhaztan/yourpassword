// src/pages/PasswordGamePage.jsx
import { useState, useEffect, useRef } from 'react';
import '../otherStyles/PasswordGamePage.css';

function PasswordGamePage() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const timerRef = useRef(null);
     const [errorMessage, setErrorMessage] = useState('');

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

    const generatePassword = () => {
        let chars = "";
        if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) chars += '0123456789';
        if (includeSpecialChars) chars += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

        if(chars.length === 0) {
            setErrorMessage("Please select at least one character set!")
             return;
        }
          if (passwordLength < 6 || passwordLength > 50) {
            setErrorMessage("Password length must be between 6 and 50.");
               return;
          }
         setErrorMessage("");

         let randomPassword = "";
        const cryptoRandom = new Uint32Array(passwordLength);
         window.crypto.getRandomValues(cryptoRandom)
        for (let i = 0; i < passwordLength; i++) {
          randomPassword += chars.charAt(cryptoRandom[i] % chars.length);
         }
         setPassword(randomPassword);
         updatePasswordStrength(randomPassword);
    };
    const updatePasswordStrength = (password) => {
        let strength = 'Weak';
       if (password.length >= 10 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
             strength = "Strong";
          }
       else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
              strength = "Medium";
        }
         updateScore(strength);

    }

  const updateScore = (strength) => {
       if (strength === 'Strong') {
            setScore(prevScore => prevScore + 3);
        } else if (strength === 'Medium') {
            setScore(prevScore => prevScore + 1);
       }
  };

    useEffect(() => {
        if (gameStarted && !gameOver) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [gameStarted, gameOver]);

    useEffect(() => {
        if (timeLeft === 0 && gameStarted) {
            setGameOver(true);
            setGameStarted(false);
        }
    }, [timeLeft, gameStarted]);

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setTimeLeft(60);
        setScore(0);
        setPassword("");
    };

    const resetGame = () => {
        setGameStarted(false);
       setGameOver(false);
      setTimeLeft(60);
        setScore(0);
        setPassword("");
    };


    return (
        <div className="password-game-page">
            <h1 className="game-title">Password Strength Challenge</h1>
           {!gameStarted && !gameOver && (
             <button onClick={startGame} className="start-game-button">Start Game</button>
           )}
            {gameStarted && (
              <div className="game-controls">
                   <p>Time Left: {timeLeft} seconds</p>
                  <p>Score: {score}</p>
                 <div className="generator-form">
                     <div className="input-group">
                        <label htmlFor="passwordLength">Password Length (6-50):</label>
                        <input type="number" id="passwordLength" value={passwordLength} onChange={e => setPasswordLength(parseInt(e.target.value))}/>
                     </div>
                        <div className="checkbox-group">
                            <label htmlFor="includeUppercase">Include Uppercase <input type="checkbox" id="includeUppercase" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} /></label>
                           <label htmlFor="includeLowercase">Include Lowercase <input type="checkbox" id="includeLowercase" checked={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)} /></label>
                            <label htmlFor="includeNumbers">Include Numbers <input type="checkbox" id="includeNumbers" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)}/></label>
                           <label htmlFor="includeSpecialChars">Include Special Characters <input type="checkbox" id="includeSpecialChars" checked={includeSpecialChars} onChange={e => setIncludeSpecialChars(e.target.checked)}/></label>
                      </div>
                       <button onClick={generatePassword} className="generate-button">Generate</button>
                 </div>
                   {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {password && (
                         <div className="password-display">
                            <p style={{ color: strengthLabel[updatePasswordStrength] }}>Password Strength:</p>
                            <p>{password}</p>
                       </div>
                    )}
              </div>
           )}
             {gameOver && (
                 <div className="game-over">
                   <h2>Game Over!</h2>
                   <p>Final Score: {score}</p>
                   <button onClick={resetGame} className="reset-game-button">Play Again</button>
                 </div>
              )}
        </div>
    );
}

export default PasswordGamePage;