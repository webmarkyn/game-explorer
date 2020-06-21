import React from 'react';
import PropTypes from 'prop-types';

import { Select } from 'antd';
import Search from 'antd/es/input/Search';
import styles from './Condtitions.module.css';

const Condtitions = ({
  genresList,
  genre,
  search,
  sort,
  onSortChange,
  onSearchChange,
  onGenreChange,
}) => (
  <div className={styles.conditions}>
    <form className="d-flex justify-content-around flex-column flex-md-row">
      <div className="form-group align-items-center">
        <label htmlFor="sortSelect">
          <p className="d-none d-lg-block">Sort</p>
          <Select
            name="sortSelect"
            id="sortSelect"
            value={sort}
            style={{ width: 120 }}
            onChange={value => onSortChange(value)}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="BEST">Rating best</option>
            <option value="WORST">Rating worst</option>
          </Select>
        </label>
      </div>
      <div className="form-group align-items-center">
        <label htmlFor="genreSelect">
          <p className="d-none d-lg-block">Genre</p>
          <Select
            name="genreSelect"
            id="genreSelect"
            value={genre}
            style={{ width: 120 }}
            onChange={value => onGenreChange(value)}
          >
            <option value="All">All</option>
            {genresList.map(genre => (
              <option value={genre.name} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </Select>
        </label>
      </div>
      <div className="form-group align-items-center">
        <label htmlFor="searchInput">
          <p className="d-none d-lg-block">Search</p>
          <Search
            type="text"
            placeholder="Search"
            name="searchInput"
            id="searchInput"
            value={search}
            onChange={event => {
              onSearchChange(event.target.value);
            }}
          />
        </label>
      </div>
    </form>
  </div>
);

Condtitions.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  genre: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Condtitions;
