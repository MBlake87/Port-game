import { useState } from "react";
import { PORT_QUESTIONS } from "./portData";

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
    if (selected !== null) return;

    setSelected(port);
    const correct = port === currentQuestion.port;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    setQuestionNumber((prev) => prev + 1);
    setupNewQuestion();
  }

  if (!currentQuestion) return <div>Loading…</div>;

  return (
    <div>
      <h2>Question #{questionNumber}</h2>
      <p>Score: {score}</p>

      <h3>Which port matches this description?</h3>
      <p>{currentQuestion.description}</p>

      <div>
        {options.map((port) => (
          <button
            key={port}
            onClick={() => handleOptionClick(port)}
            disabled={selected !== null}
          >
            Port {port}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div>
          {isCorrect ? (
            <p>Correct! ✔</p>
          ) : (
            <p>
              Incorrect. The correct port is{" "}
              <strong>{currentQuestion.port}</strong>.
            </p>
          )}
        </div>
      )}

      <button onClick={handleNext}>
        {selected === null ? "Skip" : "Next"}
      </button>
    </div>
  );
}

export default App;
