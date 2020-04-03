import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import withGamesService from '../../HOC/withGamesService';
import { fetchGames, fetchSelectedGame } from '../../actions';
import Spinner from '../../components/spinner';
import GamesList from '../../components/gamesList';
import GameInfo from '../../components/gameInfo';
import { gamesServiceType, gameType } from '../../prop-types';

const GameInfoPage = ({
  games,
  gamesLoading,
  selectedGame,
  selectedGameLoading,
  fetchGames,
  fetchSelectedGame,
  gamesService,
}) => {
  const { id } = useParams();

  useEffect(() => {
    fetchSelectedGame(gamesService.getGame, id)
      .then(game => fetchGames(() => gamesService.getGames(game.mainGenreId)));
  }, [fetchGames, gamesService, fetchSelectedGame, id]);

  if (gamesLoading || selectedGameLoading) return <Spinner />;

  const filteredGames = games.filter(game => game.name !== selectedGame.name);

  return (
    <div className="games-info-page">
      <GameInfo game={selectedGame} />
      <h2 className="my-4">Games of similar genre</h2>
      <GamesList games={filteredGames} />
    </div>
  );
};

GameInfoPage.propTypes = {
  games: PropTypes.arrayOf(gameType).isRequired,
  gamesLoading: PropTypes.bool.isRequired,
  selectedGame: (gameType).isRequired,
  selectedGameLoading: PropTypes.bool.isRequired,
  fetchGames: PropTypes.func.isRequired,
  fetchSelectedGame: PropTypes.func.isRequired,
  gamesService: (gamesServiceType).isRequired,
};

const mapStateToProps = state => ({
  games: state.games.data,
  gamesLoading: state.games.loading,
  selectedGame: state.selectedGame.game,
  selectedGameLoading: state.selectedGame.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchGames: fetchGames(dispatch),
  fetchSelectedGame: fetchSelectedGame(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withGamesService(GameInfoPage));
