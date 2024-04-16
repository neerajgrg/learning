// components/layout/main-navigation.js
import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import styles from '../../styles/components/layout/main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/login">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;