import { useScrollReveal } from '../hooks';
import styles from './Contact.module.css';

export const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Get in Touch</span>
          <h2 className={styles.title}>Let's Talk About Places.</h2>
          <p className={styles.intro}>
            For opportunities, collaborations or conversations around urban planning, urban design and architecture, feel free to reach out.
          </p>
        </header>
      </div>
    </section>
  );
};
