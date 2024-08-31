import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie._id}
          id={movie._id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDeleteMovie={props.onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
