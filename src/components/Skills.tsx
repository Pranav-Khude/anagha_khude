import { skills } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './Skills.module.css';

export const Skills = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Expertise</span>
          <h2 className={styles.title}>Skills</h2>
        </header>

        <div className={styles.grid}>
          {skills.map((category, index) => (
            <div
              key={category.title}
              className={`${styles.category} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
