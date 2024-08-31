import React, { useState, useEffect, useRef, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retryTimer = useRef(null);
  const [retrying, setRetrying] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong ...Retrying');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setRetrying(false);
    } catch (error) {
      setError(error.message || 'Something went wrong ...Retrying');
      console.log(error);
      setRetrying(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  useEffect(() => {
    if (retrying) {
      retryTimer.current = setInterval(fetchMoviesHandler, 5000);
    }

    return () => {
      clearTimeout(retryTimer.current);
    };
  }, [retrying]);

  const cancelRetrying = () => {
    clearTimeout(retryTimer.current);
    setRetrying(false);
    setError('Retrying canceled by user');
  };

  let content = <p>Found no movies</p>;

  if (error) {
    content = (
      <div>
        <p>{error}</p>
        {retrying && <button onClick={cancelRetrying}>Cancel Retrying</button>}
      </div>
    );
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} disabled={retrying}>
          {retrying ? 'Retrying...' : 'Fetch Movies'}
        </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
