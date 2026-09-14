import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../hooks';
import { personal } from '../data';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/work' },
  { label: 'Research & Thinking', to: '/blog' },
  { label: 'Places', to: '/places' },
  { label: 'Contact', to: '/contact' },
];

export const Header = () => {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  return (
    <header className={`${styles.header} ${isHomePage && !isScrolled ? styles.hero : ''} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {personal.name}
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.to}
              className={styles.mobileNavLink}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};