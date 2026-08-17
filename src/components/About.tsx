import { personal, education } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './About.module.css';

export const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <header className={`${styles.header} ${sectionVisible ? styles.visible : ''}`}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>Background</h2>
        </header>

        <div className={styles.content}>
          <div
            className={`${styles.bio} ${contentVisible ? styles.visible : ''}`}
            ref={contentRef as React.RefObject<HTMLDivElement>}
          >
            {personal.aboutFull.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={`${styles.timeline} ${contentVisible ? styles.visible : ''}`}>
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
