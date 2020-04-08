import React from 'react';
import PropTypes from 'prop-types';

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
          <select
            name="sortSelect"
            id="sortSelect"
            className="form-control"
            value={sort}
            onChange={e => onSortChange(e.target.value)}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="BEST">Rating best</option>
            <option value="WORST">Rating worst</option>
          </select>
        </label>
      </div>
      <div className="form-group align-items-center">
        <label htmlFor="genreSelect">
          <p className="d-none d-lg-block">Genre</p>
          <select
            name="genreSelect"
            id="genreSelect"
            className="form-control"
            value={genre}
            onChange={e => onGenreChange(e.target.value)}
          >
            <option value="All">All</option>
            {genresList.map(genre => (
              <option value={genre.name} key={genre.id}>{genre.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group align-items-center">
        <label htmlFor="searchInput">
          <p className="d-none d-lg-block">Search</p>
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            name="searchInput"
            id="searchInput"
            value={search}
            onChange={e => { onSearchChange(e.target.value); }}
          />
        </label>
      </div>
    </form>
  </div>
);

Condtitions.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Condtitions;
