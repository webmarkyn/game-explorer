import PropTypes from 'prop-types';

export const genresList = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
}));

export const gameType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  backgroundImage: PropTypes.string,
  rating: PropTypes.number,
  metacritic: PropTypes.number,
  platforms: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
});

export const gamesServiceType = {
  baseUrl: PropTypes.string,
  getGames: PropTypes.func,
  getGenres: PropTypes.func,
};
