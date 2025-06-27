import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function convertTime(time) {
  const min = time >= 60 ? Math.floor(time / 60) : 0;
  const sec = time < 60 ? time : time % 60;

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return <div className="timer">{convertTime(secondsRemaining)}</div>;
}
