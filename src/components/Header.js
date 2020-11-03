import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
};
