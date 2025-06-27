import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

export function Question() {
  const { questions } = useQuiz();
  return (
    <div className="">
      <div>
        <h4>{questions.question}</h4>
        <Options />
      </div>
    </div>
  );
}
