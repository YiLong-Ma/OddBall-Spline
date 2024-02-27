import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>©Elijah Chan 2024</div>
      <div className={styles.right}> <a href="https://github.com/jillnguyen2311/NBATracker-final-project-MDIA3109" target='_blank'>Oddball</a></div>
    </footer>
  );
};

export default Footer;
