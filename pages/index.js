// pages/index.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <input className={styles.searchBar} type="text" placeholder="Search..." />
            <button className={styles.searchButton}>Search</button>
            <div className={styles.links}>
                <Link href="/signup">
                    <button className={styles.link}>Sign Up</button>
                </Link>
                <Link href="/login">
                    <button className={styles.link}>Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;