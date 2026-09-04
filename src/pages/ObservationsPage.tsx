import { Footer } from '../components';
import styles from './Observations.module.css';

export const ObservationsPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div>
                <span className={styles.label}>Observations</span>
                <p className={styles.subtitle}>
                  Photographs exploring places, landscapes, architecture and the details in between.
                </p>
              </div>
            </div>
          </header>

          <div className={styles.comingSoon}>
            <p className={styles.comingSoonLabel}>Ongoing</p>
            <p className={styles.comingSoonText}>More observations coming soon.</p>
            <p className={styles.comingSoonSubtext}>
              Stay tuned for reflections on place, space, and the built environment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};