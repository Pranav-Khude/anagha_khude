import { personal } from '../data';
import { Footer } from '../components';
import { useScrollReveal } from '../hooks';
import styles from './CVPage.module.css';

export const CVPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={`${styles.header} ${isVisible ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
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

          <section className={`${styles.contact} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.contactTitle}>Get in Touch</h2>
            <p className={styles.contactIntro}>
              For opportunities, collaborations or conversations around urban planning, urban design and architecture, feel free to reach out.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};