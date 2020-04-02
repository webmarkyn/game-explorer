import React from 'react';

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
  <div className="conditions">
    <form className="d-flex justify-content-around">
      <div className="form-group">
        <label htmlFor="sortSelect">
          <p>Sort by</p>
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
            <option value="RATING WORST">Rating worst</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="genreSelect">
          <p>Genre</p>
          <select name="genreSelect" id="genreSelect">
            <option value="All">All</option>
            {genresList.map(genre => (
              <option value={genre.name} key={genre.id}>{genre.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="searchInput">
          <p>Search</p>
          <input
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

export default Condtitions;
