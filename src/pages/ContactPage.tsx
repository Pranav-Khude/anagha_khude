import { personal } from '../data';
import { Footer } from '../components';
import { useScrollReveal } from '../hooks';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={`${styles.header} ${isVisible ? styles.visible : ''}`} ref={ref as React.RefObject<HTMLElement>}>
            <span className={styles.label}>Get in Touch</span>
            <h1 className={styles.title}>Let's Talk About Places.</h1>
            <p className={styles.intro}>
              For opportunities, collaborations or conversations around urban planning, urban design and architecture, feel free to reach out.
            </p>
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
      </main>
      <Footer />
    </>
  );
};