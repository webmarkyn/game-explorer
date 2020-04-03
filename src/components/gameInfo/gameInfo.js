import React from 'react';

const GameInfo = ({ game }) => (
  <div className="gameInfo">
    <div className="row">
      <div className="col-md-6">
        <div className="game-img">
          <img src={game.backgroundImage} alt=""/>
        </div>
      </div>
      <div className="col-md-6"></div>
    </div>
  </div>
)