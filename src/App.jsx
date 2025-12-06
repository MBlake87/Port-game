import { useState } from "react";
import { PORT_QUESTIONS } from "./portData";
import "./App.css";

function getRandomQuestion() {
  //gets a random port from the list and returns
  const rand = Math.floor(Math.random() * PORT_QUESTIONS.length);
  return PORT_QUESTIONS[rand];
}

function getOptions(correctPort, allQuestions, optionCount = 4) {
  //select all port numbers from the list, remove the correct answer and set to otherPorts
  const otherPorts = allQuestions
    .map((q) => q.port)
    .filter((p) => p !== correctPort);

  //shuffle port number
  const shuffled = otherPorts.sort(() => 0.5 * Math.random());
  //pick 3 incorrect ports
  const incorrect = shuffled.slice(0, optionCount - 1);
  //put all answers into array
  const answers = [...incorrect, correctPort];

  return answers.sort(() => 0.5 * Math.random());
}

function App() {
  const init = getRandomQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(init);
  const [options, setOptions] = useState(
    getOptions(init.port, PORT_QUESTIONS, 4)
  );
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  //function to setup new question
  function setupNewQuestion() {
    const q = getRandomQuestion();
    const opts = getOptions(q.port, PORT_QUESTIONS, 4);

    setCurrentQuestion(q);
    setOptions(opts);
    setSelected(null);
    setIsCorrect(null);
  }

  function handleOptionClick(port) {
    //if player has selected answer, stop additional clicks
    if (selected !== null) return;
    //set selected port
    setSelected(port);
    //check if correct
    const correct = port === currentQuestion.port;
    setIsCorrect(correct);
    //handle score
    if (correct) {
      setScore((prev) => prev + 1);
    }
  }

  //handle next question
  function handleNext() {
    setQuestionNumber((prev) => prev + 1);
    setupNewQuestion();
  }
  //check question has loaded
  if (!currentQuestion) return <div>Loading…</div>;

  return (
    <>
      <h1>Port Guessing Game!</h1>
      <div className="game-card">
        <div className="card-content">
          <div className="score">
            <h2>Question #{questionNumber}</h2>
            <p>Score: {score}</p>
          </div>

          <h3>Which port matches this description?</h3>
          <p>{currentQuestion.description}</p>

          <div className="options-grid">
            {options.map((port) => {
              const isSelected = selected === port;
              const isCorrectPort = port === currentQuestion.port;

              let className = "option-btn";

              if (selected !== null) {
                if (isCorrectPort) className += " correct";
                else if (isSelected) className += " wrong";
              }

              return (
                <button
                  key={port}
                  onClick={() => handleOptionClick(port)}
                  disabled={selected !== null}
                  className={className}
                >
                  Port {port}
                </button>
              );
            })}
          </div>
        </div>
        {selected !== null && (
          <div className="feedback">
            {isCorrect
              ? "Correct! ✔"
              : `Incorrect: Correct port: ${currentQuestion.port}`}
          </div>
        )}

        <button className="next-btn" onClick={handleNext}>
          {selected === null ? "Skip" : "Next"}
        </button>
      </div>
    </>
  );
}

export default App;
