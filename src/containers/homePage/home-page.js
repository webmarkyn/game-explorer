import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withGamesService from '../../HOC/withGamesService';
import GamesList from '../../components/gamesList';
import { fetchGames } from '../../actions';
import Spinner from '../../components/spinner';
import {gamesServiceType, gameType} from '../../prop-types';

const HomePage = ({
  games,
  gamesLoading,
  genreQuery,
  sort,
  search,
  conditionsLoading,
  gamesService,
  fetchGames,
}) => {
  useEffect(() => {
    fetchGames(gamesService.getGames);
  }, [fetchGames, gamesService]);

  if (gamesLoading) return (<Spinner />);

  return (
    <div>
      <GamesList games={games} />
    </div>
  );
};

HomePage.propTypes = {
  games: PropTypes.arrayOf(gameType).isRequired,
  gamesLoading: PropTypes.bool.isRequired,
  genreQuery: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  conditionsLoading: PropTypes.bool.isRequired,
  gamesService: PropTypes.shape(gamesServiceType).isRequired,
  fetchGames: PropTypes.func.isRequired,
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
