export default function NextButton({ dispatch, answer, index, numOfQues }) {
  if (answer === null) return null;
  if (index < numOfQues - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "next" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numOfQues - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}
