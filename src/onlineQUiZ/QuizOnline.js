import React, { useState } from 'react';
import './App.css';
import NavBar from "./NavBar"
import quesArray from "./questions.json";


const App = () => {

  //defining State variables
  const [currentQIndx, setcurrentQIndx] = useState(0);
  //dont show any seclection at starts
  const [selectedOption, setSelectedOption] = useState(''); // null or ''
  //starting userScore is 0
  const [userScore, setUserScore] = useState(0);
  //at end of quiz showScore, currently it is false, when all quesArray asked it will be true
  const [showScore, setShowScore] = useState(false);
  const [showImg, setShowImg] = useState('');

  //set selected option which user select
  const eventOptionSelect = (option) => {
    //user only select option once
    if (!selectedOption)
      setSelectedOption(option);
  };

  const eventNextQuestion = () => {
    //if correct answer add in user userScore
    if (selectedOption === quesArray[currentQIndx].answer) {
      setUserScore(userScore + 1);
    }

    setSelectedOption(''); // for next question make it null [not selected]

    //check if quiz is finished
    if (currentQIndx + 1 < quesArray.length) {
      setcurrentQIndx(currentQIndx + 1);
    } else {
      setShowScore(true);

      
      //setShowImg(`/images/logo192.png`);
      if (userScore === quesArray.length) {
        //const imageUrl =+ './public/images/firework.jfif';
      }
    }
  };

  return (

    
    <div className="app">
      <NavBar />
      
      {
        showScore ? (
          <div className="quiz-section">
            You scored {userScore} out of {quesArray.length}
            <div className="question-section">
            
            </div>
          </div>
        ) : (
          <div className="quiz-section">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQIndx + 1}</span>/{quesArray.length}
              </div>
              <div className="question-text">{quesArray[currentQIndx].question}</div>
            </div>
            <div className="options-section">
              {quesArray[currentQIndx].options.map((option, QuesOptionIndex) => {

                //console.log(option+" => "+QuesOptionIndex);
                const isCorrect = QuesOptionIndex === quesArray[currentQIndx].correctOptionIndex;
                const isSelected = selectedOption === option;

                // Applying different classes based on correctness and selection
                const optionClass = isSelected
                  ? isCorrect
                    ? 'correct'
                    : 'wrong'
                  : '';

                //console.log(" optionClass => "+optionClass);

                return (
                  <button
                    key={QuesOptionIndex}
                    className={`option ${optionClass}`}
                    onClick={() => eventOptionSelect(option)}
                  >
                    {option}
                  </button>
                )

              })
              }
      
            </div>
            <button className="next-button" onClick={eventNextQuestion}>
              Next Question
            </button>
          </div>
        )}
    </div>
  );
};

export default App;