import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.js";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={setMovieRating}
        movieRating={movieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<StarRating*/}
    {/*  maxRating={5}*/}
    {/*  messages={["Terrible", "Bad", "Ok", "Good", "Great"]}*/}
    {/*  defaultRating={3}*/}
    {/*/>*/}
    {/*<StarRating maxRating={10} color="darkblue" size={30} className="star" />*/}
    {/*<Test />*/}
    <App />
  </React.StrictMode>,
);

/* Challenge: https://codesandbox.io/p/sandbox/react-challenge-text-expander-starter-forked-tmc749?file=%2Fsrc%2FApp.js%3A39%2C25 */
