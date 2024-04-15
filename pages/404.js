// pages/404.js
import Link from 'next/link';
import styles from './404.module.css';

export default function Custom404() {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.subtitle}>Page not found</p>
          <Link href="/" className={styles.link}>Go back home</Link>
        </div>
      );
}