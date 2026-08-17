import { personal } from '../data';
import { useScrollReveal } from '../hooks';
import styles from './Approach.module.css';

export const Approach = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="approach" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Philosophy</span>
          <h2 className={styles.title}>Design Approach</h2>
          <p className={styles.intro}>
            Four principles that guide my work in shaping better places.
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
