import { education, experience } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './About.module.css';

export const About = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>CAREER</span>
        </header>

        <div className={styles.content}>
          <div className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.timelineTitle}>Professional experience</h3>
            <div className={styles.timelineList}>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={styles.timelineItem}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <span className={styles.timelinePeriod}>{exp.period}</span>
                  <h4 className={styles.timelineDegree}>{exp.role}</h4>
                  <p className={styles.timelineInstitution}>{exp.organization}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.timelineTitle}>Education</h3>
            <div className={styles.timelineList}>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={styles.timelineItem}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <span className={styles.timelinePeriod}>{edu.period}</span>
                  <h4 className={styles.timelineDegree}>{edu.degree}</h4>
                  <p className={styles.timelineInstitution}>{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
