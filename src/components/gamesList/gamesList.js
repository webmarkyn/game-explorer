import React from 'react';
import PropTypes from 'prop-types';
import styles from './GamesList.module.css';
import { gameType } from '../../prop-types';
import {Link} from 'react-router-dom';

const GamesList = ({ games }) => (
  <div className={styles.gamesList}>
    <div className="row">
      {games.map(game => (
        <div className="col-lg-2" key={game.id}>
          <Link to={`/game/${game.id}`}>
            <div className="game">
              <div className="game-pic">
                <img src={game.backgroundImage} alt="game" className="mw-100" />
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
