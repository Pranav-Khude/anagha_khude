import { Footer } from '../components';
import styles from './Blog.module.css';

export const BlogPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Writing</span>
          <h1 className={styles.title}>Research & Thinking</h1>
          <p className={styles.subtitle}>
            Exploring ideas on urban planning, design, and the built environment.
          </p>
        </header>

        <div className={styles.comingSoon}>
          <p className={styles.comingSoonText}>New blogs coming soon.</p>
          <p className={styles.comingSoonSubtext}>
            Stay tuned for articles, case studies, and reflections on place, policy, and design.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};
