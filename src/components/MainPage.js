import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; // Підключаємо стилі для сторінки

const MainPage = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "Як називається точка, яка розташована всередині прямокутника і не є вершиною?",
      options: [
        { id: 'A', text: 'Центр' },
        { id: 'B', text: 'Центроїд' },
        { id: 'C', text: 'Висота' },
        { id: 'D', text: 'Внутрішня точка', correct: true }
      ]
    },
    {
      id: 2,
      question: "Скільки сторін має рівнобічний трикутник?",
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3', correct: true },
        { id: 'C', text: '4' },
        { id: 'D', text: '1' }
      ]
    },
    {
      id: 3,
      question: "Як називається геометрична фігура з чотирма сторонами, в якій протилежні сторони рівні?",
      options: [
        { id: 'A', text: 'Прямокутник' },
        { id: 'B', text: 'Квадрат' },
        { id: 'C', text: 'Трикутник' },
        { id: 'D', text: 'Паралелограм', correct: true }
      ]
    },
    {
      id: 4,
      question: "Як називається гостра кутова частина круга між двома радіусами?",
      options: [
        { id: 'A', text: 'Сегмент' },
        { id: 'B', text: 'Конус' },
        { id: 'C', text: 'Сектор', correct: true },
        { id: 'D', text: 'Арка' }
      ]
    },
    {
      id: 5,
      question: "Як називається лінія, яка перетинає дві паралельні лінії та утворює кути з ними рівні?",
      options: [
        { id: 'A', text: 'Перпендикуляр' },
        { id: 'B', text: 'Пряма' },
        { id: 'C', text: 'Трансверсаль', correct: true },
        { id: 'D', text: 'Ламана' }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const goToHome = () => {
    navigate('/my-curs-web');
  };

  return (
    <div className="main-page">
      <div className="quiz-description">
        <h1 className="quiz-title">Тренажер з геометрії для 8-го класу</h1>
        <p className="quiz-benefit">
          Цей тренажер допоможе учням 8-го класу покращити їх знання з геометрії, вивчаючи ключові
          поняття та відповіді на типові питання, що використовуються на уроках.
        </p>
      </div>
      {showScore ? (
        <div className="score-section">
          <h2>Ваш результат:</h2>
          <p>{score} / {questions.length}</p>
          <button className="btn btn-primary" onClick={goToHome}>Повернутися на головну</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Питання {currentQuestion + 1} з {questions.length}</span>
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className="btn btn-answer"
                onClick={() => handleAnswerOptionClick(option.correct)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
