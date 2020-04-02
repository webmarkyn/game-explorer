import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import withGamesService from '../../HOC/withGamesService';
import GamesList from '../../components/gamesList';
import { fetchGames } from '../../actions';

const HomePage = ({
  games,
  gamesLoading,
  genreQuery,
  sort,
  search,
  conditionsLoading,
  gamesService,
  fetchGames
}) => {
  useEffect(() => {
    fetchGames(gamesService.getGames);
  }, [fetchGames, gamesService]);

  const styles = {
    height: 5+'rem',
    width: 5+'rem',
  };

  return (
    <div>
      <GamesList games={games} />
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.games.data,
  gamesLoading: state.games.loading,
  genreQuery: state.conditions.genreQuery,
  sort: state.conditions.sort,
  search: state.conditions.search,
  conditionsLoading: state.conditions.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchGames: fetchGames(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withGamesService(HomePage));
