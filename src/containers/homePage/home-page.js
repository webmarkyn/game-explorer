import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withGamesService from '../../HOC/withGamesService';
import GamesList from '../../components/gamesList';
import {
  fetchGames, fetchGenres, updateGenre, updateSearch, updateSort,
} from '../../actions';
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
  gamesService,
  fetchGames,
  fetchGenres,
  updateSearch,
  updateSort,
  updateGenre,
}) => {
  useEffect(() => {
    fetchGenres(gamesService.getGenres);
    fetchGames(gamesService.getGames);
  }, [fetchGames, gamesService, fetchGenres]);

  const performSearch = games => (
    games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
  );

  const performFilter = games => {
    if (genreQuery === 'All') return games;
    return games.filter(game => game.genres.includes(genreQuery));
  };

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
      case 'BEST':
        return games.sort((a, b) => {
          if (a.rating < b.rating) return 1;
          return -1;
        });
      case 'WORST':
        return games.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          return -1;
        });
      default:
        return games;
    }
  };

  const filteredGames = performFilter(performSort(performSearch(games)));

  if (gamesLoading) return (<Spinner />);

  return (
    <div>
      <Condtitions
        genresList={genresList}
        onSearchChange={query => updateSearch(query)}
        search={search}
        sort={sort}
        onSortChange={query => updateSort(query)}
        onGenreChange={newGenre => updateGenre(newGenre)}
        genre={genreQuery}
      />
      {filteredGames.length === 0
        ? <h3 className="text-center">Sorry, but we found nothing :(</h3>
        : <GamesList games={filteredGames} />}
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
  gamesService: PropTypes.shape(gamesServiceType).isRequired,
  fetchGames: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
  updateSort: PropTypes.func.isRequired,
  updateGenre: PropTypes.func.isRequired,
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
  updateGenre: genre => dispatch(updateGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withGamesService(HomePage));
