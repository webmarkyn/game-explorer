import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Card, Badge } from 'antd';
import styles from './GamesList.module.css';
import { gameType } from '../../prop-types';

const PAGE_SIZE = 24;

const GamesList = ({ games }) => {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.gamesList}>
      <List
        dataSource={games}
        grid={{
          gutter: 16,
          lg: 4,
          column: 6,
          md: 2,
          sm: 2,
          xs: 1,
          xl: 4,
        }}
        pagination={{
          pageSize: PAGE_SIZE,
          onChange: nextPage => setPage(nextPage),
          current: page,
          hideOnSinglePage: true,
        }}
        renderItem={game => (
          <List.Item>
            <Link to={`/game/${game.id}`}>
              <Card
                hoverable
                cover={<img src={game.backgroundImage} alt="game-cover" />}
                className={styles.gameCard}
              >
                <Card.Meta
                  title={game.name}
                  description={
                    <div className="game-card-desctiption">
                      <div>
                        <span>Metacritic: </span>
                        <Badge
                          style={{
                            backgroundColor: '#52c41a',
                            boxShadow: 'none',
                          }}
                          count={game.metacritic}
                        />{' '}
                      </div>
                      <div>
                        <span>Platforms: </span>
                        <span>
                          {game.platforms.map(platform => `${platform} `)}
                        </span>
                      </div>
                      <div>
                        <span>Genres: </span>
                        <span>
                          <b>{game.genres.map(genre => `${genre} `)}</b>
                        </span>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(gameType).isRequired,
};

export default GamesList;
