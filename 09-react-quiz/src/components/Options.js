import { useQuiz } from "../contexts/QuizContext";

export default function Options() {
  const { answer, dispatch, questions } = useQuiz();
  const hasAnswer = answer !== null;
  return (
    <>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option 
            ${index === answer ? "answer " : ""} 
            ${hasAnswer && (index === questions.correctOption ? "correct" : "wrong")}`}
            key={option}
            disabled={hasAnswer}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
