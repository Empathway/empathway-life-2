import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      question: "How often have you felt overwhelmed in the past week?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How would you rate your sleep quality recently?",
      options: ["Excellent", "Good", "Average", "Poor", "Terrible"]
    },
    {
      question: "How often do you experience feelings of anxiety?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Constantly"]
    },
    {
      question: "How connected do you feel to others?",
      options: ["Very Connected", "Somewhat Connected", "Neutral", "Somewhat Isolated", "Very Isolated"]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    const answeredCount = Object.keys(newAnswers).length;
    setProgress((answeredCount / questions.length) * 100);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () =>
    Object.values(answers).reduce((sum, val) => sum + (5 - val), 0);

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setProgress(0);
  };

  return (
    <div className="assessment-container py-12 px-8 bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Mental Health Assessment</h2>

      <div className="progress-bar bg-gray-700 rounded-full h-2 mb-8">
        <div
          className="progress-fill bg-primary h-2 rounded-full transition-width duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showResults ? (
        <div className="question-container">
          <h3 className="question-text text-xl font-semibold mb-4 text-white">
            {questions[currentQuestion].question}
          </h3>
          <div className="options-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((opt, i) => (
              <ScaleButton
                key={i}
                onClick={() => handleAnswer(i)}
                isSelected={answers[currentQuestion] === i}
                value={i}
              >
                {opt}
              </ScaleButton>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-container text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Your Wellness Score: {calculateScore()}/20
          </h3>
          <p className="mb-6 text-lg text-muted-foreground">
            {calculateScore() >= 16
              ? "You're showing great resilience! Consider exploring our mindfulness resources."
              : "Your responses suggest you might benefit from additional support. Remember, help is available."}
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={resetAssessment}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Retake Assessment
            </button>
            <Link
              to="/sessions"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              Receive Results
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const ScaleButton = ({ children, onClick, isSelected }) => (
  <button
    className={`scale-button w-full py-3 rounded-lg border ${
      isSelected ? 'border-primary bg-primary/20' : 'border-gray-600'
    } hover:bg-primary/10 transition`}
    onClick={onClick}
  >
    {children}
  </button>
);

ScaleButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default Assessment;
