// src/pages/PhishingSimulationPage.jsx
import  { useState } from 'react';
import '../assets/PhishingSimulationPage.css';

function PhishingSimulationPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
     const [quizCompleted, setQuizCompleted] = useState(false);
     const [showAnswer, setShowAnswer] = useState(false);


    const phishingExamples = [
          {
            title: "Urgent Account Verification",
             content: "Dear user, We have detected unusual activity in your account. To avoid suspension, please verify your account details immediately by clicking the following link: [malicious link].",
            isPhishing: true,
            explanation: "This is a classic phishing attempt using urgency and a link to a fake login page."
        },
        {
            title: "Fake Bank Notification",
            content: "Your bank account has been temporarily locked due to suspicious activity. Please click here to restore access: [malicious link].",
            isPhishing: true,
            explanation: "This email pretends to be from a bank. Banks will never ask to click on a link in an email."
        },
       {
            title: "Package Delivery Issue",
             content: "Your package is awaiting delivery, but there was a problem with the shipping information. Click this link to update: [malicious link].",
             isPhishing: true,
             explanation: "This tries to scare the user using a delivery problem and then ask for private info in the fake website."
         },
        {
            title: "Password reset request",
            content: "Dear user, a password reset request has been made to your account, if you didn't request it, please ignore it. If you did, click on the link: [malicious link].",
            isPhishing: true,
            explanation: "This is an attempt to make you click on a phishing link pretending to be an email service."
        },
        {
              title: "Genuine Newsletter",
             content: "Hi [user], Here's the latest information from our website, we hope you like this new information about security: [legitimate link].",
              isPhishing: false,
               explanation: "This is a normal newsletter, it has a clear purpose, and it doesn't ask for passwords or private info."
           },
        {
          title: "Free Gift Card",
          content: "Congratulations! You've been selected to receive a free gift card. Claim it now: [malicious link].",
          isPhishing: true,
            explanation: "Phishers often use free gifts or prizes to tempt users into giving up their information."
         },
           {
              title: "Order Confirmation",
            content: "Thank you for your order. Your order number is #12345. If you have not requested this, please contact us at: [legitimate contact info]",
           isPhishing: false,
             explanation: "A real order confirmation does not require the user to login into a link."
        }
    ];

      const quizQuestions = [
        {
           text: "You receive an email saying you won a lottery. It asks you to click a link to claim your prize. Is it a phishing attempt?",
           options: ["Yes", "No"],
           correctAnswer: "Yes"
         },
       {
            text: "You get a message from your bank asking for your password for verification. Is it a phishing attempt?",
            options: ["Yes", "No"],
           correctAnswer: "Yes"
       },
          {
              text: "You receive a newsletter with a link to the blog. Is it a phishing attempt?",
             options: ["Yes", "No"],
              correctAnswer: "No"
        },
        {
            text: "An email states that your social media account has been hacked, and asks to click a link to log back in. Is it a phishing attempt?",
           options: ["Yes", "No"],
            correctAnswer: "Yes"
         },
        {
          text: "An email from your favorite store sends you a thank you for a recent purchase, and contains the order number and a link to the confirmation. Is it a phishing attempt?",
            options: ["Yes", "No"],
           correctAnswer: "No"
         }
      ];

    const startQuiz = () => {
       setQuizStarted(true);
    };

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);
         setShowAnswer(true);
    };

    const nextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
          setShowAnswer(false);
           setCurrentQuestion(currentQuestion + 1);
          }
         else {
           setQuizCompleted(true);
         }
    };

      const resetQuiz = () => {
          setQuizStarted(false);
        setCurrentQuestion(0);
        setUserAnswers([]);
         setQuizCompleted(false);
        setShowAnswer(false);
    };
    const calculateScore = () => {
        let correctAnswers = 0;
       for (let i = 0; i < quizQuestions.length; i++) {
             if (userAnswers[i] === quizQuestions[i].correctAnswer) {
                correctAnswers++;
            }
       }
        return `${correctAnswers} out of ${quizQuestions.length} correct`;
    };


    return (
        <div className="phishing-simulation-page">
            <h1 className="phishing-title">Phishing Simulation</h1>
             <div className="phishing-section">
                 <h2 className="phishing-section-title">Phishing Examples</h2>
                     <div className="phishing-examples">
                          {phishingExamples.map((example, index) => (
                             <article key={index} className="phishing-example">
                                 <h3 className="example-title" style={{ color: example.isPhishing ? "red" : "green"}}>
                                     {example.title}
                                    </h3>
                                <p className="example-content">
                                    {example.content}
                                 </p>
                                   <p className="explanation">
                                    <span style={{ fontWeight: 'bold'}}>Explanation:</span> {example.explanation}
                                     </p>
                              </article>
                           ))}
                    </div>
            </div>
               <div className="quiz-section">
                <h2 className="phishing-section-title">Phishing Quiz</h2>
                {!quizStarted ? (
                  <button onClick={startQuiz} className="start-quiz-button">Start Quiz</button>
                 ) : quizCompleted ? (
                   <div className="quiz-results">
                      <p>
                          Quiz Completed! Your score is: <span style={{ fontWeight: "bold" }}> {calculateScore()} </span>
                      </p>
                        <button onClick={resetQuiz} className="start-quiz-button">Reset Quiz</button>
                  </div>
                   ) : (
                       <div className="quiz-content">
                          <p className="question-text">{quizQuestions[currentQuestion].text}</p>
                             <div className="options-list">
                             {quizQuestions[currentQuestion].options.map((option, index) => (
                                  <button key={index}
                                      className="option-button"
                                       onClick={() => handleAnswer(option)}
                                    >
                                         {option}
                                </button>
                              ))}
                               </div>
                           {showAnswer && (
                               <div className="quiz-answer">
                                  <p>
                                      { userAnswers[currentQuestion] === quizQuestions[currentQuestion].correctAnswer ? <span style={{ color: 'green'}}>Correct! </span> : <span style={{ color: 'red'}}>Incorrect. </span>} The correct answer was <span style={{ fontWeight: 'bold'}}> {quizQuestions[currentQuestion].correctAnswer} </span>
                                   </p>
                                    <button onClick={nextQuestion} className="next-question-button">
                                       {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next Question"}
                                     </button>
                                </div>
                            )}
                   </div>
                   )}
             </div>
        </div>
    );
}

export default PhishingSimulationPage;