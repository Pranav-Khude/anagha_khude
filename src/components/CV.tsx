import { personal } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './CV.module.css';

export const CV = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="cv" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Curriculum Vitae</span>
        </header>

        <div className={`${styles.download} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.downloadContent}>
            <p className={styles.downloadText}>
              Download my current CV for a detailed overview of my education, professional experience, skills and selected projects.
            </p>
            <a href={personal.cvLink} download className={styles.viewLink}>
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
