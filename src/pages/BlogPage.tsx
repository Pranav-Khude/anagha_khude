import { Link } from 'react-router-dom';
import { Footer } from '../components';
import { useScrollReveal } from '../hooks';
import styles from './Blog.module.css';

const blogEntries = [
  {
    id: 'public-library',
    year: '2024',
    title: 'Can a library be an infrastructure?',
    excerpt: 'Exploring the role of public libraries as democratic institutions and community hubs in contemporary urban contexts.',
  },
  {
    id: 'rethinking-the-city',
    year: '2024',
    title: 'What happens when the city becomes your neighbourhood?',
    excerpt: 'Compact cities, nature, public space and the lessons of COVID-19.',
  },
  {
    id: 'economy-and-city',
    year: '2023',
    title: 'What does a region\'s economy tell us about how its city should grow?',
    excerpt: 'Understanding Western Melbourne through industry, employment and spatial advantage.',
  },
  {
    id: 'elsternwick',
    year: '2023',
    title: 'How do you grow an established place without losing its identity?',
    excerpt: 'Reading Elsternwick through movement, public space and urban character.',
  },
];

export const BlogPage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: archiveRef, isVisible: archiveVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <header
            className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
            ref={headerRef as React.RefObject<HTMLElement>}
          >
            <span className={styles.label}>Writing</span>
            <p className={styles.subtitle}>
              Exploring ideas on urban planning, design, and the built environment.
            </p>
          </header>

          <section className={styles.archiveSection}>
            <div className={styles.archiveList} ref={archiveRef as React.RefObject<HTMLDivElement>}>
              {blogEntries.map((entry, index) => (
                <Link
                  to={`/project/${entry.id}`}
                  key={entry.id}
                  className={`${styles.archiveEntry} ${archiveVisible ? styles.visible : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className={styles.archiveYear}>{entry.year}</span>
                  <div className={styles.archiveContent}>
                    <h3 className={styles.archiveTitle}>{entry.title}</h3>
                    <p className={styles.archiveExcerpt}>{entry.excerpt}</p>
                  </div>
                  <span className={styles.archiveArrow}>→</span>
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.comingSoon}>
            <p className={styles.comingSoonLabel}>Ongoing</p>
            <p className={styles.comingSoonText}>More research coming soon.</p>
            <p className={styles.comingSoonSubtext}>
              Stay tuned for articles, case studies, and reflections on place, policy, and design.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};