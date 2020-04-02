import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withGamesService from '../../HOC/withGamesService';
import GamesList from '../../components/gamesList';
import {fetchGames, fetchGenres, updateSearch, updateSort} from '../../actions';
import Spinner from '../../components/spinner';
import { gamesServiceType, gameType, genresList } from '../../prop-types';
import Condtitions from '../../components/condtitions';

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
  updateSearch,
  updateSort
}) => {
  useEffect(() => {
    fetchGenres(gamesService.getGenres);
    fetchGames(gamesService.getGames);
  }, [fetchGames, gamesService, fetchGenres]);

  const performSearch = games => (
    games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
  );

  const performSort = games => {
    switch (sort) {
      case 'A-Z':
        return games.sort((a, b) => {
          if (a.name < b.name) return -1;
          return 1;
        });
      case 'Z-A':
        return games.sort((a, b) => {
          if (a.name < b.name) return 1;
          return -1;
        });
      default:
        return games;
    }
  };

  const filteredGames = performSort(performSearch(games));

  if (gamesLoading) return (<Spinner />);

  return (
    <div>
      <Condtitions
        genresList={genresList}
        onSearchChange={query => updateSearch(query)}
        search={search}
        onSortChange={query => updateSort(query)}
      />
      <GamesList games={filteredGames} />
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
  updateSearch: query => dispatch(updateSearch(query)),
  updateSort: query => dispatch(updateSort(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withGamesService(HomePage));
