import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <header className={`d-flex justify-content-center align-items-center ${styles.header}`}>
    <h1><NavLink to="/" className={styles.headerLink}>GameExplorer</NavLink></h1>
  </header>
);

export default Header;
