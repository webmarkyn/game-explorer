import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className="d-flex justify-content-center">
    <div className={`spinner-grow text-danger ${styles.loadingSpinner}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
