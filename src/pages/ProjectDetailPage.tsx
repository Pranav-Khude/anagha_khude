import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data';
import { Footer } from '../components';
import styles from './ProjectDetail.module.css';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/#work" className={styles.backLink}>
          ← Back to Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img src={project.coverImage} alt={project.title} />
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <Link to="/#work" className={styles.backLink}>
              ← Back to Work
            </Link>

            <header className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <div className={styles.meta}>
                <span className={styles.metaItem}>{project.location}</span>
                <span className={styles.metaSeparator}>·</span>
                <span className={styles.metaItem}>{project.year}</span>
              </div>
              <div className={styles.tags}>
                {project.discipline.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className={styles.grid}>
              <div className={styles.mainContent}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Overview</h2>
                  <p className={styles.sectionText}>{project.overview}</p>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Objectives</h2>
                  <ul className={styles.objectivesList}>
                    {project.objectives.map((objective, index) => (
                      <li key={index} className={styles.objectiveItem}>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Approach</h2>
                  <p className={styles.sectionText}>{project.approach}</p>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Outcomes</h2>
                  <p className={styles.sectionText}>{project.outcomes}</p>
                </section>
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Project Type</h3>
                  <p className={styles.sidebarValue}>
                    {project.discipline.join(' + ')}
                  </p>
                </div>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Location</h3>
                  <p className={styles.sidebarValue}>{project.location}</p>
                </div>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Year</h3>
                  <p className={styles.sidebarValue}>{project.year}</p>
                </div>
              </aside>
            </div>

            <section className={styles.gallery}>
              <h2 className={styles.sectionTitle}>Project Gallery</h2>
              <div className={styles.galleryGrid}>
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.galleryItem} ${index === 0 ? styles.featured : ''}`}
                  >
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
