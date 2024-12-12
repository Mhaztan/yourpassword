// src/pages/GeneratorPage.jsx
import { useState, useEffect } from 'react';
import '../assets/GeneratorPage.css';

function GeneratorPage() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [errorMessage, setErrorMessage] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [passwordHistory, setPasswordHistory] = useState(() => {
      const storedHistory = localStorage.getItem('passwordHistory');
        return storedHistory ? JSON.parse(storedHistory) : [];
      });
    const [historyFilter, setHistoryFilter] = useState('date');

     const [selectedRecipe, setSelectedRecipe] = useState('custom');
    const [recipes, setRecipes] = useState(() => {
        const storedRecipes = localStorage.getItem('passwordRecipes');
        return storedRecipes ? JSON.parse(storedRecipes) : [];
    });
    const [newRecipeName, setNewRecipeName] = useState('');
    const [showCustomRecipeInput, setShowCustomRecipeInput] = useState(false);
    const [newRecipe, setNewRecipe] = useState({
      name: '',
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialChars: true,
    });
     useEffect(() => {
          localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
      }, [passwordHistory]);
      useEffect(() => {
          localStorage.setItem('passwordRecipes', JSON.stringify(recipes));
      }, [recipes]);


      const predefinedRecipes = {
            "basic": {
               name: "Basic Secure",
                length: 12,
              uppercase: true,
              lowercase: true,
                numbers: true,
                specialChars: false
            },
            "complex": {
               name: "Highly Complex",
                length: 20,
                uppercase: true,
              lowercase: true,
                numbers: true,
              specialChars: true
            },
            "phrase": {
              name: "Passphrase",
                length: 25,
                uppercase: false,
                lowercase: true,
                numbers: true,
              specialChars: true,
            }
        };

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


     useEffect(() => {
            if (selectedRecipe === "custom") {
               //do nothing
            }
             else if(recipes.find(r => r.name === selectedRecipe))
             {
                  const selected = recipes.find(r => r.name === selectedRecipe);
                    setPasswordLength(selected.length);
                    setIncludeUppercase(selected.uppercase);
                    setIncludeLowercase(selected.lowercase);
                     setIncludeNumbers(selected.numbers);
                     setIncludeSpecialChars(selected.specialChars);
             }
            else if (predefinedRecipes[selectedRecipe]){
                 const selected = predefinedRecipes[selectedRecipe];
                setPasswordLength(selected.length);
                setIncludeUppercase(selected.uppercase);
                setIncludeLowercase(selected.lowercase);
                setIncludeNumbers(selected.numbers);
                setIncludeSpecialChars(selected.specialChars);
            }
         }, [selectedRecipe, recipes]);

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
          savePasswordHistory(randomPassword);
    };

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
      if (password) {
           navigator.clipboard.writeText(password)
              .then(() => {
                   alert('Password copied to clipboard!');
                })
                .catch(err => {
                    alert('Error copying password to clipboard:', err);
                });
        }
    };
     const savePasswordHistory = (password) => {
            const newHistoryItem = {
              password: password,
              date: new Date().toLocaleString(),
                length: password.length,
            };
            setPasswordHistory(prevHistory => [newHistoryItem, ...prevHistory]);
        };
     const clearPasswordHistory = () => {
            if (window.confirm("Are you sure you want to clear your password history?")) {
              setPasswordHistory([]);
             }
         };

   const sortedHistory = [...passwordHistory].sort((a, b) => {
         if (historyFilter === "date") {
              return new Date(b.date) - new Date(a.date); // Sort by most recent
          } else if (historyFilter === "length") {
              return b.length - a.length; // Sort by length
        }
        return 0; // No sort
    });

   const handleAddRecipe = () => {
      if (newRecipeName.trim() === "") {
         alert("Please add a name for your recipe");
         return;
      }
      if(recipes.find(r => r.name === newRecipeName)) {
         alert("A recipe with that name already exists");
        return;
      }

       const newCustomRecipe = {
          name: newRecipeName,
          length: passwordLength,
           uppercase: includeUppercase,
           lowercase: includeLowercase,
           numbers: includeNumbers,
           specialChars: includeSpecialChars,
       };
        setRecipes(prevRecipes => [...prevRecipes, newCustomRecipe]);
        setNewRecipeName("");
        setShowCustomRecipeInput(false);
    };
     const handleDeleteRecipe = (recipeToDelete) => {
          if(window.confirm(`Are you sure you want to delete the recipe '${recipeToDelete.name}'?`)) {
               setRecipes(recipes.filter(r => r.name !== recipeToDelete.name));
            }
        };


    return (
        <div className="generator-page">
            <h1 className="generator-title">Password Generator</h1>
             <div className="recipes-section">
                  <label htmlFor="recipeSelect">Choose a Recipe:</label>
                  <select id="recipeSelect" value={selectedRecipe} onChange={e => setSelectedRecipe(e.target.value)}>
                       <option value="custom">Custom</option>
                         {Object.keys(predefinedRecipes).map(key => (
                            <option key={key} value={key}>{predefinedRecipes[key].name}</option>
                           ))}
                       {recipes.map((recipe, index) => (
                         <option key={index} value={recipe.name}>{recipe.name}</option>
                        ))}
                   </select>
              </div>
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
                 <p style={{ color: strengthLabel[passwordStrength].color }}>Password Strength: {passwordStrength}</p>
                    <p>{password}</p>
                    <button onClick={handleCopyPassword} className="copy-button">Copy to Clipboard</button>
                 </div>
              )}
            <div className="history-section">
                <button className="history-toggle-button" onClick={() => setShowHistory(!showHistory)}>
                    {showHistory ? "Hide Password History" : "Show Password History"}
                </button>
                {showHistory && (
                    <div className="history-content">
                           <div className="history-controls">
                                   <label htmlFor="historyFilter">Filter by:</label>
                                   <select id="historyFilter" value={historyFilter} onChange={e => setHistoryFilter(e.target.value)}>
                                       <option value="date">Date</option>
                                       <option value="length">Length</option>
                                   </select>
                                <button onClick={clearPasswordHistory} className="clear-history-button">Clear History</button>
                           </div>
                            {sortedHistory.length > 0 ? (
                            <ul className="history-list">
                                 {sortedHistory.map((item, index) => (
                                     <li key={index} className="history-item">
                                        <span className="password-entry">{item.password}</span>
                                         <span className="password-date">{item.date}</span>
                                          <span className="password-length">Length: {item.length}</span>
                                     </li>
                                 ))}
                            </ul>
                             ) : (
                             <p className="empty-history">No password history.</p>
                            )}
                           <p className="history-disclaimer">
                              <span style={{ fontWeight: 'bold', color: 'red'}}>Disclaimer:</span>
                              The password history is stored locally in your browser`s local storage. Clearing your browser`s storage will remove this history. Please be aware of security implications.
                           </p>
                     </div>
                )}
            </div>
            <div className="custom-recipes-section">
                <button onClick={() => setShowCustomRecipeInput(!showCustomRecipeInput)} className="custom-recipe-toggle-button">
                     {showCustomRecipeInput ? "Hide Custom Recipe" : "Create Custom Recipe"}
                  </button>
                 {showCustomRecipeInput && (
                   <div className="custom-recipe-form">
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            value={newRecipeName}
                             onChange={(e) => setNewRecipeName(e.target.value)}
                        />
                        <button onClick={handleAddRecipe} className="add-recipe-button">Save Recipe</button>
                   </div>
                 )}
                 {recipes.length > 0 && (
                     <div className="custom-recipes-list">
                      <h3>Custom Recipes:</h3>
                          {recipes.map((recipe, index) => (
                            <div key={index} className="custom-recipe-item">
                                <span>{recipe.name}</span>
                                 <button className="delete-recipe-button" onClick={() => handleDeleteRecipe(recipe)}>Delete</button>
                             </div>
                          ))}
                     </div>
                 )}
            </div>
        </div>
    );
}

export default GeneratorPage;