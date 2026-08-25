import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks';
import { personal } from '../data';
import styles from './Header.module.css';

const navLinks = [
  { label: 'About', to: '/#about' },
  { label: 'Work', to: '/#work' },
  { label: 'Blog', to: '/blog' },
  { label: 'CV', to: '/#cv' },
  { label: 'Contact', to: '/#contact' },
];

export const Header = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('/#')) {
      const targetId = to.replace('/#', '');
      const element = document.getElementById(targetId);

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {personal.name}
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            link.to.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={styles.navLink}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
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
            link.to.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={styles.mobileNavLink}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={styles.mobileNavLink}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};
