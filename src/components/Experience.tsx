import { experience } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './Experience.module.css';

export const Experience = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Career</span>
          <h2 className={styles.title}>Experience</h2>
        </header>

        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`${styles.item} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={styles.itemHeader}>
                <div className={styles.itemMain}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.orgLocation}>
                    {exp.organization} — {exp.location}
                  </p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
