import React from 'react';
import classes from './Movie.module.css';

const Movie = (props) => {
  const deleteHandler = () => {
    props.onDeleteMovie(props.id);
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <p>{props.releaseDate}</p>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
