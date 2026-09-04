import { personal } from '../data';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.name}>{personal.name}</h3>
            <p className={styles.title}>{personal.title}</p>
          </div>

          <div className={styles.links}>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} className={styles.link}>
              Email
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
