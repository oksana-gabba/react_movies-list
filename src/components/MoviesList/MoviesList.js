import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => <MovieCard key={movie.imdbId} {...movie} />)}
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    },
  ).isRequired,
};
