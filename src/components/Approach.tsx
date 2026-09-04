import { personal } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './Approach.module.css';

export const Approach = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="approach" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Approach</span>
          <p className={styles.intro}>
            My approach brings together planning, spatial thinking and design to understand places, respond to people's needs and shape practical strategies for their future.
          </p>
        </header>

        <div className={styles.grid}>
          {personal.approach.map((principle, index) => (
            <div
              key={principle.number}
              className={`${styles.item} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <span className={styles.number}>{principle.number}</span>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.description}>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
