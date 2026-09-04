import { Footer } from '../components';
import { useScrollReveal } from '../hooks';
import styles from './Places.module.css';

export const PlacesPage = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header
            className={`${styles.header} ${isVisible ? styles.visible : ''}`}
            ref={ref as React.RefObject<HTMLElement>}
          >
            <span className={styles.label}>Observations</span>
            <p className={styles.subtitle}>
              Exploring urban spaces, public realms, and the architecture of everyday life.
            </p>
          </header>
        </div>
      </main>
      <Footer />
    </>
  );
};