import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { gameType } from '../../prop-types';

import styles from './GameInfo.module.css';

const GameInfo = ({ game }) => (
  <div className="gameInfo mt-5">
    <div className="row">
      <div className="col-lg-6">
        <div className={styles.gamePic}>
          <img src={game.backgroundImage} alt="game" className="mw-100" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="game-main-info">
          <p className="h1 font-weight-bold">{game.name}</p>
          <p className="h5">
            <span className="badge badge-light h2">Metacritic: {game.metacritic}</span>
          </p>
          <p>
            Platforms:
            {
              game.platforms ? game.platforms.map(platform => <span> {platform} </span>) : null
            }
          </p>
          {ReactHtmlParser(game.description)}
          <div className="game-tags">
            {game.tags ? game.tags.map(tag => <span key={tag} className="badge badge-danger mr-2">{tag}</span>) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
);

GameInfo.propTypes = {
  game: (gameType).isRequired,
};

export default GameInfo;
