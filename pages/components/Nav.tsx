import React, { useState } from 'react';
import styles from '@/styles/Nav.module.css';
import Image from 'next/image';

const Nav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a href="/"className={styles.title}>
            <Image src="/images/OddBall.png" alt="logo" width={150} height={50}  />
            </a>
            <div className={styles.menu} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                <li>
                    <a href="#"  className={styles.link}>About</a>
                </li>
                <li>
                    <a href="#"  className={styles.link}>Support</a>
                </li>
                <li>
                    <a href="#"  className={styles.link}>Pricing</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;