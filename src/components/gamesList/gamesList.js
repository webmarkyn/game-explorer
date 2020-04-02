import React from 'react';
import PropTypes from 'prop-types';
import styles from './GamesList.module.css';

const GamesList = ({ games }) => (
  <div className={styles.gamesList}>
    <div className="container">
      <div className="row">
        {games.map(game => (
          <div className="col-lg-2" key={game.id}>
            <div className="game">
              <div className="game-pic">
                <img src={game.backgroundImage} alt="game" />
              </div>
              <div className="game-info">
                <p className="game-title">{game.name}</p>
                <p className="game-rating">
                  {game.rating}
                  /5
                </p>
                <div className="game-platforms">
                  {game.platforms.map(platform => `${platform} `)}
                </div>
                <div className="game-genres">
                  {game.genres.map(genre => (`${genre} `))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    backgroundImage: PropTypes.string,
    rating: PropTypes.number,
    metacritic: PropTypes.number,
    platforms: PropTypes.arrayOf(PropTypes.string),
    genres: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default GamesList;
