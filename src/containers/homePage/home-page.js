import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withGamesService from '../../HOC/withGamesService';
import GamesList from '../../components/gamesList';
import {fetchGames, fetchGenres} from '../../actions';
import Spinner from '../../components/spinner';
import { gamesServiceType, gameType, genresList } from '../../prop-types';
import Condtitions from '../../components/condtitions/';

const HomePage = ({
  games,
  gamesLoading,
  genreQuery,
  sort,
  search,
  genresList,
  conditionsLoading,
  gamesService,
  fetchGames,
  fetchGenres,
}) => {
  useEffect(() => {
    fetchGenres(gamesService.getGenres);
    fetchGames(gamesService.getGames);
  }, [fetchGames, gamesService, fetchGenres]);

  console.log(genresList);

  if (gamesLoading) return (<Spinner />);

  return (
    <div>
      <Condtitions genresList={genresList} />
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
  genresList: (genresList).isRequired,
  conditionsLoading: PropTypes.bool.isRequired,
  gamesService: PropTypes.shape(gamesServiceType).isRequired,
  fetchGames: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  games: state.games.data,
  gamesLoading: state.games.loading,
  genreQuery: state.conditions.genreQuery,
  genresList: state.conditions.genresList,
  sort: state.conditions.sort,
  search: state.conditions.search,
  conditionsLoading: state.conditions.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchGames: fetchGames(dispatch),
  fetchGenres: fetchGenres(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withGamesService(HomePage));
