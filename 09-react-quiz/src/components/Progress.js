import { useQuiz } from "../contexts/QuizContext";

export function Progress() {
  const { answer, index, numOfQues, points, maxPoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={numOfQues} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numOfQues}
      </p>

      <p>
        {points} / {maxPoints} points
      </p>
    </header>
  );
}
