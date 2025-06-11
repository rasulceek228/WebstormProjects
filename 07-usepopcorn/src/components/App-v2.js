import { useEffect, useState } from "react";
import Nav from "./Nav";
import Box from "./Box";
import ListOfMovies from "./ListOfMovies";
import Summary from "./Summary";
import ListWatchedMovies from "./ListWatchedMovies";
import Main from "./Main";

import MovieDetails from "./MovieDetails";
import Loader from "./Loader";

const KEY = "9e2714ed";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedMovies(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseDetails() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?&apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setError("");
      setMovies([]);
      return;
    }
    handleCloseDetails();
    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <Nav>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Nav>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <ListOfMovies movies={movies} onSelected={handleSelectedMovies} />
          )}
          {error && <Error error={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedMovie={selectedId}
              onClose={handleCloseDetails}
              onAddWatched={handleAddWatched}
              watched={watched}
              onDeleteMovie={handleDeleteWatched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <ListWatchedMovies
                watched={watched}
                onDeleteMovie={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function Error({ error }) {
  return (
    <p className="error">
      <span>⛔</span>
      {error}
    </p>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
