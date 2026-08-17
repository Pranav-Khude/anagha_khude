import { cvSections, personal } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './CV.module.css';

export const CV = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="cv" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Resume</span>
          <h2 className={styles.title}>Curriculum Vitae</h2>
        </header>

        <div className={styles.content}>
          <div className={`${styles.preview} ${isVisible ? styles.visible : ''}`}>
            {cvSections.map((section, index) => (
              <div
                key={section.title}
                className={styles.section}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <ul className={styles.items}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`${styles.download} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.downloadContent}>
              <p className={styles.downloadText}>
                View my full CV for a comprehensive overview of my education, experience, and qualifications.
              </p>
              <a href={personal.cvLink} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
