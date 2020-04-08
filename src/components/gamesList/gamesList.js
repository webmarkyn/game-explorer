import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './GamesList.module.css';
import { gameType } from '../../prop-types';

const GamesList = ({ games }) => (
  <div className={styles.gamesList}>
    <div className="row d-flex align-items-stretch">
      {games.map(game => (
        <div className="col-md-4 col-sm-6 col-lg-3 mb-4" key={game.id}>
          <Link to={`/game/${game.id}`}>
            <div className={styles.game}>
              <div className="game-pic">
                <img src={game.backgroundImage} alt="game" className="mw-100" />
              </div>
              <div className="game-info mt-2 p-3">
                <p className="game-title font-weight-bold h5 text-center">{game.name}</p>
                <p className="game-rating text-center">
                  <span className="badge badge-info">
                    {game.rating}
                    /5
                  </span>
                </p>
                <div className="game-platforms">
                  Platfroms:
                  {game.platforms.map(platform => `${platform} `)}
                </div>
                <div className="game-genres">
                  Genres:
                  <span className="font-weight-bold">
                    {game.genres.map(genre => (` ${genre} `))}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(gameType).isRequired,
};

export default GamesList;
