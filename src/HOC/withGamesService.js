import React from 'react';
import GamesServiceContext from '../contexts/gamesServiceContext';

const withGamesService = Wrapped => props => (
  <GamesServiceContext.Consumer>
    {
      // eslint-disable-next-line react/jsx-props-no-spreading
      context => <Wrapped {...props} gamesService={context} />
    }
  </GamesServiceContext.Consumer>
);

export default withGamesService;
